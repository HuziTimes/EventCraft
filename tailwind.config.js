/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6fc',
          100: '#e5ecf7',
          200: '#c7d5ef',
          300: '#9cb5e3',
          400: '#6a8ed3',
          500: '#466ebc',
          600: '#34559c',
          700: '#2a447e',
          800: '#263a69',
          900: '#223257',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a',
          muted: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
