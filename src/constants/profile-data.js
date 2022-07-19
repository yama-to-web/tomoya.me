const config = {
  products: {
    name: 'PRODUCTS',
    items: [
      {
        name: 'tomoya.me',
        category: 'Webサイト',
        thumnail: 'tomoya.me.png',
        explanation: `自身のポートフォリオサイト。\n仕事や趣味、様々な私についてのコンテンツを充実させるべく、日々まったり更新中・・・`,
        tags: ['HTML/JS/CSS', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'MicroCMS', 'SSG', 'Figma'],
      },
    ],
  },
  certification: {
    name: 'CERTIFICATION',
    items: [
      {
        name: 'Associate Cloud Engineer',
        date: '2022.05.23 ~ 2024.05.22',
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