'use client';
import { testimonial } from '@/lib/data';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/bundle';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function Testimonial() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Testimoni');
      }
   }, [inView]);

   return (
      <motion.div
         ref={ref}
         id='testimoni'
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         viewport={{
            once: true,
         }}
         className='flex items-center scroll-mt-[250px] justify-center mx-auto px-5 xl:px-10 2xl:px-0 max-w-7xl'
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
            {testimonial.map((item, index) => (
               <SwiperSlide
                  className='px-4 md:px-7 lg:px-0 w-[300px]'
                  key={index}
               >
                  <Image
                     src={item.imgUrl}
                     alt='testimoni'
                     width={300}
                     height={600}
                     className='shadow-xl w-full rounded-lg'
                  />
               </SwiperSlide>
            ))}
         </Swiper>
      </motion.div>
   );
}
