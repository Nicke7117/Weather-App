module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { gridTemplateRows: { 2: "repeat(2, minmax(0, 120px))" } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
