'use client';
import { motion } from 'framer-motion';
import SocialProofCard from './SocialProofCard';

export default function SocialProof() {
   return (
      <div className=''>
         <motion.div
            id='portfolio'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{
               once: true,
            }}
            className='grid grid-cols-4 gap-10 mx-auto px-5 py-7 lg:px-10 2xl:lg:px-0 max-w-7xl'
         >
            <SocialProofCard count={50} description='Total armada' />
            <SocialProofCard count={500} description='Total client' />
            <SocialProofCard count={7} description='Tahun Pengalaman' />
            <SocialProofCard count={4} description='Google Review' />
         </motion.div>
      </div>
   );
}
