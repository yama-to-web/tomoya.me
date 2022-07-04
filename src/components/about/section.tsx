import { motion } from 'framer-motion';

type Props = {
  children?: React.ReactNode;
  title?: String;
};

const Section = ({ children, title }: Props) => {
  return (
    <motion.section
      className="mb-28 w-full max-w-full"
      initial={{
        opacity: 0,
        scale: 0.99,
      }}
      whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
    >
      <motion.h4
        className="mb-10 g:max-w-screen-lg text-3xl font-thin tracking-wide"
        initial={{
          opacity: 0,
          y: '100%',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 1,
            ease: 'easeInOut',
          },
        }}
      >
        {title}
      </motion.h4>
      <div className="lg:max-w-screen-lg">{children}</div>
    </motion.section>
  );
};

export default Section;
