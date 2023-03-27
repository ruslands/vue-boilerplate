<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

import { useRoute } from 'vue-router'

const route = useRoute()
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'DefaultLayout':
      return DefaultLayout
    case 'EmptyLayout':
    default:
      return EmptyLayout
  }
})
</script>
