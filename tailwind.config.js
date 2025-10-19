/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // thêm dòng này
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        card: "var(--color-card)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
