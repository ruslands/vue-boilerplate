import { createRouter, createWebHistory } from 'vue-router'
import type { NavigationGuard } from 'vue-router'
import { useAuthorization } from '@/stores/authorization'
import { APP_URL, AUTH_CALLBACK_PATH } from '@/constants'

const authGuard: NavigationGuard = (to, from, next) => {
  const { isAuthorized } = useAuthorization()
  return isAuthorized ? next() : next('/auth')
}

const guestGuard: NavigationGuard = (to, from, next) => {
  const { isAuthorized } = useAuthorization()
  return isAuthorized ? next('/') : next()
}

const router = createRouter({
  history: createWebHistory(APP_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      meta: { layout: 'EmptyLayout' },
      component: () => import('@/views/AuthView.vue'),
      beforeEnter: [guestGuard]
    },
    {
      path: AUTH_CALLBACK_PATH,
      name: 'auth-callback',
      meta: { layout: 'EmptyLayout' },
      component: () => import('@/views/AuthCallbackView.vue'),
      beforeEnter: [guestGuard]
    },
    {
      path: '/',
      name: 'home',
      meta: { layout: 'DefaultLayout' },
      component: () => import('@/views/HomeView.vue'),
      beforeEnter: [authGuard]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundErrorView.vue'),
      meta: { layout: 'EmptyLayout' }
    }
  ]
})

export default router
