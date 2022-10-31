import { motion } from 'framer-motion';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import CommonMeta from 'components/CommonMeta';
import Nav from 'components/Nav';
import Sns from 'components/Sns';
import { loadInstaPosts } from 'lib/fetch-posts';
import type { InstaImg } from 'types/index';

type Props = {
  children?: React.ReactNode;
  images?: Array<InstaImg>;
};

const Home: NextPage<React.ReactNode> = (props: Props) => {
  const instaImgs = props.images;
  let mvPath;

  if (instaImgs) {
    mvPath = instaImgs[Math.floor(Math.random() * instaImgs.length)].media_url;
  } else {
    mvPath = '/mv' + Math.floor(Math.random() * 2) + '.jpg';
  }

  return (
    <main className="relative flex flex-col items-center justify-center">
      <CommonMeta pageTitle="Home" pageDescription="" />
      <div className="after:bg-mask z-0 min-h-screen w-screen bg-fixed after:bg-cover">
        <Image
          src={mvPath}
          fill={true}
          object-fit="cover"
          object-position="center"
          alt="instagram image"
        />
      </div>
      <div className="absolute flex flex-col items-center justify-center p-5">
        <div className="z-50">
          <motion.div
            className="mx-auto"
            initial={{
              opacity: 0,
              scale: 0.99,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.2,
              },
            }}
          >
            <Image src="/title.png" width="500" height="100" alt="tomoya.me" />
          </motion.div>
          <motion.div
            className="lg: mt-8 flex flex-col items-start justify-center text-white lg:flex-row lg:items-center lg:justify-between"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.8,
              },
            }}
          >
            <Nav></Nav>
            <Sns gap="mx-1"></Sns>
          </motion.div>
          <p className="mt-3 text-xs text-white">
            This background image is grabbed from my latest instagram post automatically.
          </p>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = await loadInstaPosts(3);

  return {
    props: { images },
  };
};

export default Home;
