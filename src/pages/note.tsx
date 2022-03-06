import Fetch from 'isomorphic-unfetch';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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

const Note: NextPage<React.ReactNode> = (props: Props) => {
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
                  publishAt={article.publishAt}
                />
              );
            }
          })}
        </div>
      </PageLayout>
    </div>
  );
};

Note.getInitialProps = async function (context) {
  const { req, query, asPath, pathname } = context;
  let url = 'index.php';
  if (req?.headers.host === 'localhost:3000') {
    url = 'http://localhost:8000/index.php';
  }
  const res = await fetch(url);
  const data = await res.json();

  return {
    articles: data,
  };
};

export default Note;
