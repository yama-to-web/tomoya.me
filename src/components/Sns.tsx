import type { IconParams, IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { accounts } from 'constants/profile-data';

const Sns = ({ gap = 'mx-2.5', size = 'lg' }: { gap?: string; size?: SizeProp }) => {
  const icons = {
    twitter: faTwitter,
    instagram: faInstagram,
    github: faGithub,
  };
  type TypeofSns = keyof typeof icons;
  return (
    <div className="my-5 flex items-center justify-center">
      {accounts.map((data) => {
        return (
          <Link className={`${gap} w-6`} href={data.url} rel="noreferrer" key={data.id} passHref>
            <FontAwesomeIcon size={size} icon={icons[data.id as TypeofSns] as IconProp} />
          </Link>
        );
      })}
    </div>
  );
};

export default Sns;
