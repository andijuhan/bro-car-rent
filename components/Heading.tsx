'use client';
import { motion } from 'framer-motion';
interface HeadingProps {
   text: string;
   description?: string;
}

export default function Heading({ text, description }: HeadingProps) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className='mx-auto text-center max-w-xl flex items-center justify-center gap-5 flex-col my-[60px] md:my-[70px]'
      >
         <h2 className='text-lg tracking-tight drop-shadow-xl capitalize md:text-4xl text-zinc-900 font-semibold'>
            {text}
         </h2>
         {description ? <p className=''>{description}</p> : null}
      </motion.div>
   );
}
