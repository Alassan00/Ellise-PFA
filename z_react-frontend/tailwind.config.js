/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        carousel: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '25%': { opacity: '0', transform: 'translateX(-100%)' },
          '50%': { opacity: '1', transform: 'translateX(-200%)' },
          '75%': { opacity: '0', transform: 'translateX(-300%)' },
        },
      },
      animation: {
        carousel: 'carousel 8s infinite',
      },
    },
  },
  plugins: [],
}

