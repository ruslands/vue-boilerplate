import { useStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { FALLBACK_DEFAULT_LOCALE } from '@/constants'

const defaultLocale = useStorage('locale', FALLBACK_DEFAULT_LOCALE)
export const i18n = createI18n({
  locale: defaultLocale.value,
  fallbackLocale: FALLBACK_DEFAULT_LOCALE,
  messages,
})
