module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        muli: ['Muli', 'sans-serif'],
        noto: ['Noto Sans CJK JP', 'sans-serif'],
      },
      backgroundColor: {
        'default': '#f8f8fa'
      },
      textColor: {
        'default': '#333'
      },
      fontSize: {
        xxs: ['.625rem', {
          lineHeight: '0.75rem'
        }]
      },
      gridTemplateColumns: {
        'article-pc': '1fr 3fr 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
