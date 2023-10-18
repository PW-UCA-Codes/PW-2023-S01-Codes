/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mateo": "#A7D397",
        "bar-50": "#ffffffaa"
      },
      minWidth: ({ theme }) => ({
        ...theme("screens")
      })
    },
  },
  plugins: [],
}

