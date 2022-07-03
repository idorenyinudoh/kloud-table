/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      purple: "#2A2A8F",
      "heading-color": "#EFF1F4",
      white: "#FFFFFF",
      black: "#000000",
      red: "#FF5F58",
      transparent: "transparent",
      "table-border": "#E1E5EE",
      "button-background": "#3399FF",
      "table-nav-background": "#F1F2F5",
      "light-text": "#8891A5",
      "heavy-text": "#515B74",
      "active-page-background": "#F1F8FF",
      "page-foreground": "#8898AA",
      "table-header-background": "#F8F9FA",
      "initial-background": "#4780F8",
    },
    extend: {},
  },
  plugins: [],
};
