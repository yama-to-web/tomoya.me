import { readdirSync } from 'fs';
import { motion } from 'framer-motion';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import CommonMeta from '../components/common_meta';
import Nav from '../components/nav';
import Sns from '../components/sns';

type Props = {
  children?: React.ReactNode;
  images?: Array<string>;
};

const Home: NextPage<React.ReactNode> = (props: Props) => {
  const instaImgs = props.images;
  let mvPath;

  if (instaImgs) {
    mvPath = `/instagram/${instaImgs[Math.floor(Math.random() * instaImgs.length)]}`;
  } else {
    mvPath = '/mv' + Math.floor(Math.random() * 2) + '.jpg';
  }
  const mvStyle = {
    backgroundImage: 'url(' + mvPath + ')',
  };
  return (
    <main>
      <CommonMeta pageTitle="Home" pageDescription="" />
      <div
        className="flex relative flex-col justify-center items-center p-5 min-w-fit min-h-screen bg-cover after:bg-mask"
        style={mvStyle}
      >
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
            className="flex flex-col justify-center items-start mt-8 text-white lg: lg:flex-row lg:justify-between lg:items-center"
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
            <Sns></Sns>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = readdirSync('./public/instagram');

  return {
    props: { images },
  };
};
export default Home;
