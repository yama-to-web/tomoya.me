module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'profile-img': "url('../../public/profile.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
