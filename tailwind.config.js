/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '130': '34rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'blue': {
          100: '#9898f0',
          200: '#6c6cea',
          300: '#3f3fe4',
          400: '#1e1ed2',
          500: '#1818a5',
          600: '#111178',
        },
        'grey': '#F1F1F4',
        'dark-grey': '#2E2E38',
        'light-grey': '#73738C',
        'border-grey': '#C7C7D1',
        'medium-grey': '#505062',
        'red-error': '#D2341E',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
