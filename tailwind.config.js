module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('../../public/profile.png')",
        'mv-0': "url('../../public/mv0.jpg')",
        'mv-1': "url('../../public/mv1.jpg')",
      },
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
