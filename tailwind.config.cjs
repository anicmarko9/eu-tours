/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        Forum: ["Forum", "cursive"],
        Poppins:["Poppins", "sans-serif"]
      },
      colors: {
        primary: "#2B2A4C",
        secondary: "#A67B2A",
        tertiary: "#4F4557",
        header: "#9DB2BF",
        darkerOrange: "#C54D3C",
        lighterOrange: "#E2725B",
        darkerBlack: "#000000",
        lighterBlack: "#1F2420",
        bodyBg: "#F9F7F3",
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
