import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import moment from 'moment';
import Link from 'next/link';
import Tags from 'components/Tags';
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
        // className="overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        {/* サムネイル */}
        <div className="overflow-hidden rounded-md sm:mr-5 sm:w-80">
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
            className="h-44 w-full object-cover object-center"
            src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
            alt={`${article.title}のイメージ`}
          />
        </div>
        {/* Card Body */}
        <div className="flex-1 p-2">
          {/* カテゴリ */}
          {/* bg-violet-400/90 */}
          {/* bg-orange-300/90 */}
          <div className="mb-1.5 w-fit rounded bg-violet-400/80 py-1 px-1.5 text-xxs font-semibold tracking-widest text-white">
            {article.category[0].toUpperCase()}
          </div>
          {/* 記事タイトル */}
          <div className="mb-4 text-lg font-bold text-gray-700 sm:text-xl">{article.title}</div>
          {/* タグ */}
          <Tags tags={article.tags} size="sm" />
          {/* 公開日 */}
          <div className="mt-1 flex items-center font-semibold text-gray-500">
            <FontAwesomeIcon
              size="xs"
              style={{ marginRight: '0.2rem' }}
              icon={faClock as IconProp}
            />
            <span className="text-sm">{moment(article.createdAt).format('YYYY.MM.DD')}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleCard;
