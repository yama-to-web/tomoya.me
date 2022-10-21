import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
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
        <div className="container grid grid-cols-1 gap-5 p-10 mx-auto sm:grid-cols-1 md:grid-cols-3">
          {articles.map((article) => (
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              key={article.id}
            >
              <Link href={`/blog/${article.id}`} passHref>
                <a>
                  <div className="overflow-hidden">
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
                  <div className="p-4">
                    <div className="mb-4 text-sm">{article.title}</div>
                    {article.tags.length > 0 && (
                      <ul className="flex justify-start items-center">
                        {article.tags.map((tag) => {
                          return (
                            <li
                              className="px-1 mr-1 text-xxs font-semibold text-teal-500 rounded-xl border border-teal-500"
                              key={tag}
                            >
                              <FontAwesomeIcon size="sm" icon={faTag} />
                              {tag}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </a>
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
