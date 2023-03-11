<script lang="ts" setup>
import LanguageSelector from "@/components/LanguageSelector.vue";
import RoleSelector from "@/components/RoleSelector.vue";
import StockSelector from "@/components/StockSelector.vue";
import UserDetailStatistics from "@/components/UserDetailStatistics.vue";
</script>
<template>
  <div class="flex flex-col">
    <span class="self-start mb-2 text-sm text-base-text">
      {{ $t("profile.title") }}
    </span>
    <div class="mb-4 w-full">
      <LanguageSelector />
    </div>
    <div class="w-full mb-11">
      <RoleSelector />
    </div>
    <div
      class="flex items-center w-full pb-2.5 border-border-gray border-b border-solid mb-8"
    >
      <span class="text-sm text-base-text flex-1">
        {{ $t("profile.full_name") }}
      </span>
      <span class="text-sm text-base-text flex-grow-2 flex-shrink basis-0">
        Ковальчук Виталий Николаевич
      </span>
    </div>
    <div
      class="flex items-center w-full pb-2.5 border-border-gray border-b border-solid mb-8"
    >
      <span class="text-sm text-base-text flex-1">
        {{ $t("phone") }}
      </span>
      <span class="text-sm text-base-text flex-grow-2 flex-shrink basis-0">
        +375 (29) 111-11-11
      </span>
    </div>
    <div class="mb-8 w-full">
      <StockSelector />
    </div>
    <div class="w-full">
      <UserDetailStatistics />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.van-cell) {
  background: #f9f9f9 !important;
  padding: 0 0 10px 0 !important;

  .van-cell__title {
    color: green;
  }
}
</style>
