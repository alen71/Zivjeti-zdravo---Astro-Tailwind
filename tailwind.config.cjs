/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    container: {
      screens: {
        '2xl': '1535px',
        xl: '1279px',
        lg: '1023px',
        md: '767px',
        sm: '100%'
      },
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

}
