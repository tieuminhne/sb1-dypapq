/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          900: '#5D4037',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}