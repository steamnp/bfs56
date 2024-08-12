const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redText: "#C73B0F",
        buttonBorderColor: "#AD8A85",
        categoryColor: "#87635A",
      },
    },
  },
  plugins: [],
};
