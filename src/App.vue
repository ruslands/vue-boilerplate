<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">
nav a {
  &.router-link-exact-active {
    @apply text-gray-800 dark:text-white;

    &:hover {
      @apply bg-transparent;
    }
  }
}
</style>
