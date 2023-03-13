<script lang="ts" setup>
import { ref } from "vue";

interface StockValue {
  name: string;
  value: string;
}

const actionShitVars = {
  actionSheetCancelTextColor: "#FF5252",
};

const actions: Array<StockValue> = [
  { name: "Склад №1", value: "Склад №1, пр-т Мира, 10" },
  { name: "Склад №2", value: "Склад №2, пр-т Мира, 11" },
  { name: "Склад №3", value: "Склад №3, пр-т Мира, 12" },
  { name: "Склад №4", value: "Склад №4, пр-т Мира, 22" },
];

const show = ref(false);

const currentValue = ref(actions[0]);

const setStock = (stock: StockValue) => {
  currentValue.value = stock;
};
</script>
<template>
  <div
    class="flex items-center justify-between w-full pb-2.5 border-border-gray border-b border-solid"
    @click="show = true"
  >
    <span class="text-sm text-base-text"> {{ $t("profile.stock") }} </span>
    <div class="flex items-center">
      <span class="text-sm text-base-text mr-8 font-medium">
        {{ currentValue.value }}
      </span>
      <van-icon name="arrow-down" size="10" />
    </div>
  </div>
  <van-config-provider :theme-vars="actionShitVars">
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      @select="setStock"
      :cancel-text="$t('cancel')"
      :description="$t('profile.stock_select')"
      close-on-click-action
    />
  </van-config-provider>
</template>

<style lang="scss" scoped></style>
