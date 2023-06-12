import type { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { accounts } from 'constants/common';

const Sns = ({ size = 'xl' }: { size?: SizeProp }) => {
  return (
    <div className="my-5">
      <ul className="flex place-content-center  gap-3 sm:gap-5">
        {accounts.map((account) => {
          return (
            <li key={account.id}>
              <Link href={account.url} rel="noreferrer" passHref>
                <FontAwesomeIcon size={size} icon={account.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sns;
