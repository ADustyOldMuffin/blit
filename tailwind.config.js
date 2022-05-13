module.exports = {
  content: [
    "./src/**/*.{html, js, ts, jsx, tsx}", 
    "./src/**/*",
    "./index.html"
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    fontFamily: {
      'nunito': ['nunito', 'Tahoma']
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
