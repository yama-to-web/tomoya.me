import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Article from '../components/article';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';
import styles from '../styles/note.module.scss';

type Props = {
  children?: React.ReactNode;
  articles?: Array<ArticleProps>;
};

type ArticleProps = {
  noteUrl: string;
  eyecatch: string;
  name: string;
  body: string;
  likeCount: number;
  publishAt: string;
};

type DisplayArti = {
  [key: string]: string | number;
};

const Note: NextPage<React.ReactNode> = (props: Props) => {
  const moment = require('moment');
  let articles = props.articles;
  if (!articles) {
    articles = [
      {
        noteUrl: 'string',
        eyecatch: 'string',
        name: 'string',
        body: 'string',
        likeCount: 0,
        publishAt: 'string',
      },
    ];
  }
  return (
    <div>
      <CommonMeta
        pageTitle="Note | Tomoya Fujiwara（藤原 智弥）Portfolio Site"
        pageDescription="demo"
        pagePath="/note"
      />
      <PageLayout title="Note">
        <p className={styles.explain}>about web, programing, outdoor, etc...</p>
        <div className={styles.article_wrap}>
          {articles.map((article: ArticleProps, index: number) => {
            if (article) {
              return (
                <Article
                  key={index}
                  noteUrl={article.noteUrl}
                  eyecatch={article.eyecatch}
                  name={article.name}
                  body={article.body}
                  likeCount={article.likeCount}
                  publishAt={moment(article.publishAt).format('YYYY-MM-DD HH:mm')}
                />
              );
            }
          })}
        </div>
      </PageLayout>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1');
  const posts = await res.json();
  const allowedKeys = ['name', 'likeCount', 'publishAt', 'eyecatch', 'body', 'noteUrl'];
  let contents = posts['data']['contents'];
  let articles = contents.map((article: DisplayArti) => {
    const filteredArti = Object.keys(article)
      .filter((key) => allowedKeys.includes(key))
      .reduce((obj: DisplayArti, key: string) => {
        const keyName: keyof typeof article = key as keyof typeof article;
        obj[keyName] = article[keyName];

        return obj;
      }, {});

    return filteredArti;
  });

  return {
    props: { articles },
  };
}

export default Note;
