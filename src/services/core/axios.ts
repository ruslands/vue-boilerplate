import axios, { AxiosError, HttpStatusCode } from 'axios'
import { useAuthorization } from '@/stores/authorization'
import { APP_HOSTNAME, REFRESH_TOKEN_PATH } from '@/constants'

interface RequestQueueItem {
  resolve: (value?: Promise<unknown> | PromiseLike<Promise<unknown>>) => void
  reject: (reason?: unknown) => void
}

let isRefreshing = false
let failedQueue: RequestQueueItem[] = []

const processQueue = (error: AxiosError | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve()
    }
  })

  failedQueue = []
}

const axiosClient = axios.create({
  baseURL: APP_HOSTNAME
})

axiosClient.interceptors.request.use((config) => {
  const { authData, isAuthorized } = useAuthorization()
  if (isAuthorized) {
    const { access_token: accessToken } = authData
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config

    const { isAuthorized, logout, authData, refreshToken } = useAuthorization()

    if (error.config.url === REFRESH_TOKEN_PATH) {
      return Promise.reject(error)
    }

    if (
      error.response?.status === HttpStatusCode.Unauthorized &&
      isAuthorized &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then(() => {
            originalRequest.headers['Authorization'] = 'Bearer ' + authData.access_token
            return axiosClient(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      return new Promise(function (resolve, reject) {
        refreshToken()
          .then(() => {
            originalRequest.headers['Authorization'] = 'Bearer ' + authData.access_token
            processQueue(null)
            resolve(axiosClient(originalRequest))
          })
          .catch((err) => {
            processQueue(err)
            logout(true)
            reject(err)
          })
          .finally(() => {
            isRefreshing = false
          })
      })
    }
    return Promise.reject(error)
  }
)

export default axiosClient
