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
        <Section title="Works">Comming Soon...</Section>
        <Section title="Skills">
          <div className="mb-8 lg:max-w-screen-lg">
            <p className="mb-4 w-fit text-xl font-thin">Products</p>
            <ul className="pl-1">
              <li className="py-2 border-b-2 border-b-gray-100">
                <p className="text-xxs text-gray-500">Webサイト</p>
                <p className="mb-3 text-xl leading-4">
                  tomoya.me
                  <span className="pl-1 text-xs">- ポートフォリオ</span>
                </p>
                <ul className="flex flex-wrap gap-1 text-xs font-semibold text-slate-500">
                  <li className="px-1 before:content-['#'] bg-slate-200 rounded-lg">Next.js</li>
                  <li className="px-1 before:content-['#'] bg-slate-200 rounded-lg">React</li>
                  <li className="px-1 before:content-['#'] bg-slate-200 rounded-lg">TypeScript</li>
                  <li className="px-1 before:content-['#'] bg-slate-200 rounded-lg">
                    Tailwind CSS
                  </li>
                  <li className="px-1 before:content-['#'] bg-slate-200 rounded-lg">Figma</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mb-8 lg:max-w-screen-lg">
            <p className="mb-4 w-fit text-xl font-thin">Certification</p>
            <ul className="pl-1">
              <li className="py-2 border-b-2 border-b-gray-100">
                <p className="text-xs text-gray-500">2022.05.23</p>
                <p className="text-sm leading-6">
                  Associate Cloud Engineer
                  <span className="pl-1 text-xxs">- Google Cloud Certified</span>
                </p>
              </li>
              <li className="py-2 border-b-2 border-b-gray-100">
                <p className="text-xs text-gray-500">2021.04.27</p>
                <p className="text-sm leading-6">
                  基本情報技術者<span className="pl-1 text-xxs">- 情報処理推進機構(IPA)</span>
                </p>
              </li>
            </ul>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default About;
