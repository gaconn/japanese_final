/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textSuccessScale: {
          '0%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(2.5)'},
        }
      },
      animation: {
        textSuccessScale: 'textSuccessScale 1s'
      }
    },
  },
  plugins: [],
}