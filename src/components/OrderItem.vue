<script lang="ts" setup>
import { computed, ref } from "vue";
import { format } from "date-fns";
import type { ConfigProviderThemeVars } from "vant";
import { useCurrentLanguage } from "@/composables/useCurrentLanguage";
const { currentLanguage } = useCurrentLanguage();

const time = ref(65 * 1000);

const changeTime = (currentTime: any) => {
  time.value = currentTime.total;
};

const buttonVars: ConfigProviderThemeVars = {
  buttonRadius: "8px",
};

const countDownColors = computed(() => {
  return time.value < 61000 ? "#E73232" : "#23BD1B";
});
</script>
<template>
  <div class="w-full bg-white p-4 rounded-lg mb-3">
    <div class="w-full flex justify-between mb-3">
      <div class="flex flex-col items-start">
        <span class="text-black font-bold text-custom-15 mb-1">№ 0023</span>
        <div class="mb-1.5 text-black text-sm">
          <span class="mr-4">6 {{ $t("order_item.count_product", 6) }}</span>
          <span>2.5 кг</span>
        </div>
        <div class="mb-1 w-full text-custom-13 text-secondary-title">
          <span class="mr-1">{{ $t("order_item.pay_title") }}</span>
          <span class="font-bold text-black text-sm">
            {{ $t("order_item.pay_method.cash") }}
          </span>
        </div>
        <div class="w-full text-custom-13 text-secondary-title">
          <span class="mr-1">{{ $t("order_item.price") }}</span>
          <span class="font-bold text-black text-sm">750 руб</span>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-secondary-text text-custom-13 mb-px">
          {{
            format(new Date(), "dd.MM.yyyy, hh:mm", { locale: currentLanguage })
          }}
        </span>
        <div class="text-secondary-text text-custom-13 flex items-center">
          <span class="mr-1">{{ $t("order_item.left_time") }}</span>
          <van-count-down
            class="w-14"
            :time="time"
            @change="changeTime"
            :style="{ color: countDownColors }"
          />
        </div>
      </div>
    </div>
    <van-config-provider class="w-full" :theme-vars="buttonVars">
      <slot name="footer"></slot>
    </van-config-provider>
  </div>
</template>

<style lang="scss" scoped></style>
