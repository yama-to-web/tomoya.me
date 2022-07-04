const config = {
  products: {
    name: 'PRODUCTS',
    items: [
      {
        name: 'tomoya.me',
        category: 'Webサイト',
        explanation: 'ポートフォリオ',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma'],
      },
    ],
  },
  certification: {
    name: 'CERTIFICATION',
    items: [
      {
        name: 'Associate Cloud Engineer',
        date: '2022.05.23',
        vendor: 'Google Cloud Certified',
      },
      {
        name: '基本情報技術者',
        date: '2021.04.27',
        vendor: '情報処理推進機構(IPA)',
      },
    ],
  },
  links: [
    {
      content: 'ABOUT',
      path: '/about',
    },
    {
      content: 'NOTE',
      path: '/note',
    },
    {
      content: 'BLOG',
      path: '/blog',
    },
  ]
}

module.exports = config