'use client';
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useInView } from 'react-intersection-observer';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';

export default function Services() {
   const { setSectionActive } = useStoreSectionActive();
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   useEffect(() => {
      if (inView) {
         setSectionActive('Layanan');
      }
   }, [inView]);

   return (
      <div
         className='flex items-center justify-center scroll-mt-[250px]'
         id='layanan'
         ref={ref}
      >
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            <ServiceCard
               title='Paket Lepas Kunci'
               image='/images/key-pana.svg'
               description='Nikmati kebebasan berkendara tanpa survei! Bubat Rental hadir dengan layanan Rental Mobil Lepas Kunci, praktis dan efisien. Armada terawat, proses cepat, nilai terbaik!'
               url='https://wa.me/#'
               delay={0.2 * 0}
            />
            <ServiceCard
               title='Paket Wisata'
               image='/images/trip-bro.svg'
               description='Nikmati kebebasan berkendara tanpa survei! Bubat Rental hadir dengan layanan Rental Mobil Lepas Kunci, praktis dan efisien. Armada terawat, proses cepat, nilai terbaik!'
               url='https://wa.me/#'
               isBestSeller={true}
               delay={0.2 * 1}
            />
            <ServiceCard
               title='Paket Wedding Car'
               image='/images/wedding-rafiki.svg'
               description='Nikmati kebebasan berkendara tanpa survei! Bubat Rental hadir dengan layanan Rental Mobil Lepas Kunci, praktis dan efisien. Armada terawat, proses cepat, nilai terbaik!'
               url='https://wa.me/#'
               delay={0.2 * 2}
            />
         </div>
      </div>
   );
}
