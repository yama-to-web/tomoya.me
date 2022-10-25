import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  key: number;
  noteUrl: string;
  eyecatch: string;
  name: string;
  body: string;
  likeCount: Number;
  publishAt: string;
};

const Article = (props: Props) => {
  return (
    <motion.div
      className="overflow-hidden p-2.5 w-full max-h-64 bg-white rounded border-0 border-gray-100 shadow shadow-gray-200 sm:max-w-xs"
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
          <Image src={props.eyecatch ?? '/no_image.png'} width={1280} height={670} alt="" />
        </div>
        <div className="px-1.5 pt-3.5">
          <p className="overflow-hidden mb-2 text-sm font-semibold tracking-wide text-gray-700">
            {props.name}
          </p>
          <p className="float-left overflow-hidden my-1 w-full h-16 text-xs leading-5 text-gray-500 break-all">
            {props.body}
          </p>
        </div>
        <div className="flex items-center px-4 mt-4 text-sm text-pink-400">
          <div className="mr-1 w-3.5">
            <FontAwesomeIcon icon={faHeart as IconProp} />
          </div>
          <div className="leading-4">{props.likeCount}</div>
        </div>
        <div className="float-right text-xs text-slate-400">{props.publishAt}</div>
      </a>
    </motion.div>
  );
};

export default Article;
