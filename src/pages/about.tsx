import type { NextPage } from 'next';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';
import styles from '../styles/about.module.scss';

const About: NextPage = () => {
  return (
    <div>
      <CommonMeta
        pageTitle="About | Tomoya Fujiwara（藤原 智弥）Portfolio Site"
        pageDescription="demo"
        pagePath="/about"
      />
      <PageLayout title="About">
        <div className={styles.about_body}>
          <div className={styles.profile_img}></div>
          <div className={styles.box_text}>
            <div className={styles.title}>
              Tomoya Fujiwara
              <span className={styles.sub_title}>- tom -</span>
            </div>
            <div className={styles.text}>
              1995年生まれ Webエンジニア
              <br />
              中学から大学まで10年間陸上競技に熱中し、大学卒業とともにIT企業に就職し、現在3年目。
              <br />
              デザイン、フロントエンド、バックエンドと幅広い分野に興味を持ち、日々邁進中。
              <br />
              <br />
              山とwebをテーマに自然とウェブに触れる楽しさを発信していきます。
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default About;
