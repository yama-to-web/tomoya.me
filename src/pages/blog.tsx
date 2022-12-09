import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Main from 'components/Main';
import Section from 'components/Section';
import ArticleCard from 'components/blog/ArticleCard';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';

type Props = {
  articles: Array<ArticleType>;
};

const Blog: NextPage<Props> = ({ articles }: Props) => {
  return (
    <Main title="BLOG" description="Webエンジニア 藤原智弥のBLOG">
      <Section title={'posts list'}>
        {!articles.length ? (
          <div className="grid h-80 place-items-center text-center text-2xl text-gray-500">
            COMING SOON...
          </div>
        ) : (
          <div>
            <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-1">
              {articles.map((article, index) => (
                <ArticleCard article={article} key={index} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await microcms.get({
    endpoint: 'blogs',
    queries: { limit: 6 },
  });

  return {
    props: {
      articles: articles.contents,
    },
  };
};

export default Blog;
