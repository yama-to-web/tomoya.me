import { MicroCMSImage } from 'microcms-js-sdk';

export type InstaImgType = {
  id: string;
  media_url: string;
  permalink: string;
};

export type ArticleType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: string;
  title: string;
  description?: string;
  body: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  tags: [string];
};

export type WorkType = {
  period: [{ from_date: string; to_date: string }];
  title: string;
  text: string;
  skills: string;
};

export type ProfileType = {
  introduction: {
    title: string;
    name: string;
    content: string;
    image: MicroCMSImage;
  };
  career: {
    title: string;
    main: Array<WorkType>;
    sub: Array<WorkType>;
  };
  certification: {
    title: string;
    items: [
      {
        name: string;
        date: string;
        vendor: string;
      },
    ];
  };
  products: {
    title: string;
    items: [
      {
        name: string;
        category: string;
        text: string;
        tags: string[];
        image: MicroCMSImage;
      },
    ];
  };
};
