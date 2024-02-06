/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},

    light: {
      ...require("daisyui/src/theming/themes")["[data-theme=light]"],
      primary: "blue",
      "primary-focus": "mediumblue",
    },
  },
  plugins: [require("daisyui")],
};
