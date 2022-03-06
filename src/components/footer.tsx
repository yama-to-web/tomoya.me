import styles from '../styles/components/page_layout.module.scss';
import Sns from './sns';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Sns></Sns>
      <p className={styles.all_lights}>TOMOYA FUJIWARA | ©All rights reserved</p>
    </footer>
  );
};

export default Footer;
