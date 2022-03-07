import '../styles/globals.scss';
import '../styles/reset.scss';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps, router }: AppProps) {
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
            duration: 0.8,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
