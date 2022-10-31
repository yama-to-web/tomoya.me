import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import moment from 'moment';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Main from 'components/layouts/Main';
import { client } from 'lib/client';

type Props = {
  articles: Array<Article>;
};
type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tags: [string];
  toc: [
    {
      text: string;
      id: string;
      name: string;
    },
  ];
};

const Blog = ({ articles }: Props) => {
  return (
    <div>
      <Main title="BLOG" description="Webエンジニア 藤原智弥のBLOG">
        {!articles.length && <div className="text-2xl text-gray-500">COMING SOON...</div>}
        <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-1 sm:p-10 md:grid-cols-3">
          {articles.map((article) => (
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              key={article.id}
            >
              <Link href={`/blog/${article.id}`} passHref legacyBehavior>
                <div>
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
                      <span className="text-xs">
                        {moment(article.createdAt).format('YYYY.MM.DD')}
                      </span>
                    </div>
                    {/* 記事タイトル */}
                    <div className="mb-4 text-base font-semibold text-gray-500">
                      {article.title}
                    </div>
                    {article.tags.length > 0 && (
                      <ul className="flex items-center justify-start">
                        {article.tags.map((tag) => {
                          return (
                            <li
                              className="mr-1 px-1 text-xxs font-semibold text-teal-500"
                              key={tag}
                            >
                              <FontAwesomeIcon size="sm" icon={faTag as IconProp} />
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      articles: data.contents,
    },
  };
};

export default Blog;
