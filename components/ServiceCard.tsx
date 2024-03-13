'use client';
import { Check, MessageCircleMore, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
   title: string;
   image: string;
   description: string;
   url: string;
   isBestSeller?: boolean;
   delay: number;
}

export default function ServiceCard({
   title,
   image,
   description,
   url,
   isBestSeller,
   delay,
}: ServiceCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 0.5, delay }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className='relative bg-white rounded-xl overflow-hidden group border flex flex-col items-center justify-center max-w-[250px] 2xl:max-w-sm transition-all duration-300 p-5'
      >
         <div className='h-[200px] w-[200px] rounded-full overflow-hidden'>
            <Image
               src={image}
               width={400}
               height={400}
               alt={title}
               className='h-[200px] w-[200px] object-cover object-center shadow-lg group-hover:scale-110 transition-all duration-300'
            />
         </div>
         <div className='flex flex-col items-center justify-center gap-6 p-5 text-center'>
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='transition-all duration-300 text-black/60'>
               {description}
            </p>
            <Link
               href={url}
               target='_blank'
               className='flex gap-2 w-fit bg-blue-500 border-2 border-blue-600 group-hover:scale-105 transition-all duration-300 items-center justify-center py-2 px-10 text-white rounded-full font-semibold'
            >
               Pesan
               <Check size={20} />
            </Link>
         </div>
      </motion.div>
   );
}
