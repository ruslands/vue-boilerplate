<template>
  <main class="flex h-screen justify-center items-center">
    <Loader class="w-24 h-24" />
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import Loader from '@/components/Loader.vue'

import { useAuthorization } from '@/stores/authorization'
import { authService } from '@/services'
import type { IAuthorizePayload } from '@/services/auth/providers/provider.interface'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  const {
    query: { scope, code, prompt, authuser }
  } = route

  if (!scope || !code || !prompt || !authuser) {
    router.replace('/auth')
    return
  }

  authorize({
    scope: scope.toString(),
    code: code.toString(),
    prompt: prompt.toString(),
    authuser: authuser.toString()
  })
})

const authorize = async (params: IAuthorizePayload) => {
  try {
    const response = await authService.authorize('google', params)
    const { authorizeUser } = useAuthorization()
    authorizeUser(response)
    await router.replace({ name: 'home' })
  } catch (e) {
    console.error(e)
    await router.replace({ name: 'auth' })
  }
}
</script>
