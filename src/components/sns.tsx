import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from '../styles/components/sns.module.scss';

export default function Sns() {
  return (
    <div className={styles.sns_icons}>
      <Link href="https://twitter.com/yama_to_web">
        <a>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/yama_to_web">
        <a>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Link>
      <Link href="https://github.com/yama-to-web">
        <a>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
    </div>
  );
}
