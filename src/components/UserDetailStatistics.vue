<script lang="ts" setup></script>
<template>
  <div class="w-full bg-white p-4 rounded-lg mb-3">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-black">
        {{ $t("profile.detail.total_order") }}
      </span>
      <span class="text-sm text-black font-semibold"> 450 </span>
    </div>
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-black">
        {{ $t("profile.detail.order_in_month") }}
      </span>
      <span class="text-sm text-black font-semibold"> 40 </span>
    </div>
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-black">
        {{ $t("profile.detail.total_delivery") }}
      </span>
      <span class="text-sm text-black font-semibold"> 120 </span>
    </div>
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm text-black">
        {{ $t("profile.detail.delivery_in_month") }}
      </span>
      <span class="text-sm text-black font-semibold"> 33 </span>
    </div>
  </div>
</template>

<style scoped></style>
