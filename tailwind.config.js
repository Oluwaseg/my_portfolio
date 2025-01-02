/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6FF',
          100: '#BAE3FF',
          200: '#7CC4FA',
          300: '#47A3F3',
          400: '#2186EB',
          500: '#0967D2',
          600: '#0552B5',
          700: '#03449E',
          800: '#01337D',
          900: '#002159',
        },
        gray: {
          50: '#F7F7F7',
          100: '#E6E6E6',
          200: '#D1D1D1',
          300: '#B3B3B3',
          400: '#8E8E8E',
          500: '#6B6B6B',
          600: '#4E4E4E',
          700: '#373737',
          800: '#242424',
          900: '#171717',
        },
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 2.5s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
  darkMode: ['class'],
};
