import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Sns() {
  return (
    <div className="flex justify-center items-center my-5">
      <Link href="https://twitter.com/yama_to_web">
        <a className="my-1 mx-2.5">
          <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/yama_to_web">
        <a className="my-1 mx-2.5">
          <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
        </a>
      </Link>
      <Link href="https://github.com/yama-to-web">
        <a className="my-1 mx-2.5">
          <FontAwesomeIcon className="text-2xl" icon={faGithub} />
        </a>
      </Link>
    </div>
  );
}
