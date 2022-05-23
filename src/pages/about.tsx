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
            <div className="mt-4 text-xs tracking-wider leading-loose">
              1995年生まれ Webエンジニア。
              <br />
              スポーツ一筋だった学生時代から大学卒業とともに未経験でIT企業に就職。
              <br />
              <br />
              フロントエンジニアとして商品比較サイトの開発に関わりながら、フルスタックエンジニアを目指し日々邁進中。
              <br />
              趣味はアウトドア。
              <br />
              新しくてワクワクするようなプロダクトに興味があります。
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default About;
