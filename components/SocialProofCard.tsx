'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { CarFront } from 'lucide-react';

interface SocialProofCardProps {
   count: number;
   description: string;
   suffix?: string;
   prefix?: string;
}

export default function SocialProofCard({
   count,
   description,
   prefix,
   suffix = '+',
}: SocialProofCardProps) {
   const { ref, inView } = useInView({
      threshold: 0.5,
   });

   return (
      <div
         ref={ref}
         className='flex flex-col gap-5 items-center justify-start text-center'
      >
         {inView ? (
            <CountUp
               start={0}
               end={count}
               duration={2.75}
               decimal=','
               prefix={prefix}
               suffix={suffix}
               className='text-3xl font-bold text-white drop-shadow-xl'
            />
         ) : null}

         <p className='text-zinc-50 font-light'>{description}</p>
      </div>
   );
}
