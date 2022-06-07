import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { accounts } from '../constants/sns';

const Sns = ({ mx, iconSize }: { mx: string; iconSize: string }) => {
  return (
    <div className="flex justify-center items-center my-5">
      {accounts.map((data) => {
        return (
          <Link href={data.url} key={data.id}>
            <a className={`mx-${mx}`}>
              <FontAwesomeIcon className={`text-${iconSize}`} icon={data.icon} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

Sns.defaultProps = {
  mx: '2.5',
  iconSize: '2xl',
};

export default Sns;
