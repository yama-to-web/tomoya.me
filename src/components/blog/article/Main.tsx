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
        pageDescription={article.description}
        pageImage={article.eyecatch.url}
        jsonLd={JSON.stringify(jsonLd)}
      />
      <Header isActive={isHeaderActive} />
      <main className="mx-auto mt-20 w-full lg:max-w-screen-2xl">
        <motion.article
          id="micro_cms_article"
          className="grid min-h-screen justify-items-center gap-5 sm:px-5 xl:grid-cols-article-pc"
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
        </motion.article>
      </main>
      <Footer />
    </>
  );
};

export default Main;
