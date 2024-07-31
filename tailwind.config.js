/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all file types and paths are covered
    "./public/index.html", // Include paths to HTML files
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          700: "#00FF00",
        },
      },
    },
  },
  plugins: [],
};
