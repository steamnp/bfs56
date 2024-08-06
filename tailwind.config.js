const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        redText: "#C73B0F",
      },
      fontFamily: {
        sans: ["Red Hat Text", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
