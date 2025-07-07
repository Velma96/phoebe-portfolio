/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { inter: ["Inter", "sans-serif"] },
      colors: {
        primary: { blue: "#3b82f6", purple: "#9333ea" },
        dark: { bg: "#111827", text: "#e5e7eb" },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

