import 'styles/globals.scss';
import 'styles/reset.scss';
import 'styles/blog.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import GoogleAnalytics from 'components/GoogleAnalytics';
import usePageView from 'hooks/usePageView';

function MyApp({ Component, pageProps, router }: AppProps) {
  usePageView(); // GA PCイベント監視

  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
    >
      <GoogleAnalytics />
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
