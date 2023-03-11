<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

import OrdersSVG from "@/components/svg/OrdersSVG.vue";
import ProfileSVG from "@/components/svg/ProfileSVG.vue";
import BagSVG from "@/components/svg/BagSVG.vue";

const router = useRouter();
const route = useRoute();

const routes = ["orders", "delivery", "profile"];
const currentRoute = routes.findIndex((item) => item === route.name);

const active = ref(currentRoute);
const onChange = (index: number) => {
  router.push({
    name: routes[index],
  });
};
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
        <BagSVG :class="{ 'is-active': props.active }" />
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

.van-tabbar {
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.15);
}
.van-tabbar-item--active {
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.15);
}
</style>
