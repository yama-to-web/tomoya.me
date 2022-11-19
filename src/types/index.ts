export type InstaImg = {
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
  tags: [string];
};
