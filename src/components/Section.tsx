import { motion } from 'framer-motion';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Section = ({ children, title }: Props) => {
  return (
    <section className="mb-52 w-full lg:mb-72 xl:max-w-screen-xl">
      <motion.h4
        className="mb-12 text-3xl font-thin tracking-wide sm:text-4xl"
        initial={{
          opacity: 0,
          scale: 0.99,
        }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h4>
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.5,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="w-full sm:p-2"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
