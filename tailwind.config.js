/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all file types and paths are covered
    "./public/index.html", // Include paths to HTML files
  ],
  theme: {
    extend: {},
    colors: {
      red: "#C73B0F",
      "rose-900": "#260F08",
      "rose-500": "#87635A",
      "rose-400": "#AD8A85",
      "rose-50": "#FCF8F6",
      "grey-100": "#f3f4f6",
      white: "#ffffff",
    },
  },
  plugins: [],
};
