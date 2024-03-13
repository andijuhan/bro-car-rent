'use client';
import { motion } from 'framer-motion';

interface WhyChooseUsCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
   delay: number;
}

export default function WhyChooseUsCard({
   icon,
   title,
   description,
   delay,
}: WhyChooseUsCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 0.5, delay }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className='flex flex-col px-5 md:px-0 gap-5 items-center justify-center text-stone-100 text-center max-w-xs'
      >
         {icon}
         <h3 className='text-2xl font-medium'>{title}</h3>
         <p className='text-lg max-w-xs'>{description}</p>
      </motion.div>
   );
}
