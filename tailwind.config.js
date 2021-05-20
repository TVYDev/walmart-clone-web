module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#041e42',
        secondary: '#0071dc',
        accent: '#ffc220',
      },
      gridTemplateRows: {
        9: 'repeat(9, minmax(0, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
