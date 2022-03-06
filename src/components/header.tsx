import Link from 'next/link';
import styles from '../styles/components/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.toggle_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.header_ttl}>
          <Link href="/">
            <a>
              <h1>TOMOYA FUJIWARA</h1>
              <span>|</span>
              <h2>tomoya.me</h2>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
