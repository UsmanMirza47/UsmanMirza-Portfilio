/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        activeBarBg: "#2d3748",
        subtitleColor: "#ffffffeb",
        bodyBg: "#1a202c",
        navBg: "#171923",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
