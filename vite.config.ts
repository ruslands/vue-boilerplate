import { fileURLToPath, URL } from 'node:url'

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [
    vue(),
    Components({ resolvers: [VantResolver()] }),
    vueI18n({ include: path.resolve(__dirname, './src/locales/**') }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
