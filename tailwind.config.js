/** tailwind.config.js **/
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f766e', // teal-ish example
          navy: '#0f172a'
        }
      }
    }
  },
  plugins: [],
}

