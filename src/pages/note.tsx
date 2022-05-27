import type { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import Article from '../components/article';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';

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
        noteUrl: '',
        eyecatch: '',
        name: '',
        body: '',
        likeCount: 0,
        publishAt: '',
      },
    ];
  }
  return (
    <div>
      <CommonMeta
        pageTitle="Note"
        pageDescription="Webエンジニア 藤原智弥のnoteに投稿された最新記事を紹介します。"
      />
      <PageLayout title="Note">
        <p className="text-xs leading-6">Work, Programing, Outdoor etc...</p>
        <p className="mb-6 text-xs leading-6">note記事サイトに遷移します。</p>
        <div className="flex flex-row flex-wrap gap-2 justify-center items-start max-w-5xl">
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1');
  const posts = await res.json();
  const allowedKeys = ['name', 'likeCount', 'publishAt', 'eyecatch', 'body', 'noteUrl'];
  let contents = posts.data.contents;
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
};

export default Note;
