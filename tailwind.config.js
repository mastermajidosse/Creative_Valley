/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#294bb4',
          50: '#eff4ff',
          100: '#dbe6fe',
          200: '#bed4fe',
          300: '#92b8fd',
          400: '#6292fa',
          500: '#3d6ff5',
          600: '#294bb4',
          700: '#1f3b8f',
          800: '#1d3474',
          900: '#1d3061',
        },
      },
    },
  },
  plugins: [],
};
