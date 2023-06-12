import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CommonMeta from 'components/CommonMeta';
import Nav from 'components/Nav';
import Sns from 'components/Sns';
import { useInstagram } from 'hooks/useInstagram';
import 'swiper/css/effect-fade';

const Home: NextPage = () => {
  const { data: insta_images } = useInstagram();
  return (
    <>
      <CommonMeta pageTitle="Home" pageDescription="" />
      <motion.main
        className="relative flex flex-col items-center justify-center"
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 2,
            },
          },
        }}
      >
        <Swiper
          className="w-full"
          slidesPerView={1}
          loop
          allowTouchMove={false}
          speed={9000}
          centeredSlides
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
        >
          {insta_images?.map((val) => {
            return (
              <SwiperSlide
                key={val.id}
                className="after:bg-mask z-0 min-h-screen w-screen bg-fixed after:bg-cover"
              >
                <Image src={val.media_url} fill alt="instagram image" className="object-cover" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute flex flex-col items-center justify-center p-5">
          <div className="z-50">
            <motion.div
              className="my-16 mx-auto"
              initial={{
                opacity: 0,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1.2,
                },
              }}
            >
              <Image src="/title.png" width="600" height="120" alt="tomoya.me" />
            </motion.div>
            <motion.div
              className="flex flex-col items-start justify-center gap-5 text-white lg:my-8 lg:flex-row lg:items-center lg:justify-between"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.8,
                },
              }}
            >
              <Nav />
              <Sns />
            </motion.div>
            <p className="mt-3 text-xs text-white">
              This background image is grabbed from my latest instagram post automatically.
            </p>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Home;
