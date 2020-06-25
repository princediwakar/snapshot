module.exports = {
  purge: [],
  theme: {
    extend: {
      width:{
        '120': '30rem'
      },
      maxWidth:{
        '120': '30rem'
      },
      fontFamily: {
        'logo': ["Helvetica Neue","sans-serif"],
      },
    },
  },
  variants: {
    objectFit: ['responsive', 'hover', 'focus'],
    zIndex: ['responsive', 'hover', 'focus'],
    display: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
