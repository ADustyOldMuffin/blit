module.exports = {
  content: [
    "./src/**/*.{html, js, ts, jsx, tsx}", 
    "./src/**/*",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
