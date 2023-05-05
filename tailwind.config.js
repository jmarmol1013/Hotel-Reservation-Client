/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      primary:'#1E1E1E',
      secondary:'#DDA99C',
      third:'#A0A0A0',
      fourth:'#CDB767',
      backGroundSecondary: '#EBEBEB',
    }
  },
  plugins: [],
}
