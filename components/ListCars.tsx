'use client';
import { cars, selectionMenu } from '@/lib/data';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Car from './Car';

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ');
}

export default function ListCars() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Pilihan Menu');
      }
   }, [inView]);

   return (
      <motion.div
         ref={ref}
         id='pilihan-menu'
         initial={{ opacity: 0 }}
         animate={{ opacity: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         whileInView={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         viewport={{
            once: true,
         }}
         className='grid grid-cols-4 gap-5 scroll-mt-[250px] max-w-7xl mx-auto'
      >
         {cars.map((car, index) => (
            <Car
               key={index}
               title={car.title}
               price={car.price}
               imgUrl={car.imgUrl}
               delay={0.2 * index}
            />
         ))}
      </motion.div>
   );
}
