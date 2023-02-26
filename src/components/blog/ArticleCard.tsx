import { motion } from 'framer-motion';
import moment from 'moment';
import Link from 'next/link';
import Tags from 'components/Tags';
import CategoryLabel from 'components/blog/CategoryLabel';
import type { ArticleType } from 'types/index';

type Props = {
  article: ArticleType;
};

const ArticleCard = ({ article }: Props) => {
  return (
    <Link
      href={`/blog/${article.category ? article.category + '/' : ''}${article.id}`}
      className="max-w-sm sm:max-w-4xl"
      key={article.id}
      passHref
    >
      <motion.div
        className="overflow-hidden border-b pb-4 sm:flex sm:border-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: [1, 1.02],
          opacity: [1, 0.6],
          transition: {
            duration: 0.3,
          },
        }}
      >
        {/* サムネイル */}
        <div className="overflow-hidden rounded-md sm:mr-5 sm:w-72">
          <motion.img
            width="300"
            height="200"
            className="h-40 w-full object-cover object-center"
            src={
              article.thumbnail
                ? article.thumbnail.url
                : article.eyecatch
                ? article.eyecatch.url
                : '/no_image.png'
            }
            alt={`${article.title}のイメージ`}
          />
        </div>
        {/* Card Body */}
        <div className="flex-1 p-2">
          {/* 記事タイトル */}
          <div className="mt-1 mb-4 text-lg font-bold sm:text-xl">{article.title}</div>
          {/* タグ */}
          <Tags tags={article.tags} size="sm" />
          {/* 公開日 */}
          <div className="mt-1 flex items-center text-xs text-default/50">
            <span>公開日：{moment(article.createdAt).format('YYYY.MM.DD')}</span>
          </div>
          {/* カテゴリ */}
          <div className="mt-2">
            <CategoryLabel category={article.category} />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleCard;
