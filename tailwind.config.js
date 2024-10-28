/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // Enables Tailwind's dark mode class strategy
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0a66c2', // LinkedIn Blue
      },
    },
  },
  plugins: [],
};
