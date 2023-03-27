import type { Axios } from 'axios'
import type { IProvider,
  IAuthorizePayload,
  IAuthorizeResponse
} from '@/services/auth/providers/provider.interface'
import { isAxiosError } from 'axios'
import { API_AUTH_V1, APP_URL } from '@/constants'

class GoogleProvider implements IProvider {
  REDIRECT_URL = window.location.origin + APP_URL + '/auth/callback'

  // eslint-disable-next-line no-useless-constructor
  constructor (readonly client: Axios) {}

  async getRedirectUrl (): Promise<void | string> {
    try {
      await this.client.get(API_AUTH_V1 + '/auth/google', {
        params: {
          redirect_enable: false,
          redirect_uri: this.REDIRECT_URL
        }
      })
    } catch (e) {
      if (isAxiosError<string>(e)) {
        if (e.response?.status === 303) {
          return e.response.data
        }
      }
    }
  }

  async authorize (params: IAuthorizePayload): Promise<IAuthorizeResponse> {
    const {
      data: { data, meta }
    } = await this.client.get(API_AUTH_V1 + '/auth/google/callback', {
      params,
      headers: {
        'redirect-uri': this.REDIRECT_URL
      }
    })

    return { data, meta }
  }
}

export default GoogleProvider
