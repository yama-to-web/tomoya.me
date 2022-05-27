import { motion } from 'framer-motion';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import CommonMeta from '../components/common_meta';
import Nav from '../components/nav';
import Sns from '../components/sns';

type Props = {
  children?: React.ReactNode;
  images?: Array<InstaImg>;
};

type InstaImg = {
  [key: string]: string;
};

const Home: NextPage<React.ReactNode> = (props: Props) => {
  const mvImages = props.images;
  let mvPath;
  if (mvImages) {
    mvPath = mvImages[Math.floor(Math.random() * mvImages.length)];
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
  const res = await fetch(
    `https://graph.facebook.com/v14.0/17841450072012853?fields=media.limit(5){media_url,media_type}&access_token=${process.env.INSTA_GRAPH_API_KEY}`,
  );

  const posts = await res.json();
  let images = posts.media.data.map((img: InstaImg) => {
    return img.media_url;
  }, {});

  return {
    props: { images },
  };
};
export default Home;
