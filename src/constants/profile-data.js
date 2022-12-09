const config = {
  products: {
    name: 'PRODUCTS',
    items: [
      {
        name: 'tomoya.me',
        category: 'Webサイト',
        thumnail: 'tomoya.me/about.png',
        // thumnail: 'tomoya.me/tomoya.me.png',
        explanation: `当ポートフォリオサイト。\n以前から興味のあったNext.js TypeScript TailwindCSSを使い、自身の学習も兼ねてゼロから自分で作成しました！\n今後もブログ記事などのコンテンツ拡張も予定しております。\nお気軽にお立ち寄りいただけると幸いです。`,
        tags: [
          'Next.js',
          'Tailwind CSS',
          'microCMS',
          'SSG',
          'Figma',
        ],
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
    // {
    //   content: 'NOTE',
    //   path: '/note',
    // },
    {
      content: 'BLOG',
      path: '/blog',
    },
  ],
  accounts: [
    {
      id: 'twitter',
      url: 'https://twitter.com/yama_to_web',
    },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/yama_to_web',
    },
    {
      id: 'github',
      url: 'https://github.com/yama-to-web',
    },
  ],
};

module.exports = config;
