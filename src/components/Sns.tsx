import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Sns = ({ gap = 'mx-2.5', size = 'lg' }: { gap?: string; size?: SizeProp }) => {
  const accounts = [
    {
      id: 'twitter',
      url: 'https://twitter.com/yama_to_web',
      icon: faTwitter,
    },
    {
      id: 'instagram',
      url: 'https://www.instagram.com/yama_to_web',
      icon: faInstagram,
    },
    {
      id: 'github',
      url: 'https://github.com/yama-to-web',
      icon: faGithub,
    },
  ];

  return (
    <div className="flex justify-center items-center my-5">
      {accounts.map((data) => {
        return (
          <Link href={data.url} key={data.id}>
            <a className={`${gap} w-6`}>
              <FontAwesomeIcon size={size} icon={data.icon} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Sns;
