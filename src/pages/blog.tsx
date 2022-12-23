import type { GetStaticProps, NextPage } from 'next';
import Main from 'components/Main';
import Section from 'components/Section';
import ArticleCard from 'components/blog/ArticleCard';
import RightMenu from 'components/blog/RightMenu';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';

type Props = {
  articles: Array<ArticleType>;
};

const Blog: NextPage<Props> = ({ articles }: Props) => {
  return (
    <Main title="BLOG" description="Webエンジニア 藤原智弥のBLOG">
      <div className="grid w-full gap-5 xl:grid-cols-[3fr_1fr]">
        <Section title={'POSTS LIST'}>
          {!articles.length ? (
            <div className="grid h-80 place-items-center text-center text-2xl text-gray-400">
              COMING SOON...
            </div>
          ) : (
            <div className="container mx-auto grid grid-cols-1 place-items-center gap-5 sm:ml-0 sm:grid-cols-1 sm:place-items-start">
              {articles.map((article, index) => (
                <ArticleCard article={article} key={index} />
              ))}
            </div>
          )}
        </Section>
        <RightMenu categories={['tech', 'gadget', 'other']} />
      </div>
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
