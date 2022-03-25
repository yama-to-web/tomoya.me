import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
// import Image from 'next/image';

type Props = {
  key: number;
  noteUrl: string;
  eyecatch: string;
  name: string;
  body: string;
  likeCount: number;
  publishAt: string;
};

const Article = (props: Props) => {
  return (
    <motion.div
      className="overflow-hidden p-2.5 max-w-xs max-h-64 bg-white rounded border border-gray-100 border-solid shadow shadow-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      viewport={{ once: true }}
      whileHover={{
        position: 'relative',
        zIndex: 1,
        background: 'white',
        scale: [1, 1.05],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <a className="no-underline" href={props.noteUrl} rel="noreferrer">
        <div className="float-right w-24">
          <img src={props.eyecatch} width="1280" height="670" alt="" />
        </div>
        <div className="px-1.5 pt-3.5">
          <p className="flex overflow-hidden mb-2 text-sm font-semibold tracking-wide text-gray-700">
            {props.name}
          </p>
          <p className="flex float-left overflow-hidden my-1 h-16 text-xs leading-5 text-gray-500 break-all">
            {props.body}
          </p>
        </div>
        <div className="flex items-center px-4 mt-4 text-sm text-pink-400">
          <div className="mr-1 w-3.5">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="leading-4">{props.likeCount}</div>
        </div>
        <div className="float-right text-xs">{props.publishAt}</div>
      </a>
    </motion.div>
  );
};

export default Article;
