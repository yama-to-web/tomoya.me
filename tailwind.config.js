module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['.625rem', {
          lineHeight: '0.75rem'
        }]
      },
      gridTemplateColumns: {
        'article-xl': '1fr 3fr 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
