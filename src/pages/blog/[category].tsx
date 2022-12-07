import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Main from 'components/Main';
import ArticleCard from 'components/blog/ArticleCard';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';

type Props = {
  articles: Array<ArticleType>;
  category: string;
};

const Blog: NextPage<Props> = ({ articles, category }: Props) => {
  return (
    <Main title={'#' + category} description="Webエンジニア 藤原智弥のBLOG">
      <Link href={'/blog'} className="mr-auto -mt-10 mb-10 text-sky-600">
        記事一覧
      </Link>
      <div className="container grid grid-cols-1 gap-5 sm:p-2 md:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
      </div>
    </Main>
  );
};
export const getStaticPaths = async () => {
  const data = await microcms.get({
    endpoint: 'blogs',
    queries: { fields: 'category', limit: 9999 },
  });
  let paths = data.contents.map((content: { id: string; category: string }) => {
    return `/blog/${content.category ? content.category[0] : ''}`;
  });
  // 重複削除
  paths = Array.from(new Set(paths));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const category = ctx.params?.category;
  const data = await microcms.get({
    endpoint: 'blogs',
    queries: { filters: `category[contains]${category}`, limit: 12 },
  });

  return {
    props: {
      articles: data.contents,
      category: category,
    },
    notFound: !data.contents.length,
  };
};

export default Blog;
