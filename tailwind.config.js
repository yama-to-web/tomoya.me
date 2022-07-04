module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.625rem'
      },
      border: {
        '1': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
