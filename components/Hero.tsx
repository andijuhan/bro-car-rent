'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { slideImages } from '@/lib/data';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import SocialProof from './SocialProof';

export default function Hero() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Hero');
      }
   }, [inView]);

   return (
      <div
         ref={ref}
         className='relative w-full h-[400px] md:h-screen overflow-hidden mt-[60px] md:mt-[70px]'
      >
         <div className='absolute top-0 right-0 z-20 bg-blue-950 bg-opacity-80 w-full h-screen' />
         <Swiper
            modules={[Autoplay, A11y, EffectFade]}
            autoplay
            slidesPerView={1}
            spaceBetween={0}
            effect='fade'
            className=''
         >
            {slideImages.map((item, index) => (
               <SwiperSlide className='px-4 md:px-7 lg:px-0 w-full' key={index}>
                  <Image
                     src={item}
                     alt='testimoni'
                     width={1280}
                     height={600}
                     className='w-full h-screen object-cover brightness-50'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-40 flex flex-col gap-10 items-center justify-center'>
            <motion.h2
               initial={{ opacity: 0, x: -500 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className='text-4xl md:text-6xl font-bold capitalize drop-shadow-2xl text-center text-zinc-50 pt-5 pb-10 px-20'
            >
               Perjalanan jadi menyenangkan dengan{' '}
               <span className='text-rose-500'>mobil istimewa</span> kami!
            </motion.h2>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 1 }}
               className='flex items-center justify-center text-white gap-5'
            >
               <Link
                  href='#'
                  className='bg-blue-500 border-blue-600 border-2 py-2 px-6 font-medium text-2xl rounded-full text-zinc-50'
               >
                  Booking Online
               </Link>
            </motion.div>
            <SocialProof />
         </div>
      </div>
   );
}
