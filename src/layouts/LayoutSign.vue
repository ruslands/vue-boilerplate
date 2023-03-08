<script lang="ts" setup>
import useCalculateTransition from "@/composables/useCalculateTransition";
import LogoSVG from "@/components/svg/LogoSVG.vue";

const { calcTransition } = useCalculateTransition();
</script>
<template>
  <div class="main font-sans flex flex-col items-center justify-center w-full">
    <LogoSVG class="mt-24" />
    <router-view v-slot="{ Component }">
      <div class="grow w-full flex justify-center">
        <transition :name="calcTransition()">
          <component :is="Component" />
        </transition>
      </div>
    </router-view>
  </div>
</template>
