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
        primary: "#2B2A4C",
        secondary: "#FF6000",
        tertiary: "#4F4557",
        header: "#9DB2BF",
        darkerOrange: "#E65100",
        lighterOrange: "#FF8000",
        bodyBg: "#DDD",
      },
      backgroundImage: {
        "mock-img": "url('/test.png')",
      },
      animation: {
        slideInRight: "slideInRight 1s ease-in-out",
        slideOutRight: "slideOutRight 1s ease-in-out",
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        slideOutRight: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
