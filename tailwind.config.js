const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        'cool-gray': colors.coolGray,
        'true-gray': colors.trueGray,
        'warm-gray': colors.warmGray,
        'ssd-gray': '#9B9CA0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
