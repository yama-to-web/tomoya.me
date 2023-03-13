const config = {
  introduction: {
    title: 'INTRODUCTION',
    name: 'TOMOYA FUJIWARA',
    text: `三重県出身 95年生まれ 大阪府在住のWebエンジニア\n学生時代は陸上競技に10年間打ち込み、卒業とともに未経験でIT企業に就職。\n2019年〜現在までフロントエンジニアとして商品比較サイトの開発に携わる。\nフルスタックエンジニアを目指し日々邁進中\n趣味はアウトドア、週末は野山に飛び出します。\n新しくてワクワクするようなプロダクトに興味があります。`
  },
  career: {
    title: 'CAREER',
    history: {
      main: [
        {
          date: '2019年4月',
          title: 'SES企業に就職',
          text: '',
          skills: []
        },
        {
          date: '2019年4月~7月',
          title: '社外研修',
          text: '',
          skills: ['HTML/CSS/Javascriipt', 'PHP', 'Java']
        },
        {
          date: '2019年7月〜',
          title: '大手商品比較サイトの運用・保守',
          text: `・開発、ソースレビュー、テスト\n・フロントエンジニア\n・Line AIチャットボットの開発`,
          skills: ['PHP（Yii2, Twig）', 'HTML/CSS/Javascript', 'jQuery', 'GCP（Functions/Datastore/Dailogflow）', 'AWS（AppSync/Dynamodb）']
        },
      ],
      sub: [
        {
          date: '2022年2月〜3月',
          title: 'コーポレートサイト作成',
          text: '・開発',
          skills: ['Wordpress', 'PHP', 'HTML/CSS/Javascript', 'jQuery']
        },
        {
          date: '2023年2月〜',
          title: '日報管理システム開発',
          text: '・開発、DB設計（一部）',
          skills: ['React（Next.js, Redux, Redux Toolkit）', 'Mui']
        },
      ]
    }
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
        vendor: 'GCP',
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
