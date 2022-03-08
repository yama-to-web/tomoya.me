import type { NextPage } from 'next';
import Image from 'next/image';
import CommonMeta from '../components/common_meta';
import Nav from '../components/nav';
import Sns from '../components/sns';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <main>
      <CommonMeta
        pageTitle="Tomoya Fujiwara（藤原 智弥）Portfolio Site"
        pageDescription="demo"
        pagePath="/"
      />
      <div id={styles.mv}>
        <div>
          <Image
            src="/title.png"
            className={styles.title}
            width={500}
            height={100}
            alt="tomoya.me"
          />
          <div className={styles.links}>
            <Nav></Nav>
            <Sns></Sns>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
