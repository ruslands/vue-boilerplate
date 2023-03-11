import { useI18n } from "vue-i18n";
import { computed } from "vue";
import en from "date-fns/locale/en-US";
import ru from "date-fns/locale/ru";

export function useCurrentLanguage() {
  const { locale } = useI18n();

  const currentLanguage = computed(() => {
    return locale.value.includes("ru") ? ru : en;
  });

  return { currentLanguage };
}
