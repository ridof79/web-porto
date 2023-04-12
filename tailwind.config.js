/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Mabry pro'],
    },
    container : {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#64748b',
        dark: '#172554'
      },
      screens: {
        '2xl':'1320px'
      },
    },
  },
  plugins: [],
}


