/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all file types and paths are covered
    "./public/index.html", // Include paths to HTML files
  ],
  theme: {
    extend: {},
    fontFamily: {
      redhat: ["Red Hat Text"],
    },
    colors: {
      red: "#C73B0F",
      "rose-900": "#260F08",
      "rose-500": "#87635A",
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        html: { fontFamily: theme("fontFamily.theme") },
      });
    },
  ],
};
