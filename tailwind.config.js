/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary":"#01051e",
        "color-primary-light":"#020726",
        "color-primary-dark":"#010417",
        "color-secondary": "#ff7d3b",
        "color-gray":"#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      }
    },
    container: {
      padding: {
        DEFAULT: '0.625rem',
        sm: '1rem',
        lg: '0.625rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      center: true,
    },
  },
  plugins: [],
}

