const config = {
  introduction: {
    title: 'INTRODUCTION',
    name: 'TOMOYA FUJIWARA',
    text: `三重県出身 95年生まれ 大阪府在住のWebエンジニア\n学生時代は陸上競技に10年間打ち込み、卒業とともに未経験でIT企業に就職。\n2019年〜現在までフロントエンジニアとして商品比較サイトの開発に携わる。\nフルスタックエンジニアを目指し日々邁進中\n趣味はアウトドア、週末は野山に飛び出します。\n新しくてワクワクするようなプロダクトに興味があります。`
  },
  products: {
    title: 'PRODUCTS',
    items: [
      {
        name: 'tomoya.me',
        category: 'Webサイト',
        thumnail: 'tomoya.me/about.png',
        explanation: `当ブログ兼ポートフォリオサイト。\n以前から興味のあったNext.js TypeScript TailwindCSSを使い、自身の学習も兼ねてフルスクラッチで作成しました！\n今後もコンテンツ拡張も予定しております。\nお気軽にお立ち寄りいただけると幸いです。`,
        tags: [
          'Next.js',
          'React',
          'Typescript',
          'Tailwind CSS',
          'microCMS',
          'Figma',
        ],
      },
    ],
  },
  certification: {
    title: 'CERTIFICATION',
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
