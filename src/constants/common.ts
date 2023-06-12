import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

interface Accounts {
  id: string;
  url: string;
  icon: IconProp;
}

export const accounts: Accounts[] = [
  {
    id: 'instagram',
    url: 'https://www.instagram.com/yama_to_web',
    icon: faInstagram,
  },
  {
    id: 'github',
    url: 'https://github.com/yama-to-web',
    icon: faGithub,
  },
];

export const siteRoutes: { [key: string]: string }[] = [
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
];
