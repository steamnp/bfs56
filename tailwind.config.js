/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display"],
      },
      colors: {
        lightRed: "#87635A",
        blackishRed: "#260F08",
        redColor: "#C73B0F",
      },
    },
  },
  plugins: [],
};
