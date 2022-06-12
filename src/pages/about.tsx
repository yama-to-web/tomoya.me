import { readdirSync } from 'fs';
import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../components/about/section';
import CommonMeta from '../components/common_meta';
import PageLayout from '../components/page_layout';
import { products, certification } from '../constants/profile_data';

SwiperCore.use([Pagination, Navigation]);

type Props = {
  children?: React.ReactNode;
  images?: Array<string>;
};

const About: NextPage = (props: Props) => {
  const instaImgs = props.images;

  return (
    <div>
      <CommonMeta
        pageTitle="ABOUT"
        pageDescription="Webエンジニア 藤原智弥の自己紹介ページです。"
      />
      <PageLayout title="ABOUT">
        <Section title="INTRODUCTION">
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
        <Section title="WORKS">\Comming Soon...</Section>
        <Section title={products.name}>
          <ul className="pl-1">
            {products.items.map((data) => {
              return (
                <li className="py-2 border-b-2 border-b-gray-100" key={data.name}>
                  <p className="text-xxs text-gray-500">{data.category}</p>
                  <p className="mb-3 text-xl leading-4">
                    {data.name}
                    <span className="before:px-2 pl-1 text-xs before:content-['-']">
                      {data.explanation}
                    </span>
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
        </Section>
        <Section title={certification.name}>
          <ul className="pl-1">
            {certification.items.map((data) => {
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
        </Section>
        <Section>
          <h4 className="mb-10 w-full text-2xl text-center">Instagram</h4>
          <div className="m-auto w-80 lg:w-full">
            <Swiper
              slidesPerView={1}
              // pagination={{
              //   clickable: true,
              // }}
              loop={false}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  navigation: true,
                },
              }}
            >
              {instaImgs?.map((src, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="m-auto w-80">
                      <Image
                        src={`/instagram/${index}.jpg`}
                        width={60}
                        height={40}
                        layout="responsive"
                        alt="test_image"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = readdirSync('./public/instagram');

  return {
    props: { images },
  };
};

export default About;
