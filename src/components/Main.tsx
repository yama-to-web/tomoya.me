import { motion } from 'framer-motion';
import CommonMeta from 'components/CommonMeta';
import Footer from 'components/Footer';
import Header from 'components/Header';

type Props = {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
};

const Main = ({ children, title, subtitle, description }: Props) => {
  return (
    <>
      <CommonMeta
        pageTitle={title + (subtitle ? ': ' + subtitle : '')}
        pageDescription={description}
      />
      <div className="flex flex-col items-center">
        <Header />
        <section className="mt-24 flex h-40 w-full items-start px-5 text-3xl lg:max-w-screen-lg">
          <h3 className="text-lg font-bold">
            {title}
            {subtitle && <span className="text-lg font-bold"> ＞ {subtitle}</span>}
          </h3>
        </section>
        <motion.main
          className="flex min-h-screen flex-1 flex-col items-center px-5 lg:max-w-screen-lg"
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
