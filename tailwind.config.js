/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all file types and paths are covered
    "./public/index.html", // Include paths to HTML files
  ],
  theme: {
    extend: {
      colors: {
        red: "#C73BOF",
        "rose-500": "#87635A",
        "rose-900": "#260F08",
      },
    },
    fontFamily: {
      redhat: ["Red Hat Text"],
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        html: { fontFamily: theme("fontFamily.redhat") },
      });
    },
  ],
};
