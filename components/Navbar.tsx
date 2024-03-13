'use client';
import { useStoreSectionActive } from '@/hooks/useStoreSectionActive';
import { menus } from '@/lib/data';
import { CarFront } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
   const { activeSection } = useStoreSectionActive();
   const [scrollProgress, setScrollProgress] = useState('0');
   const progressBarRef = useRef<any>(null);

   useEffect(() => {
      const handleScroll = () => {
         const windowHeight = window.innerHeight;
         const fullHeight = document.body.clientHeight;
         const scrolled = window.scrollY;

         const scrollProgress = Math.round(
            (scrolled / (fullHeight - windowHeight)) * 100
         );
         setScrollProgress(`${scrollProgress}`);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      if (progressBarRef.current) {
         progressBarRef.current.style.width = `${scrollProgress}%`;
      }
   }, [scrollProgress]);

   return (
      <nav className='bg-zinc-50 fixed left-0 top-0 z-50 w-full pt-[20px] shadow-xl'>
         <div className='flex items-center justify-between mx-auto px-5 2xl:px-24'>
            <div className='text-xl text-rose-600 md:text-2xl font-bold'>
               <Link
                  href='/'
                  className='flex items-center justify-center gap-2'
               >
                  BroRental
                  <CarFront size={30} />
               </Link>
            </div>
            <div className='flex gap-10 items-center justify-center'>
               <ul className='hidden text-zinc-800 text-z lg:flex gap-6'>
                  {menus.map((menu, index) => (
                     <li
                        key={index}
                        className={`${
                           activeSection === menu.title
                              ? 'text-blue-600'
                              : 'hover:text-blue-600 transition-all duration-300 hover:underline underline-offset-8'
                        }`}
                     >
                        <Link href={menu.link}>{menu.title}</Link>
                     </li>
                  ))}
               </ul>

               <Link
                  href='https://wa.me/#'
                  className='items-center rounded-full px-6 py-2 bg-blue-500 border-2 border-blue-600 font-semibold text-white transition-all duration-300'
               >
                  Hubungi Kami
               </Link>
            </div>
         </div>
         <div
            ref={progressBarRef}
            className={`h-[5px] transition-all duration-200 mb-auto bg-rose-500 mt-[15px]`}
         />
      </nav>
   );
}
