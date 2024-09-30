/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F8D2A4 ',
          200: '#F9C74F ',
          400: '#F29F05',
          500: '#F28705',
          700: '#F27405',
          900: '#F25C05'
        }
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translate(calc(-50% - 0.5rem))' }
        }
      },
      animation: {
        scroll: 'scroll 15s linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
