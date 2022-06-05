import { motion } from 'framer-motion';

type Props = {
  children?: React.ReactNode;
  title: String;
};

const Section = ({ children, title }: Props) => {
  return (
    <motion.section
      className="mb-28 w-full"
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
      <h4 className="mb-10 text-3xl font-thin lg:max-w-screen-lg">{title}</h4>
      <div className="px-2 lg:max-w-screen-lg">{children}</div>
    </motion.section>
  );
};

export default Section;
