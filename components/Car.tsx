'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatPrice } from '@/lib/util';
import Link from 'next/link';

interface MenuCardProps {
   title: string;
   price: number;
   imgUrl: string;
   delay: number;
}

export default function Car({ title, imgUrl, price, delay }: MenuCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0, y: -50 }}
         transition={{ duration: 0.5, delay }}
         whileInView={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0 }}
         className='bg-white border rounded-xl flex flex-col items-center justify-start gap-4 pb-5 overflow-hidden transition-all duration-300'
      >
         <div className='w-full h-[200px] overflow-hidden border-b'>
            <Image
               src={imgUrl}
               width={200}
               height={200}
               alt={title}
               className='w-full h-[200px] hover:scale-105 transition-all duration-300 object-cover object-center'
            />
         </div>

         <h3 className='font-semibold text-lg text-center'>{title}</h3>
         <p className='text-sm text-black/80'>{formatPrice(price)} / Hari</p>
         <Link
            href={'https://wa.me/628121123123'}
            className='py-2 px-4 font-semibold bg-blue-500 border-2 border-blue-600 rounded-full text-white'
         >
            Pesan
         </Link>
      </motion.div>
   );
}
