import '../styles/globals.css';
import '../styles/reset.scss';
import * as fs from 'fs';
import { motion } from 'framer-motion';
import type { GetStaticProps } from 'next';
import type { AppProps } from 'next/app';
import rp from 'request-promise';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

type InstaImg = {
  [key: string]: string;
};

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
            duration: 1,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://graph.facebook.com/v14.0/17841450072012853?fields=media.limit(5){media_url,media_type}&access_token=${process.env.INSTA_GRAPH_API_KEY}`,
  );

  const posts = await res.json();
  let images = posts.media.data.map((img: InstaImg) => {
    return img.media_url.replace(/^[^.]*/, 'https://scontent-nrt1-1');
  }, {});

  if (images) {
    images.map((url: string, index: number) => {
      const file = fs.createWriteStream(`./public/instagram/${index}.jpg`);
      rp(url).pipe(file);
    });
  }

  return {
    props: { images },
  };
};

export default MyApp;
