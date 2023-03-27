<template>
  <main class="h-screen flex flex-col items-center">
    <img
      class="mt-20"
      src="@/assets/logo-lg.svg"
      alt="Vpakete logo"
    >

    <div class="mt-60">
      <van-button
        block
        class="auth__btn"
        @click="googleAuthorize"
      >
        <div class="flex items-center">
          <img
            src="@/assets/icons/google.svg"
            alt="Google icon"
            class="mr-2"
          >
          <span class="uppercase font-medium text-sm">
            {{ $t('CONTINUE_WITH_GOOGLE') }}
          </span>
        </div>
      </van-button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { authService } from '@/services'
import { ref } from 'vue'

const isLoading = ref(false)

const googleAuthorize = async () => {
  try {
    isLoading.value = true
    await authService.redirectToAuthorization('google')
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.auth__btn {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
}
</style>
