import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type {
  IAuthorizeResponse,
  IAuthorizeResponseData,
  IAuthorizeResponseMeta
} from '@/services/auth/providers/provider.interface'
import { StorageSerializers, useLocalStorage } from '@vueuse/core'
import router from '@/router'
import { authService } from '@/services'

export const useAuthorization = defineStore('authorization', () => {
  const authData = useLocalStorage('authData', ref<null | IAuthorizeResponseData>(null), {
    serializer: StorageSerializers.object
  })

  const authMeta = useLocalStorage('authMeta', ref<null | IAuthorizeResponseMeta>(null), {
    serializer: StorageSerializers.object
  })

  const isAuthorized = computed(() => authData.value !== null)

  const authorizeUser = (authDataInfo: IAuthorizeResponse) => {
    authData.value = authDataInfo.data
    authMeta.value = authDataInfo.meta
  }

  const refreshToken = async (): Promise<void> => {
    const { refresh_token: refreshToken } = authData.value
    const response = await authService.refreshToken(refreshToken)
    authorizeUser(response)
  }

  const logout = async (force = false) => {
    try {
      if (!force) {
        await authService.logout()
      }
    } catch (e) {
      console.error(e)
    } finally {
      authData.value = null
      authMeta.value = null
      setTimeout(() => {
        router.replace({ name: 'auth' })
      })
    }
  }

  return { authorizeUser, refreshToken, logout, authData, isAuthorized }
})
