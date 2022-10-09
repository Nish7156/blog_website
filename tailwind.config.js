/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        grad:{
          background:" rgb(0,144,255)",
background:" linear-gradient(90deg, rgba(0,144,255,1) 31%, rgba(94,22,134,1) 80%)"
        }
      }
    },
  },
  plugins: [],
}
