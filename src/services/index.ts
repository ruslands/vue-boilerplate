import axiosClient from '@/services/core/axios'
import AuthService from '@/services/auth/auth.service'

export const authService = new AuthService(axiosClient)
