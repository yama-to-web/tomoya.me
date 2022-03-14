import type { NextPage } from 'next';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';
const About: NextPage = () => {
  return (
    <div>
      <CommonMeta
        pageTitle="About"
        pageDescription="Webエンジニア 藤原智弥の自己紹介ページです。"
      />
      <PageLayout title="About">
        <div className="flex flex-col">
          <div className="m-auto w-52 h-52 bg-[url('/profile.png')] bg-repeat bg-contain"></div>
          <div className="py-10 m-auto">
            <div className="flex items-center text-2xl">Tomoya Fujiwara</div>
            <div className="mt-4 text-sm tracking-wider leading-loose">
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
