import { HatGraduation } from '@styled-icons/fluentui-system-regular';
import { Googlecloud } from '@styled-icons/simple-icons';
import { MicroCMSImage } from 'microcms-js-sdk';
import moment from 'moment';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInstagram } from '../hooks/useInstagram';
import IconTags from 'components/IconTags';
import Main from 'components/Main';
import Section from 'components/Section';
import Career from 'components/about/Career';
import { accounts } from 'constants/profile-data';
import { microcms } from 'lib/client';

type Work = {
  period: [{ from_date: string; to_date: string }];
  title: string;
  text: string;
  skills: string;
};

type Props = {
  profile: {
    introduction: {
      title: string;
      name: string;
      content: string;
      image: MicroCMSImage;
    };
    career: {
      title: string;
      main: Array<Work>;
      sub: Array<Work>;
    };
    certification: {
      title: string;
      items: [
        {
          name: string;
          date: string;
          vendor: string;
        },
      ];
    };
    products: {
      title: string;
      items: [
        {
          name: string;
          category: string;
          text: string;
          tags: string[];
          image: MicroCMSImage;
        },
      ];
    };
  };
};

const About: NextPage<Props> = ({ profile }: Props) => {
  // Insta画像
  const { data: insta_images } = useInstagram();
  return (
    <Main title="ABOUT" description="Webエンジニア 藤原智弥の自己紹介ページです。">
      {/*
       * 自己紹介
       */}
      <Section title={profile.introduction.title}>
        <div className="flex flex-col items-start justify-between gap-y-8 sm:flex-row">
          <div className="w-full sm:w-[calc(50%_-_1rem)] md:w-[calc(50%_-_5rem)] lg:w-[calc(50%_-_10rem)]">
            <Image
              src={profile.introduction.image.url}
              width="592"
              height="592"
              alt="Tomoya FujiwaraのProfile画像"
            />
          </div>
          <div className="w-full sm:w-[calc(50%_-_1rem)] sm:min-w-[calc(50%_-_1rem)] lg:py-10">
            <div className="mb-10">
              <p className="mb-1 text-3xl font-bold tracking-widest">{profile.introduction.name}</p>
            </div>
            <div className="mt-4 whitespace-pre-wrap text-sm leading-loose tracking-wider ">
              {profile.introduction.content}
            </div>
          </div>
        </div>
      </Section>
      {/*
       * キャリア
       */}
      <Section title={profile.career.title}>
        <Career {...profile.career} />
      </Section>
      {/*
       * 資格
       */}
      <Section title={profile.certification.title}>
        <ul className="pl-1">
          {profile.certification.items.map((item) => {
            return (
              <li className="border-b-2 border-b-gray-100 py-2" key={item.name}>
                <p className="text-sm text-gray-500">{moment(item.date).format('YYYY.MM.DD')}</p>
                <p className="text-lg leading-6">
                  {item.name}
                  <span className="pl-1 text-xs before:content-['-']"> {item.vendor}</span>
                  {item.vendor == 'GCP' && (
                    <Googlecloud color="#4285F4" className="ml-1" size={20} />
                  )}
                  {item.vendor == 'IPA' && (
                    <HatGraduation color="#e7370e" className="ml-1" size={20} />
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>
      {/*
       * プロダクト
       */}
      <Section title={profile.products.title}>
        <ul>
          {profile.products.items.map((data) => {
            return (
              <li
                className="flex flex-col gap-5 border-b-2 border-b-gray-100 pb-5 md:flex-row md:items-center"
                key={data.name}
              >
                <div className="sm:h-80">
                  <Image
                    src={data.image.url}
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
                    {data.text}
                  </p>
                  <IconTags tags={data.tags} />
                </div>
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
              {insta_images?.map((data) => {
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
              {insta_images?.map((data) => {
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
            href={accounts.find((item) => item.id === 'instagram')?.url as string}
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
  const profile = await microcms.get({
    endpoint: 'profile',
  });

  return {
    props: { profile },
  };
};
export default About;
