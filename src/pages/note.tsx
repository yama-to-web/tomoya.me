import type { NextPage, GetStaticProps } from 'next';
import Article from 'components/Article';
import Main from 'components/layouts/Main';
import { loadNotePosts } from 'lib/fetch-posts';

type Props = {
  children?: React.ReactNode;
  articles?: Array<ArticleProps>;
};

type ArticleProps = {
  noteUrl: string;
  eyecatch: string;
  name: string;
  body: string;
  likeCount: Number;
  publishAt: string;
};

type DisplayArti = {
  [key: string]: string | Number;
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
      <Main
        title="note"
        description="Webエンジニア 藤原智弥のnoteに投稿された最新記事を紹介します。"
      >
        <div className="lg:max-w-screen-lg">
          <div>
            <p className="text-xs leading-6">
              仕事や趣味で気になったこと、気づいたことなどを書き綴ったゆる〜いブログです。
            </p>
            <p className="mb-6 text-xs leading-6">noteの記事ページに遷移します。</p>
          </div>
          <div className="container grid grid-cols-1 gap-5 mx-auto sm:grid-cols-2 md:grid-cols-3">
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
                    publishAt={moment(article.publishAt).format('YYYY.MM.DD ddd')}
                  />
                );
              }
            })}
          </div>
        </div>
      </Main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await loadNotePosts();
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
