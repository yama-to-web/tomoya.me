import { motion } from 'framer-motion';
import CommonMeta from '../CommonMeta';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children?: React.ReactNode;
  title: string;
  description: string;
};

const Main = ({ children, title, description }: Props) => {
  return (
    <>
      <CommonMeta pageTitle={title} pageDescription={description} />
      <div className="flex flex-col items-center">
        <Header />
        <section className="flex items-start px-5 mt-24 w-full h-40 text-3xl lg:max-w-screen-lg">
          <h3 className="text-lg font-bold">{title}</h3>
        </section>
        <motion.main
          className="flex flex-col flex-1 items-center px-5 min-h-screen lg:max-w-screen-lg"
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
