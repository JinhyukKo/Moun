/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        black2: "#111111",
        gray: "#7d7d7d",
        white: "#ffffff",
        green: "#34e26a",
        weak_white: "#f2f2f2",
        blue: "#009be6",
        magenta: "#ca6ce6",
        gray_light: "#d9d9d9",
        middle_white: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
