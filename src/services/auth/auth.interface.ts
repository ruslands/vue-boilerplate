import type { IProvider } from '@/services/auth/providers/provider.interface'

export interface IProviderInstance {
  [k: string]: IProvider
}

export interface IConstructorOptions {
  providers: IProviderInstance
}
