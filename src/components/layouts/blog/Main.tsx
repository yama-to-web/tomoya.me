import { motion } from 'framer-motion';
import CommonMeta from '../../CommonMeta';
import Footer from '../../Footer';
import Header from '../../Header';

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Main = ({ children, title, description }: Props) => {
  return (
    <>
      <CommonMeta pageTitle={title} pageDescription={description} />
      <div className="flex flex-col items-center">
        <Header />
        <motion.main
          className="flex flex-col flex-1 items-center min-h-screen sm:px-5 lg:max-w-screen-md"
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
