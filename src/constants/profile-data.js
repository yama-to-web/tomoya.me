const config = {
  products: {
    name: 'PRODUCTS',
    items: [
      {
        name: 'tomoya.me',
        category: 'Webサイト',
        thumnail: 'tomoya.me.png',
        explanation: `自身のポートフォリオサイト。ReactとNextjs学習のために作り始めたこのサイト、\nReact楽しい！Tailwind使いやすい！で今も暇を見つけてはちょこちょこ更新しています 笑`,
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma'],
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