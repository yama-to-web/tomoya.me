module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
