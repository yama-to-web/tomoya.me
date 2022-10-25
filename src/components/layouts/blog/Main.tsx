import { motion } from 'framer-motion';
import CommonMeta from 'components/CommonMeta';
import Footer from 'components/Footer';
import Header from 'components/Header';
import useHeaderScroll from 'hooks/useHeaderScroll';
import type { ArticleType } from 'types/index';

type Props = {
  children?: React.ReactNode;
  article: ArticleType;
};

const Main = ({ children, article }: Props) => {
  // 900~1000に表示開始する値を設定する
  const isHeaderActive = useHeaderScroll(950);
  return (
    <>
      <CommonMeta
        pageTitle={article.title}
        pageDescription={article.title}
        pageImage={article.eyecatch.url}
      />
      <div className="flex flex-col items-center">
        <Header isActive={isHeaderActive} />
        <motion.main
          id="micro_cms_article"
          className="flex flex-row flex-1 items-center mx-auto min-h-screen sm:px-5 lg:max-w-screen-md"
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              scale: 0.99,
            },
            pageAnimate: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.8,
              },
            },
          }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
