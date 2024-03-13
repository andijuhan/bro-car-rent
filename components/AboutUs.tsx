'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';

export default function AboutUs() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Tentang Kami');
      }
   }, [inView]);

   return (
      <div
         ref={ref}
         id='tentang-kami'
         className='bg-white p-7 flex mx-auto gap-10 items-center justify-between scroll-mt-[250px] max-w-7xl rounded-lg border'
      >
         <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className='md:w-[50%] flex flex-col items-center gap-5 text-lg text-right'
         >
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
               quisquam, corrupti tempora sint consectetur accusamus excepturi
               suscipit amet vitae, illo provident laborum minus cum ducimus
               illum vero sed accusantium omnis?
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
               corrupti architecto praesentium. Neque, nemo error. Laboriosam
               asperiores reprehenderit a nihil, neque, repellat, rem qui labore
               ab numquam quasi nam excepturi.
            </p>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
               corrupti architecto praesentium. Neque, nemo error. Laboriosam
               asperiores reprehenderit a nihil, neque, repellat, rem qui labore
               ab numquam quasi nam excepturi.
            </p>
         </motion.div>
         <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className='hidden md:block md:w-[50%]'
         >
            <Image
               src='/images/about-us.png'
               width={500}
               height={500}
               alt='About Us'
               className='w-full h-[500px] object-cover object-center rounded-lg'
            />
         </motion.div>
      </div>
   );
}
