<script lang="ts" setup>
import type { RouteLocationRaw } from "vue-router";

import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import LogoutSVG from "@/components/svg/LogoutSVG.vue";

import { showConfirmDialog } from "vant";
import "vant/es/dialog/style";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const navBarVars = {
  navBarIconColor: "#000",
};

const titleName = computed(() => {
  if (route?.params?.id) {
    return t(route?.meta?.title as string, { number: route.params.id });
  }
  return t(route?.meta?.title as string);
});

const isNeedLogout = computed(() => {
  return route.path === "/profile";
});

const isLeftArrow = computed(() => {
  if (Object.keys(route.query).length) {
    return Object.keys(route.query).includes("backUrl");
  }
  return false;
});

const onClickLeft = () => {
  router.push(route.query.backUrl as RouteLocationRaw);
};

const beforeCloseLogOut = (action: string) =>
  new Promise((resolve) => {
    console.log(action);
    setTimeout(() => {
      resolve(["cancel", "confirm"].includes(action));
    }, 1000);
  });

const logOut = () => {
  showConfirmDialog({
    title: t("logout"),
    cancelButtonText: t("no"),
    confirmButtonText: t("yes"),
    confirmButtonColor: "#23BD1B",
    beforeClose: beforeCloseLogOut,
  });
};
</script>
<template>
  <van-config-provider :theme-vars="navBarVars" class="z-10">
    <van-nav-bar
      :title="titleName"
      :left-arrow="isLeftArrow"
      @click-left="onClickLeft"
      @click-right="logOut"
    >
      <template #right v-if="isNeedLogout">
        <LogoutSVG />
      </template>
    </van-nav-bar>
  </van-config-provider>
</template>
<style lang="scss" scoped>
.van-nav-bar {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.23);
  border-bottom: none;
}
</style>
