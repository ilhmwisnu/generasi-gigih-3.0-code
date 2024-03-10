/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        appGreen : "#1db954",
        appBlack : {
          1 : "#121212",
          2 : "#212121",
          3 : "#535353",
          4 : "#b3b3b3"
        }
      }
    },
  },
  plugins: [],
}

