/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CEFF',
          300: '#66B5FF',
          400: '#339CFF',
          500: '#0083FF',
          600: '#0069CC',
          700: '#004F99',
          800: '#003566',
          900: '#001A33',
        },
        secondary: {
          50: '#FFF5E6',
          100: '#FFEBCC',
          200: '#FFD699',
          300: '#FFC266',
          400: '#FFAD33',
          500: '#FF9900',
          600: '#CC7A00',
          700: '#995C00',
          800: '#663D00',
          900: '#331F00',
        },
        accent: {
          50: '#E6FFF5',
          100: '#CCFFEB',
          200: '#99FFD6',
          300: '#66FFC2',
          400: '#33FFAD',
          500: '#00FF99',
          600: '#00CC7A',
          700: '#00995C',
          800: '#00663D',
          900: '#00331F',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      boxShadow: {
        custom:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
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
