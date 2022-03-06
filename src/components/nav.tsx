import Link from 'next/link';
import styles from '../styles/components/nav.module.scss';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/works">
        <a>WORKS</a>
      </Link>
      <Link href="/skills">
        <a>SKILLS</a>
      </Link>
      <Link href="/note">
        <a>NOTE</a>
      </Link>
    </nav>
  );
}
