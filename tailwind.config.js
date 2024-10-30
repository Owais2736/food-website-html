/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        '3xl': '1950px',
        '4xl': '2100px',
         '5xl': '2550px',
      },
    },
  },
  plugins: [],
}
