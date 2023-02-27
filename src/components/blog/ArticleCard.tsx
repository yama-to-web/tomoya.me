import { motion } from 'framer-motion';
import moment from 'moment';
import Link from 'next/link';
import IconTags from 'components/IconTags';
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
          <div className="my-1 text-lg font-bold sm:text-xl">{article.title}</div>
          <div className="my-3 flex items-center gap-3">
            {/* カテゴリ */}
            <CategoryLabel category={article.category} />
            {/* タグ */}
            <IconTags tags={article.tags} />
          </div>
          {/* 公開日 */}
          <div className="m-1 flex items-center text-xs text-default/50">
            <span>公開日：{moment(article.createdAt).format('YYYY.MM.DD')}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ArticleCard;
