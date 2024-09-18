/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        darkGray: '#1E1F21',
      },
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
}
