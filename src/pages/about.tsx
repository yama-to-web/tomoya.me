import type { NextPage } from 'next';
import Image from 'next/image';
import Section from '../components/about/section';
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
        <Section title="Profile">
          <div className="flex flex-col gap-y-8 justify-between items-start sm:flex-row">
            <div className="w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(50%_-_5rem)]">
              <Image src="/profile.png" width="592" height="592" alt="tomoya.me" />
            </div>
            <div className="w-full sm:w-[calc(50%_-_1rem)] sm:min-w-[calc(50%_-_1rem)] lg:py-10">
              <div>
                <p className="mb-1 text-3xl font-light tracking-widest">TOMOYA FUJIWARA</p>
                <p className="text-sm font-semibold tracking-wider text-gray-500">WEB ENGINEER</p>
              </div>
              <div className="mt-4 text-xs tracking-widest leading-loose">
                1995年生まれ Webエンジニア
                <br />
                中学から大学まで陸上競技に打ち込み、卒業とともに未経験でIT企業に就職
                <br />
                フロントエンジニアとして商品比較サイトの開発に関わりながら、
                <br />
                フルスタックエンジニアを目指し日々邁進中
                <br />
                <br />
                趣味はアウトドア
                <br />
                新しくてワクワクするようなプロダクトに興味があります
              </div>
            </div>
          </div>
        </Section>
        <Section title="Skills">
          <div className="px-2 lg:max-w-screen-lg">
            <p>資格</p>
            <ul>
              <li>・基本情報技術者</li>
              <li>・Google Cloud Certified - Associate Cloud Engineer</li>
            </ul>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default About;
