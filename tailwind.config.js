/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
    colors: {
      "m": "#007CFF",
      "ms": "#00D4EA",

      "white": "#FFFFFF",

      "bg": "#F4F5FA",
      "grey04": "#73787E",
      "grey05": "#9FA4A9",
      "grey06": "#CACDD2",
      "grey07": "#E9EBED",

      "grey-b": "#CACDD2",

      "valid": "#FF0000"

    },
  },
  plugins: [],
}