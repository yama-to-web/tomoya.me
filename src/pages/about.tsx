import type { NextPage } from 'next';
import Image from 'next/image';
import Section from '../components/about/section';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';
import { products, certification } from '../constants/profile_data';

const About: NextPage = () => {
  return (
    <div>
      <CommonMeta
        pageTitle="ABOUT"
        pageDescription="Webエンジニア 藤原智弥の自己紹介ページです。"
      />
      <PageLayout title="ABOUT">
        <Section title="Introduction">
          <div className="flex flex-col gap-y-8 justify-between items-start sm:flex-row">
            <div className="w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(50%_-_5rem)]">
              <Image src="/profile.png" width="592" height="592" alt="tomoya.me" />
            </div>
            <div className="w-full sm:w-[calc(50%_-_1rem)] sm:min-w-[calc(50%_-_1rem)] lg:py-10">
              <div className="mb-10">
                <p className="mb-1 text-3xl font-bold tracking-widest">TOMOYA FUJIWARA</p>
                <p className="text-sm italic font-semibold tracking-wider text-gray-500">
                  WEB ENGINEER
                </p>
              </div>
              <div className="mt-4 text-xs tracking-wider leading-loose">
                三重県出身 95年生まれ 大阪府在住のWebエンジニア
                <br />
                学生時代は陸上競技に10年間打ち込み、卒業とともに未経験でIT企業に就職
                <br />
                2019年〜現在までフロントエンジニアとして商品比較サイトの開発に携わる
                <br />
                <br />
                フルスタックエンジニアを目指し日々邁進中
                <br />
                <br />
                趣味はアウトドア、週末は野山に飛び出します
                <br />
                <br />
                新しくてワクワクするようなプロダクトに興味があります
              </div>
            </div>
          </div>
        </Section>
        <Section title="Works">Comming Soon...</Section>
        <Section title="Skills">
          <div className="px-2 mb-8 lg:max-w-screen-lg">
            <p className="mb-4 w-fit text-xl font-thin">Products</p>
            <ul className="pl-1">
              {products.map((data) => {
                return (
                  <li className="py-2 border-b-2 border-b-gray-100" key={data.name}>
                    <p className="text-xxs text-gray-500">{data.category}</p>
                    <p className="mb-3 text-xl leading-4">
                      {data.name}
                      <span className="pl-1 text-xs before:content-['-']"> ポートフォリオ</span>
                    </p>
                    <ul className="flex flex-wrap gap-1 text-xs font-semibold text-slate-500">
                      {data.tags.map((tag) => {
                        return (
                          <li
                            className="py-0.5 px-1 before:content-['#'] bg-slate-200 rounded-lg"
                            key={tag}
                          >
                            {tag}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-2 mb-8 lg:max-w-screen-lg">
            <p className="mb-4 w-fit text-xl font-thin">Certification</p>
            <ul className="pl-1">
              {certification.map((data) => {
                return (
                  <li className="py-2 border-b-2 border-b-gray-100" key={data.name}>
                    <p className="text-xs text-gray-500">{data.date}</p>
                    <p className="text-sm leading-6">
                      {data.name}
                      <span className="pl-1 text-xxs before:content-['-']"> {data.vendor}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default About;
