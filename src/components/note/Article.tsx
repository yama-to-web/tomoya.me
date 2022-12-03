import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
      className="max-h-64 w-full overflow-hidden rounded border-0 border-gray-100 bg-white p-2.5 shadow shadow-gray-200 sm:max-w-xs"
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
      <Link className="no-underline" href={props.noteUrl} rel="noreferrer" passHref>
        <div className="float-right w-24">
          <Image src={props.eyecatch ?? '/no_image.png'} width={1280} height={670} alt="" />
        </div>
        <div className="px-1.5 pt-3.5">
          <p className="mb-2 overflow-hidden text-sm font-semibold tracking-wide text-gray-700">
            {props.name}
          </p>
          <p className="float-left my-1 h-16 w-full overflow-hidden break-all text-xs leading-5 text-gray-500">
            {props.body}
          </p>
        </div>
        <div className="mt-4 flex items-center px-4 text-sm text-pink-400">
          <div className="mr-1 w-3.5">
            <FontAwesomeIcon icon={faHeart as IconProp} />
          </div>
          <div className="leading-4">{props.likeCount}</div>
        </div>
        <div className="float-right text-xs text-slate-400">{props.publishAt}</div>
      </Link>
    </motion.div>
  );
};

export default Article;
