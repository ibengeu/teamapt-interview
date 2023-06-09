/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans':['Poppins', 'system-ui'],
      'heading':['Gratelos Display', 'system-ui']
    },
    extend: {
      colors:{
        "insure-black":"#0C0F17",
        "insure-blue":"#1f283d",
        "insure-light-blue":"#84d7e9",
        "insure-pink":"#FF6477",
      },
      dropShadow:{
        "insure-shadow":'0 0 25px rgba(131,215,232, 0.3)'
      }
    },
  },
  plugins: [],
}