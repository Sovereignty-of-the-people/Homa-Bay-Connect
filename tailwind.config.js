/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}", // Scan all files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}