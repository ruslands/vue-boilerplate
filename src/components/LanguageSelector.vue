<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languages: { [key: string]: string } = {
  en: "English",
  ru: "Русский",
};

const actionShitVars = {
  actionSheetCancelTextColor: "#FF5252",
};

const show = ref(false);

const currentLanguageName = ref("Русский");

interface LangItem {
  name: string;
  value: string;
}

const actions: Array<LangItem> = [
  { name: "Русский", value: "ru" },
  { name: "English", value: "en" },
];

const setLang = (lang: LangItem) => {
  localStorage.setItem("locale", lang.value);
  locale.value = lang.value;
  currentLanguageName.value = languages[lang.value];
};

onMounted(() => {
  const defaultLocale = useStorage("locale", "ru");

  currentLanguageName.value = languages[defaultLocale.value];
});
</script>
<template>
  <div
    class="flex items-center justify-between w-full pb-2.5 border-border-gray border-b border-solid"
    @click="show = true"
  >
    <span class="text-sm text-base-text"> {{ currentLanguageName }} </span>
    <van-icon name="arrow-down" size="10" />
  </div>
  <van-config-provider :theme-vars="actionShitVars">
    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      @select="setLang"
      :cancel-text="$t('cancel')"
      :description="$t('profile.title')"
      close-on-click-action
    />
  </van-config-provider>
</template>

<style lang="scss" scoped>
</style>
