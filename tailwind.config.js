/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        gray: '#17181a',
        white: '#eeeeee',
        ongoing: '#FFD700',
        completed: '#00C853',
        hiatus: '#FF6B6B',
        cancelled: '#FF6B6B',
      },
    },
  },
  plugins: [],
};
