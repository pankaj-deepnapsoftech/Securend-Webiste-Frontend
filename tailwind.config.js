/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lexendDeca: ['lexendDeca', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-input': 'linear-gradient(to top bottom, #2a3051 , #232940 )',
      },
    },
  },
  plugins: [],
};
