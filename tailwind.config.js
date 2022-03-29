module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.625rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
