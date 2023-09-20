/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
        // lg: '4rem'
        // xl: '5rem',
        // '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        'dark-gray': '#00000099',
        'light-gray': '#E4E4E4',
        'very-light-gray': '#EFEFEF'
      },
      fontFamily: {
        manrope: ['Manrope Variable', 'sans', ...defaultTheme.fontFamily.sans]
      },
      borderWidth: {
        1: '0.0625rem'
      },
      height: {
        1: '0.0625rem'
      }
    }
  },
  plugins: [require('tailwindcss-3d')({ legacy: true })]
}
