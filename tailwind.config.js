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
        104: '26rem',
        112: '28rem',
        '(screen-24)': 'calc(100vh - 6rem)',
      },
      fontSize: {
        '4xs': '0.375rem',
        '3xs': '0.5rem',
        '2xs': '0.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
