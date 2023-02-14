/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  });
});
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1142px',
    },
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
    },
    fontSizes: {
      31: '31px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#4A4A4A',
      background: '#FAFAFA',
      grey: '#8A8A8A',
      tabGrey: '#AFAFAF',
      line: '#DDDDDD',
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray'),
            fontSize: '1.125rem',
          },
        },
      }),
      backgroundImage: {
        hero: "url('/assets/home/header-image.svg')",
      },
      boxShadow: {
        default: '0px 10px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
