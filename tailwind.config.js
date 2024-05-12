/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3", 
        secondary: "#0e1111",
        tertiary: "#e6e6e6",
        hover: "#cfcfcf",
        "black-100": "#0e1111",
        "black-200": "#0e1111",
        "white-100": "#0e1111",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "background-pattern": "url('/src/assets/Paper.jpeg')",
      },
      
    },
  },
  plugins: [],
};