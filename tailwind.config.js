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
        '29': '7.5rem',
        '105': '26.25rem',
        '110': '27.5rem',
        '130': '34rem',
        '250': '63.25rem',
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
        'gray-700': '#FCFCFD',
        'gray-600': '#F1F1F4',
        'gray-500': '#C7C7D1',
        'gray-400': '#9D9DAF',
        'gray-300': '#73738C',
        'gray-200': '#505062',
        'gray-100': '#2E2E38',
        'red-error': '#D2341E',
        
      },
      fontSize: {
        'labels-small': ['11px', {
          lineHeight: '16px',
          letterSpacing: '2px',
        }],
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    
  },
  plugins: [],
}
