/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
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
        darkerBlue: "#1F1E3B", 
        lighterBlue: "#3A399F",
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
