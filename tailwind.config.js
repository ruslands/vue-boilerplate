/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "base-text": "#323233",
        "light-green": "#23BD1B",
        jade: {
          50: "#eafff5",
          100: "#cdfee5",
          200: "#a0fad1",
          300: "#63f2b9",
          400: "#25e29d",
          500: "#00bd7e",
          600: "#00a46e",
          700: "#00835c",
          800: "#00674a",
          900: "#00553e",
        },
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
      flexGrow: {
        2: "2",
        3: "3",
      },
      fontFamily: {
        sans: ["PingFang SC", "sans-serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};