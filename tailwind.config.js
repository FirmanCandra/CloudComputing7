/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#252f2d',
        gold: '#f5c729',
        ember: '#fa7e23',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(37, 47, 45, 0.12)',
      },
    },
  },
  plugins: [],
}
