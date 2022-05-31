import type { NextPage } from 'next';
import Image from 'next/image';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';

const About: NextPage = () => {
  return (
    <div>
      <CommonMeta
        pageTitle="ABOUT"
        pageDescription="Webエンジニア 藤原智弥の自己紹介ページです。"
      />
      <PageLayout title="ABOUT">
        <div className="flex flex-col justify-center items-start sm:flex-row sm:gap-8">
          <div className="w-full sm:w-[calc(50%_-_5rem)]">
            <Image src="/profile.png" width="592" height="592" alt="tomoya.me" />
          </div>
          <div className="py-10 w-full sm:w-[calc(50%_-_1rem)] sm:min-w-[calc(50%_-_1rem)]">
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
