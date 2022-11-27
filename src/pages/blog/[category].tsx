import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import moment from 'moment';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import BreadCrumb from 'components/BreadCrumb';
import Main from 'components/layouts/Main';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';

type Props = {
  articles: Array<ArticleType>;
  category: string;
};

const Blog: NextPage<Props> = ({ articles, category }: Props) => {
  return (
    <Main title={'【' + category + '】の記事一覧'} description="Webエンジニア 藤原智弥のBLOG">
      {/* パンくず */}
      <BreadCrumb
        lists={[
          {
            name: 'Blog',
            path: '/blog',
          },
          {
            name: category,
            path: '/blog/' + category,
          },
        ]}
      />
      <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-1 sm:p-10 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            href={`/blog/${category + '/' + article.id}`}
            className=""
            key={article.id}
            passHref
          >
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
            >
              {/* サムネイル */}
              <div className="flex h-44 items-center overflow-hidden">
                <motion.img
                  whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: [1, 1.2],
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  width="300"
                  height="200"
                  className="w-full"
                  src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
                  alt={`${article.title}のイメージ`}
                />
              </div>
              {/* Card Body */}
              <div className="p-3">
                {/* 公開日 */}
                <div className="mb-1 flex items-center text-gray-400">
                  <FontAwesomeIcon
                    size="xs"
                    style={{ marginRight: '0.2rem' }}
                    icon={faClock as IconProp}
                  />
                  <span className="text-xs">{moment(article.createdAt).format('YYYY.MM.DD')}</span>
                </div>
                {/* 記事タイトル */}
                <div className="mb-4 text-base font-semibold text-gray-500">{article.title}</div>
                {article.tags.length > 0 && (
                  <ul className="flex items-center justify-start">
                    {article.tags.map((tag) => {
                      return (
                        <li className="mr-1 pr-1 text-xxs font-semibold text-teal-600" key={tag}>
                          #{tag}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </motion.div>
          </Link>
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
    queries: { filters: `category[contains]${category}` },
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
