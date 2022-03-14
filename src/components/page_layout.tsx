import { motion } from 'framer-motion';
import Header from '../components/header';
import Footer from './footer';

type Props = {
  children?: React.ReactNode;
  title: String;
};

const PageLayout = ({ children, title }: Props) => {
  return (
    <>
      <Header />
      <section className="flex-col flex-none justify-center items-start mx-8 mt-24 w-[calc(100%-48px)] max-w-[calc(100%-48px)] h-40 text-3xl lg:mx-auto lg:max-w-screen-lg">
        <h3>{title}</h3>
      </section>
      <motion.main
        className="flex-col flex-1 items-center px-6 min-h-screen lg:m-auto lg:max-w-screen-lg"
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
    </>
  );
};

export default PageLayout;
