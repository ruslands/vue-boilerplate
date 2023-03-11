<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const headerInfo = computed(() => {
  return [
    {
      id: 1,
      title: t("order_detail.order_count"),
      value: "11",
    },
    {
      id: 2,
      title: t("order_detail.positions_in_order"),
      value: "5",
    },
    {
      id: 3,
      title: t("order_detail.number_of_goods"),
      value: "10",
    },
    {
      id: 4,
      title: t("order_detail.weight_order"),
      value: "3 кг",
    },
  ];
});
</script>
<template>
  <div class="w-full bg-white rounded-lg mb-12 px-3.5 py-6">
    <div class="flex items-center justify-between text-center mb-6">
      <div
        class="flex-col flex items-center"
        v-for="item in headerInfo"
        :key="item.id"
      >
        <span class="text-secondary-title text-xs"> {{ item.title }} </span>
        <span class="text-black font-medium text-custom-13">
          {{ item.value }}
        </span>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex flex-col">
        <span class="text-secondary-title text-xs"> {{ $t("phone") }} </span>
        <span class="text-black font-medium text-custom-13">
          +375 (29) 121-12-12
        </span>
      </div>
      <div class="flex-col flex">
        <span class="text-secondary-title text-xs">
          {{ $t("order_detail.partners_goods") }}
        </span>
        <span class="text-black font-medium text-custom-13">
          Пышечная, Полезнов
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
