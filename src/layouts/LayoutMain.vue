<script lang="ts" setup>
import { useRoute } from "vue-router";
import useCalculateTransition from "@/composables/useCalculateTransition";

const route = useRoute();

const { calcTransition } = useCalculateTransition();
</script>
<template>
  <div class="main font-sans w-full flex flex-col items-center">
    <router-view name="header" class="header fixed w-full top-0 left-0" />
    <router-view v-slot="{ Component }" class="page" :key="route.fullPath">
      <div class="mt-12 w-full pb-14">
        <transition :name="calcTransition()">
          <component :is="Component" />
        </transition>
      </div>
    </router-view>
    <router-view name="footer" class="footer" />
  </div>
</template>
