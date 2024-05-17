/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#E4DB54",
        "purple" : "#b84fce",
        "lpurple" : "#d4acfb",
        "secondary": "#555",
        "primaryBG":"#FCFCFC",
        "light": "#874CCC",

      },
    },
  },
  plugins: [require("daisyui")],
}

