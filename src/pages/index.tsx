import type { NextPage } from 'next';
import CommonMeta from '../components/common_meta';
import Nav from '../components/nav';
import Sns from '../components/sns';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main>
      <CommonMeta
        pageTitle="Tomoya Fujiwara（藤原 智弥）Portfolio Site"
        pageDescription="demo"
        pagePath="/"
      />
      <div id={styles.mv}>
        <div className={styles.links}>
          <Nav></Nav>
          <Sns></Sns>
        </div>
      </div>
    </main>
  );
};

export default Home;
