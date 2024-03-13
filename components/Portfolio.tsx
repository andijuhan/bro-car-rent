'use client';
import { portfolio } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/bundle';
import PortfolioCard from './PortfolioCard';
import { useEffect } from 'react';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { useInView } from 'react-intersection-observer';

export default function Portfolio() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Portfolio');
      }
   }, [inView]);

   return (
      <motion.div
         ref={ref}
         id='portfolio'
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         viewport={{
            once: true,
         }}
         className='flex items-center justify-center mx-auto px-5 lg:px-10 2xl:lg:px-0 max-w-7xl scroll-mt-[250px]'
      >
         <Swiper
            modules={[Navigation, Autoplay, A11y]}
            navigation
            autoplay
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
            }}
            className=''
         >
            {portfolio.map((item, index) => (
               <SwiperSlide
                  className='px-4 md:px-7 lg:px-0 w-[300px]'
                  key={index}
               >
                  <PortfolioCard title={item.title} imgUrl={item.imgUrl} />
               </SwiperSlide>
            ))}
         </Swiper>
      </motion.div>
   );
}
