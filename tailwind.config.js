/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       crayolalightest: "#BAD6FB",
       crayolalight: "#1877F2",
       crayolamidledark: "#0A3061",
       crayoladark: "#072449",
       crayoladarkest: "#051830",
       palatinelight: "#EAEBFE",
       cgblue: "#D0E7F4",
      },
      fontFamily:{
        'nunito': ['Nunito'],
        'poppins': ['Poppins'],
        'ssp': ['Source Sans Pro'],
      }
    },
  },
  plugins: [],
}