import { useStorage } from "@vueuse/core";
import { createI18n } from "vue-i18n";

/**
 * messages are generated using vite-plugin-i18n
 * each .json files located in the ./src/locales are registered in messages
 * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
 */
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const defaultLocale = useStorage("locale", "ru");

export const i18n = createI18n({
  locale: defaultLocale.value,
  fallbackLocale: "ru",
  messages,
});
