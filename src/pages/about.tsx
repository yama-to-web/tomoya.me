import type { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from 'components/about/Section';
import Main from 'components/layouts/Main';
import { products, certification } from 'constants/profile-data';
import { loadInstaPosts } from 'lib/fetch-posts';
import type { InstaImg } from 'types/index';

SwiperCore.use([Pagination, Navigation]);

type Props = {
  children?: React.ReactNode;
  images?: Array<InstaImg>;
};

const About: NextPage = (props: Props) => {
  return (
    <Main title="ABOUT" description="Webエンジニア 藤原智弥の自己紹介ページです。">
      {/*
       * 自己紹介
       */}
      <Section title="INTRODUCTION">
        <div className="flex flex-col items-start justify-between gap-y-8 sm:flex-row">
          <div className="w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(50%_-_5rem)]">
            <Image src="/profile.png" width="592" height="592" alt="tomoya.me" />
          </div>
          <div className="w-full sm:w-[calc(50%_-_1rem)] sm:min-w-[calc(50%_-_1rem)] lg:py-10">
            <div className="mb-10">
              <p className="mb-1 text-3xl font-bold tracking-widest">TOMOYA FUJIWARA</p>
              <p className="text-sm font-semibold italic tracking-wider text-gray-500">
                WEB ENGINEER
              </p>
            </div>
            <div className="mt-4 text-xs leading-loose tracking-wider">
              三重県出身 95年生まれ 大阪府在住のWebエンジニア
              <br />
              学生時代は陸上競技に10年間打ち込み、卒業とともに未経験でIT企業に就職
              <br />
              2019年〜現在までフロントエンジニアとして商品比較サイトの開発に携わる
              <br />
              フルスタックエンジニアを目指し日々邁進中
              <br />
              趣味はアウトドア、週末は野山に飛び出します
              <br />
              新しくてワクワクするようなプロダクトに興味があります
            </div>
          </div>
        </div>
      </Section>
      {/*
       * プロダクト
       */}
      <Section title={products.name}>
        <ul className="pl-1">
          {products.items.map((data) => {
            return (
              <li className="border-b-2 border-b-gray-100 py-2 md:flex md:flex-row" key={data.name}>
                <div className="mr-5">
                  <Image
                    src={`/products/${data.thumnail}`}
                    width={300}
                    height={200}
                    object-position="fixed"
                    alt={data.name}
                  ></Image>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{data.category}</p>
                  <p className="mb-4 text-3xl leading-6">{data.name}</p>
                  <p className="mb-4 ml-1 whitespace-pre-wrap border-l border-gray-300 bg-gray-50 p-2 text-xs">
                    {data.explanation}
                  </p>
                  <ul className="flex flex-wrap gap-1 text-xxs font-semibold text-slate-500">
                    {data.tags.map((tag) => {
                      return (
                        <li
                          className="rounded-lg bg-slate-200 py-0.5 px-1 before:content-['#']"
                          key={tag}
                        >
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
      {/*
       * 資格
       */}
      <Section title={certification.name}>
        <ul className="pl-1">
          {certification.items.map((data) => {
            return (
              <li className="border-b-2 border-b-gray-100 py-2" key={data.name}>
                <p className="text-sm text-gray-500">{data.date}</p>
                <p className="text-base leading-6">
                  {data.name}
                  <span className="pl-1 text-xs before:content-['-']"> {data.vendor}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </Section>
      {/*
       * Instagram
       */}
      <Section>
        <h4 className="mb-10 w-full text-center text-2xl">Instagram</h4>
        <div className="m-auto w-full">
          {/* SP カルーセル */}
          <div className="w-screen -mx-5">
            <Swiper
              className="w-full md:hidden"
              slidesPerView={1.3}
              loop={true}
              centeredSlides={true}
              effect="fade"
            >
              {props.images?.map((data, index) => {
                return (
                  <SwiperSlide key={data.id}>
                    <Link
                      className="inline-block h-60 sm:h-80"
                      href={data.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Image
                        src={data.media_url}
                        fill={true}
                        object-fit="contain"
                        alt="instagram image"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* PC */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-1">
              {props.images?.map((data) => {
                return (
                  <Link
                    className="relative h-60 overflow-hidden"
                    href={data.permalink}
                    key={data.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <Image
                      src={data.media_url}
                      fill={true}
                      object-fit="cover"
                      alt="instagram image"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <Link
            className="border-b border-b-gray-600"
            href="https://www.instagram.com/yama_to_web/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <p className="my-10 w-full text-center text-sm tracking-widest text-gray-500 hover:text-gray-400">
              SEE MORE
            </p>
          </Link>
        </div>
      </Section>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const images = await loadInstaPosts();

  return {
    props: { images },
  };
};
export default About;
