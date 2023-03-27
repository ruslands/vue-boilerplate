<template>
  <div class="h-screen p-4 flex flex-col justify-center items-center">
    <img
      alt="logo"
      class="w-14"
      src="@/assets/logo-sm.svg"
    >
    <div class="mt-16 flex flex-col justify-center items-center">
      <p class="text-sm leading-5 font-semibold tracking-wide uppercase text-ui-green">
        404 ошибка
      </p>
      <h1
        class="mt-6 sm:mt-2 text-3xl sm:text-5xl leading-none font-extrabold tracking-tight text-gray-900 text-center"
      >
        Страница не найдена
      </h1>
      <p class="mt-4 sm:mt-2 text-sm sm:text-base leading-6 font-normal text-gray-500 text-center">
        Извините, мы не смогли найти страницу, которую вы ищете.
      </p>
      <router-link
        class="flex items-center justify-center mt-6 text-base leading-6 font-medium text-ui-green"
        :to="{ name: 'auth' }"
      >
        <span class="block mr-2">На главную</span>
        <arrow-right-icon class="w-4 h-4" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>
