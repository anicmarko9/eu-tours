const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#dd71c6",
        secondary: "#73c3f4",
        tertiary: "#ffd900",
        bodyBg: "#ddd",
      },
      backgroundImage: {
        "mock-img": "url('/test.png')",
      },
    },
  },
  plugins: [],
};
