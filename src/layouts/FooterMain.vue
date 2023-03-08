<script lang="ts" setup>
import { ref } from "vue";
import OrdersSVG from "@/components/svg/OrdersSVG.vue";
import ProfileSVG from "@/components/svg/ProfileSVG.vue";
import BagSVG from "@/components/svg/BagSVG.vue";

const active = ref(0);
const onChange = (index: number) => console.log(`Tab ${index}`);
</script>
<template>
  <van-tabbar v-model="active" @change="onChange" active-color="#23bd1b">
    <van-tabbar-item>
      <span> {{ $t("menu.orders") }} </span>
      <template #icon="props">
        <OrdersSVG :class="{ 'is-active': props.active }" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span> {{ $t("menu.bag") }} </span>
      <template #icon="props">
        <BagSVG :class="{ 'is-active': props.active }"/>
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      <span> {{ $t("menu.profile") }} </span>
      <template #icon="props">
        <ProfileSVG :class="{ 'is-active': props.active }" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss">
.is-active {
  path {
    stroke: #23bd1b;
  }
}
</style>
