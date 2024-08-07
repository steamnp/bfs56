const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redText: "#C73B0F",
        redFont: "#AD8A85",
      },
    },
  },
  plugins: [],
};
