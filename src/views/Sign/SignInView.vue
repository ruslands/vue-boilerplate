<script lang="ts" setup></script>
<template>
  <div class="mt-44 w-full">
    <van-button block>
      <div class="flex items-center">
        <img src="@/assets/icons/google.svg" alt="google_icon" class="mr-2" />
        <span class="uppercase font-medium text-sm">
          {{ $t("sign.authGoogle") }}
        </span>
      </div>
    </van-button>
  </div>
</template>

<style lang="scss" scoped>
.van-button--default {
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
}
</style>
