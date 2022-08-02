import { motion } from 'framer-motion';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Main from '../components/layouts/Main';
import { client } from '../lib/client';

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
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tags: string;
};

const Blog = ({ articles }: Props) => {
  return (
    <div>
      <Main title="BLOG" description="Webエンジニア 藤原智弥のBLOG">
        {!articles.length && <div className="text-2xl text-gray-500">COMING SOON...</div>}
        <div className="container grid grid-cols-1 gap-5 p-10 mx-auto sm:grid-cols-1 md:grid-cols-3">
          {articles.map((article) => (
            <motion.div
              className="overflow-hidden rounded shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
              key={article.id}
            >
              <Link href={`/blog/${article.id}`} passHref>
                <a>
                  <motion.img
                    whileHover={{
                      position: 'relative',
                      zIndex: 1,
                      scale: [1, 1.05],
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="w-full"
                    src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
                    alt="test"
                  />
                  <div className="py-4 px-6">{article.title}</div>
                  <div className="px-6 pt-4 pb-2">
                    {article.tags && (
                      <span className="inline-block py-1 px-2 mr-2 mb-2 text-xs font-semibold text-gray-700 before:content-['#'] bg-gray-200 rounded-full">
                        {article.tags}
                      </span>
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
