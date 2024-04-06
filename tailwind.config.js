/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./*.{css,js}"],
  theme: {
    extend: {
      colors: {
        'black-dark': '#00000050',
        'dull-white': '#ffffffb3',
        'white-light': '#ffffff30',
        'white-medium': '#ffffff40',
        'neon-blue': '#2fb8ff'
      }
    },
  },
  plugins: [],
}

