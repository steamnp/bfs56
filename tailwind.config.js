/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightRed: "#87635A",
        blackishRed: "#260F08",
        redColor: "#C73B0F",
        buttonBorder: "#AD8A85",
        white: "#FFFFFF",
        redRose: "#FCF8F6",
      },
    },
  },
  plugins: [],
};
