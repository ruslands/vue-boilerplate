import type { Axios } from 'axios'

export interface IAuthorizeResponseData {
  access_token: string
  refresh_token: string
  refresh_token_timeout: number
  token_type: string
  expires_at: number
}

export interface IAuthorizeResponseMeta {
  id: string
  email: string
  first_name: string
  full_name: string
  last_name: string
  picture: string
  roles: unknown[]
}

export interface IAuthorizePayload {
  scope: string
  code: string
  authuser: string
  prompt: string
}

export interface IAuthorizeResponse {
  data: IAuthorizeResponseData
  meta: IAuthorizeResponseMeta
}

export interface IProvider {
  readonly client: Axios
  getRedirectUrl(): Promise<void | string>
  authorize(params: IAuthorizePayload): Promise<IAuthorizeResponse>
}
