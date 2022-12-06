import type { GetStaticProps, NextPage } from 'next';
import Main from 'components/Main';
import Section from 'components/Section';
import ArticleCard from 'components/blog/ArticleCard';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';

type Props = {
  articles: [{ [key: string]: Array<ArticleType> }];
};

const Blog: NextPage<Props> = ({ articles }: Props) => {
  return (
    <Main title="BLOG" description="Webエンジニア 藤原智弥のBLOG">
      {articles.map((value, index) => {
        const category = Object.keys(value)[0];
        return (
          <Section title={category.toUpperCase()} key={index}>
            {!value[category].length ? (
              <div className="grid h-80 place-items-center text-center text-2xl text-gray-500">
                COMING SOON...
              </div>
            ) : (
              <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3">
                {value[category].map((article, index) => (
                  <ArticleCard article={article} key={index} />
                ))}
              </div>
            )}
          </Section>
        );
      })}
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const engineering = await microcms.get({
    endpoint: 'blogs',
    queries: { filters: 'category[contains]engineering' },
  });
  const gadget = await microcms.get({
    endpoint: 'blogs',
    queries: { filters: 'category[contains]other' },
  });
  const other = await microcms.get({
    endpoint: 'blogs',
    queries: { filters: 'category[contains]other' },
  });

  return {
    props: {
      articles: [
        { engineering: engineering.contents },
        { gadget: gadget.contents },
        { other: other.contents },
      ],
    },
  };
};

export default Blog;
