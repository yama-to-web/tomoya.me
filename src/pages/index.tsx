import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import CommonMeta from '../components/common_meta';
import Nav from '../components/nav';
import Sns from '../components/sns';

const Home: NextPage = () => {
  return (
    <main>
      <CommonMeta pageTitle="Home" pageDescription="" />
      <div className="flex relative flex-col justify-center items-center p-5 min-w-fit min-h-screen bg-[url('/mv.gif')] bg-cover sm:bg-[url('/mv.jpg')]">
        <div>
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

export default Home;
