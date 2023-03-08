<script lang="ts" setup>
import CourierSVG from "@/components/svg/CourierSVG.vue";
import { computed } from "vue";

import { useI18n } from "vue-i18n";
import PickerSVG from "@/components/svg/PickerSVG.vue";

const { t } = useI18n();

const props = defineProps<{
  type?: string;
  isActive: boolean;
}>();

const itemName = computed(() => {
  return props.type === "courier" ? t("courier") : t("picker");
});
</script>
<template>
  <div class="flex flex-col">
    <div
      class="p-5 bg-white select_role_item rounded-xl mb-4 relative"
      :class="{ 'is-active': isActive }"
    >
      <span
        class="bg-white rounded-full w-4 h-4 flex items-center justify-center absolute top-1.5 right-1.5"
        v-if="isActive"
      >
        <van-icon name="success" size="10" color="#23BD1B" />
      </span>
      <CourierSVG v-if="type === 'courier'" />
      <PickerSVG v-else />
    </div>
    <span
      class="text-center text-base-text font-semibold"
      :class="{ 'text-light-green': isActive }"
    >
      {{ itemName }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.select_role_item {
  mix-blend-mode: normal;
  box-shadow: 0 2px 7px rgba(23, 23, 23, 0.06);
}

.is-active {
  background: linear-gradient(12.3deg, #23bd1b 2%, #33d92a 61.24%);
}
</style>
