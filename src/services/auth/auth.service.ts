import GoogleProvider from '@/services/auth/providers/google.provider'

import type { IProviderInstance } from '@/services/auth/auth.interface'
import type {
  IAuthorizePayload,
  IAuthorizeResponse
} from '@/services/auth/providers/provider.interface'
import type { Axios } from 'axios'
import { API_AUTH_V1 } from '@/constants'

export default class AuthService {
  private readonly providers: IProviderInstance
  constructor (readonly client: Axios) {
    this.providers = {
      google: new GoogleProvider(client)
    }
  }

  async redirectToAuthorization (provider: string) {
    const url = await this.providers[provider].getRedirectUrl()
    if (url) {
      window.open(url, '_self')
    }
  }

  authorize (
    provider: string,
    params: IAuthorizePayload
  ): Promise<IAuthorizeResponse> {
    return this.providers[provider].authorize(params)
  }

  async refreshToken (token: string): Promise<IAuthorizeResponse> {
    const { data } = await this.client.post(API_AUTH_V1 + '/auth/refresh-token', {
      refresh_token: token
    })
    return data
  }

  async logout () {
    return this.client.get(API_AUTH_V1 + '/auth/logout')
  }
}
