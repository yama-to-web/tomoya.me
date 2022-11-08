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
  const isHeaderActive = useHeaderScroll(950); // 900~1000に表示開始する値を設定する
  const jsonLd = [
    {
      '@context': 'http://schema.org',
      '@type': 'Article',
      headline: article.title,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      image: [article.eyecatch.url],
      author: {
        '@type': 'Person',
        name: 'Tomoya Fujiwara',
        url: process.env.NEXT_PUBLIC_SITE_URL + '/about',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: process.env.NEXT_PUBLIC_SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: process.env.NEXT_PUBLIC_SITE_URL + '/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
        },
      ],
    },
  ];

  return (
    <>
      <CommonMeta
        pageTitle={article.title}
        pageDescription={article.title}
        pageImage={article.eyecatch.url}
        jsonLd={JSON.stringify(jsonLd)}
      />
      <div className="flex flex-col items-center">
        <Header isActive={isHeaderActive} />
        <motion.main
          id="micro_cms_article"
          className="mx-auto mt-16 flex min-h-screen flex-1 flex-row items-center sm:px-5 lg:max-w-screen-md"
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
