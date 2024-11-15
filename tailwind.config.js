/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498DB',
        secondary: '#34495E',
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"]
      }
},
  },
  plugins: [require('tailwind-scrollbar')],
}

