/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // 🆕 Activa dark mode por clase en <html>
  theme: {
    extend: {
      colors: {
        'asvet-primary':   '#0284c7',
        'asvet-secondary': '#10b981',
      }
    },
  },
  plugins: [],
}
