/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 4px 20px 0px rgba(0, 0, 0, 0.09);',
      },
      fontWeight: {
        '500': '500'
      },
      width: {
        'ten': '10px',
        'pc': '400px'
      },
      fontSize: {
        'xxs': '11px',
      },
      margin: {
        'six': '6px',
        'ten': '10px'
      },
      padding: {
        'six': '6px',
        'ten': '10px'
      }
    },
    colors: {
      "m": "#007CFF",
      "ms": "#00D4EA",
      "point": "#FF2A6D",

      "white": "#FFFFFF",

      "bg": "#F4F5FA",
      "grey04": "#73787E",
      "grey05": "#9FA4A9",
      "grey06": "#CACDD2",
      "grey06.5": "#E4E6E8",
      "grey07": "#E9EBED",

      "grey10": "#38373D",

      "grey-b": "#CACDD2",

      "valid": "#FF0000"

    },
  },
  plugins: [],
}