import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { accounts } from 'constants/profile-data';

const Sns = ({ size = 'xl' }: { size?: SizeProp }) => {
  const icons = {
    twitter: faTwitter,
    instagram: faInstagram,
    github: faGithub,
  };
  type TypeofSns = keyof typeof icons;

  return (
    <div className="my-5">
      <ul className="flex place-content-center  gap-3 sm:gap-5">
        {accounts.map((data) => {
          return (
            <li key={data.id}>
              <Link href={data.url} rel="noreferrer" passHref>
                <FontAwesomeIcon size={size} icon={icons[data.id as TypeofSns] as IconProp} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sns;
