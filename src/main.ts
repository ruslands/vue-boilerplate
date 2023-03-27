import { createApp, markRaw } from 'vue'
import router from './router'

import { createPinia } from 'pinia'
import { i18n } from '@/plugins/i18n'

import App from './App.vue'
import '@/styles/main.css'

const app = createApp(App)

const store = createPinia()
store.use(({ store }) => {
  store.$router = markRaw(router)
})

app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
