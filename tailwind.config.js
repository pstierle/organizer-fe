module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  theme: {
    extend: {},
  },
  plugins: [],
}