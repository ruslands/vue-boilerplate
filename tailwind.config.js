const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ui-green': '#30ba29',
        'ui-green-dark': '#1ca515',
        'ui-green-light': 'rgba(48, 186, 41, 0.1)',
        'ui-white': '#ffffff'
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  safelist: ['bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-30'],
}
