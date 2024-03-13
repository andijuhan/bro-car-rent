'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CtaBottom() {
   return (
      <div className='relative w-full mt-[60px] md:mt-[100px]'>
         <Image
            src='/images/cta1.jpg'
            width={2048}
            height={592}
            alt='CTA'
            className='h-[400px] brightness-50 object-cover object-center'
         />
         <div className='absolute top-0 left-0 w-full h-[400px] z-20 flex items-center justify-center'>
            <div className='max-w-6xl flex flex-col items-center justify-between gap-10 text-center px-7 lg:px-0'>
               <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  viewport={{
                     once: true,
                  }}
                  className='text-2xl md:text-4xl lg:text-5xl font-bold text-stone-50 md:leading-snug lg:leading-snug drop-shadow-3xl'
               >
                  Buat Acara Anda Lebih Berkesan dengan Menu Khusus dari
                  Catering Kami
               </motion.h2>
               <Link
                  href='https://wa.me/#'
                  target='_blank'
                  className='py-4 px-6 bg-stone-100 hover:scale-105 transition-all duration-300 rounded-full text-stone-900 text-xl md:text-2xl lg:text-3xl font-medium'
               >
                  Pesan Sekarang
               </Link>
            </div>
         </div>
      </div>
   );
}
