/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': { '900': '#ffffff', '800': '#f1f5f9' },
      'black': {
        '900': '#000000',
        '800': 'rgb(18, 18, 18)',
        '700': 'rgb(30, 30, 30)',
        '600': 'rgb(191, 191, 191)'
      },
      'sky': { '600': '#0284c7' },
      'error': '#ff0000',
    },
    extend: {
      spacing: {
        '200': '-52rem',
      }
    },
  },
  plugins: [],
}