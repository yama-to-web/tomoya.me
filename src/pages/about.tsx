import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Main from 'components/Main';
import Section from 'components/Section';
import Tags from 'components/Tags';
import { introduction, certification, products } from 'constants/profile-data';
import { loadInstaPosts } from 'lib/fetch-posts';
import type { InstaImg } from 'types/index';

SwiperCore.use([Pagination, Navigation]);

type Props = {
  images?: Array<InstaImg>;
};

const About: NextPage<Props> = (props: Props) => {
  return (
    <Main title="ABOUT" description="Webエンジニア 藤原智弥の自己紹介ページです。">
      {/*
       * 自己紹介
       */}
      <Section title={introduction.title}>
        <div className="flex flex-col items-start justify-between gap-y-8 sm:flex-row">
          <div className="w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(50%_-_5rem)] lg:w-[calc(50%_-_10rem)]">
            <Image src="/profile.png" width="592" height="592" alt="Tomoya FujiwaraのProfile画像" />
          </div>
          <div className="w-full sm:w-[calc(50%_-_1rem)] sm:min-w-[calc(50%_-_1rem)] lg:py-10">
            <div className="mb-10">
              <p className="mb-1 text-3xl font-bold tracking-widest">{introduction.name}</p>
            </div>
            <div className="mt-4 whitespace-pre-wrap text-sm leading-loose tracking-wider ">
              {introduction.text}
            </div>
            {/* <div className="mt-4 text-xs leading-loose tracking-wider">
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
            </div> */}
          </div>
        </div>
      </Section>
      {/*
       * プロダクト
       */}
      <Section title={products.title}>
        <ul>
          {products.items.map((data) => {
            return (
              <li
                className="flex flex-col gap-5 border-b-2 border-b-gray-100 md:flex-row md:items-center"
                key={data.name}
              >
                <div className="h-80">
                  <Image
                    src={`/products/${data.thumnail}`}
                    width={300}
                    height={200}
                    className="h-full w-full object-contain"
                    alt={data.name}
                  ></Image>
                </div>
                <div>
                  <p className="py-1 text-xs text-gray-500">{data.category}</p>
                  <p className="mb-4 text-3xl leading-6">{data.name}</p>
                  <p className="mb-4 ml-1 whitespace-pre-wrap border-l border-gray-300 bg-gray-50 p-2 text-sm">
                    {data.explanation}
                  </p>
                  <Tags tags={data.tags} border />
                </div>
              </li>
            );
          })}
        </ul>
      </Section>
      {/*
       * 資格
       */}
      <Section title={certification.title}>
        <ul className="pl-1">
          {certification.items.map((data) => {
            return (
              <li className="border-b-2 border-b-gray-100 py-2" key={data.name}>
                <p className="text-sm text-gray-500">{data.date}</p>

                <p className="text-base leading-6">
                  {data.name}
                  <span className="pl-1 text-xs before:content-['-']"> {data.vendor}</span>
                  {data.vendor == 'Google Cloud Certified' && (
                    <FontAwesomeIcon color="#3f7de7" className="ml-1" icon={faGoogle as IconProp} />
                  )}
                  {data.vendor == '情報処理推進機構(IPA)' && (
                    <FontAwesomeIcon
                      color="#e7370e"
                      className="ml-1"
                      icon={faGraduationCap as IconProp}
                    />
                  )}
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
          <div className="-mx-5 w-screen">
            <Swiper
              className="w-full md:hidden"
              slidesPerView={1.3}
              loop
              centeredSlides
              effect="fade"
            >
              {props.images?.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link
                      className="inline-block h-60 sm:h-80"
                      href={data.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      <Image
                        src={data.media_url}
                        fill
                        className="object-cover"
                        alt="instagram image"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* PC */}
          <div className="m-auto hidden w-full md:block">
            <div className="m-auto grid max-w-3xl grid-cols-3 gap-1">
              {props.images?.map((data) => {
                return (
                  <Link
                    className="relative h-56 overflow-hidden"
                    href={data.permalink}
                    key={data.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                  >
                    <Image src={data.media_url} fill object-fit="cover" alt="instagram image" />
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
            <p className="my-10 w-full text-center text-sm tracking-widest text-gray-500 underline hover:text-gray-400">
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
    revalidate: 60 * 60 * 24, //24hours
  };
};
export default About;
