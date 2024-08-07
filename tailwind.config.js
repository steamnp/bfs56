/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display"],
      },
      colors: {
        red: "#87635A",
      },
    },
  },
  plugins: [],
};
