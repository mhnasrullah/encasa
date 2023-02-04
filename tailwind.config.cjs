/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      black : '#363636',
      blue : '#43656D',
      'second-blue' : '#D9E8EB',
      white : '#F0F5F6',
      'second-white' : '#CEE2E7',
      trans : '#00000000',
      'pure-black' : '#000000',
      'pure-white' : '#FFFDFD'
    },
    extend: {},
  },
  plugins: [],
}
