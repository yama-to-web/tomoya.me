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
      className="max-w-sm"
      key={article.id}
      passHref
    >
      <motion.div
        className="overflow-hidden border-b pb-4"
        // className="overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        {/* サムネイル */}
        <div className="flex items-center overflow-hidden">
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
            className="h-44 w-full rounded-md object-cover object-center"
            src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
            alt={`${article.title}のイメージ`}
          />
        </div>
        {/* Card Body */}
        <div className="p-3">
          {/* 記事タイトル */}
          <div className="mb-4 text-lg font-bold text-gray-700">{article.title}</div>
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
