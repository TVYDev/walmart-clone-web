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
        tertiary: '#03152e',
        accent: '#ffc220',
      },
      gridTemplateRows: {
        9: 'repeat(9, minmax(0, 1fr))',
      },
      height: {
        '(screen-22)': 'calc(100vh - 5.5rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
