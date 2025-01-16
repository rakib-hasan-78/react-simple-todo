/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens:{
      xsm:'20.3125rem',
      msm:'28.125rem',
      sm:'40rem',
      md:'47.9375rem',
      lg:'63.75rem',
      xl:'87.5rem'
    },
    extend: {},
  },
  plugins: [],
}