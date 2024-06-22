/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navy:"#3A1D64",
      orange: "#DE3F0F",
      white: "#FFFFFF",
      transparent: 'transparent'
    },
    fontFamily:{
      "flama" : ['Flama, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}