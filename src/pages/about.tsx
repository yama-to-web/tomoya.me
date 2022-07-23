import type { NextPage, GetServerSideProps } from 'next';
import Image from 'next/image';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../components/about/Section';
import Main from '../components/layouts/Main';
import { products, certification } from '../constants/profile-data';
import { loadInstaPosts } from '../lib/fetch-posts';
import type { InstaImg } from '../types/index';

SwiperCore.use([Pagination, Navigation]);

type Props = {
  children?: React.ReactNode;
  images?: Array<InstaImg>;
};

const About: NextPage = (props: Props) => {
  return (
    <div>
      <Main title="ABOUT" description="Webエンジニア 藤原智弥の自己紹介ページです。">
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
        <Section title={products.name}>
          <ul className="pl-1">
            {products.items.map((data) => {
              return (
                <li
                  className="py-2 border-b-2 border-b-gray-100 md:flex md:flex-row"
                  key={data.name}
                >
                  <div className="mr-5">
                    <Image
                      src={`/products/${data.thumnail}`}
                      width={300}
                      height={200}
                      layout="fixed"
                      alt={data.name}
                    ></Image>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{data.category}</p>
                    <p className="mb-4 text-3xl leading-6">{data.name}</p>
                    <p className="p-2 mb-4 ml-1 text-xs whitespace-pre-wrap bg-gray-50 border-l border-gray-300">
                      {data.explanation}
                    </p>
                    <ul className="flex flex-wrap gap-1 text-xxs font-semibold text-slate-500">
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
                  </div>
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
          <div className="m-auto w-80 md:w-10/12">
            {/* SP カルーセル */}
            <div className="relative">
              <Swiper
                className="absolute left-1/2 w-screen -translate-x-1/2 md:hidden"
                slidesPerView={1.3}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: `swiper-pagination-bullet-active`,
                }}
                loop={true}
                centeredSlides={true}
                effect="fade"
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                    navigation: true,
                  },
                }}
              >
                {props.images?.map((data, index) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <a href={data.permalink} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={data.media_url}
                          width={60}
                          height={50}
                          layout="responsive"
                          alt="instagram image"
                        />
                      </a>
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
                    <a
                      href={data.permalink}
                      key={data.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={data.media_url}
                        width={300}
                        height={250}
                        layout="responsive"
                        alt="instagram image"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="my-10 w-full text-sm tracking-widest text-center text-gray-500 hover:text-gray-400">
              <a
                className="border-b border-b-gray-600"
                href="https://www.instagram.com/yama_to_web/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SEE MORE
              </a>
            </p>
          </div>
        </Section>
      </Main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const images = await loadInstaPosts();

  return {
    props: { images },
  };
};
export default About;
