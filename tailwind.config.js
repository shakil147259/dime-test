/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: { base: ["14px"] },
      colors: {
        primary: "#29A87E",
        dark: "#091214",
        shade: "#F3F8F8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
