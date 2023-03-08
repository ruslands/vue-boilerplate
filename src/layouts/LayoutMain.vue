<script lang="ts" setup>
import useCalculateTransition from "@/composables/useCalculateTransition";

const { calcTransition } = useCalculateTransition();
</script>
<template>
  <div class="main font-sans w-full flex flex-col items-center">
    <router-view name="header" class="header fixed w-full top-0 left-0" />
    <router-view v-slot="{ Component }" class="page">
      <div class="mt-12">
        <transition :name="calcTransition()">
          <component :is="Component" />
        </transition>
      </div>
    </router-view>
    <router-view name="footer" class="footer" />
  </div>
</template>
