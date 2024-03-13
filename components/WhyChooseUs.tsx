import WhyChooseUsCard from './WhyChooseUsCard';
import { ScrollText, Wallet, HeartPulse, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
   return (
      <div className='flex items-center justify-center px-10 py-[100px] bg-stone-950'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
            <WhyChooseUsCard
               title='Juru Masak Berpengalaman'
               icon={<ShieldCheck size={90} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
               delay={0.2 * 0}
            />
            <WhyChooseUsCard
               title='Banyak Pilihan Menu'
               icon={<ScrollText size={90} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
               delay={0.2 * 1}
            />
            <WhyChooseUsCard
               title='Harga Bersaing'
               icon={<Wallet size={90} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
               delay={0.2 * 2}
            />
            <WhyChooseUsCard
               title='Sehat & Higienis'
               icon={<HeartPulse size={90} />}
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
               delay={0.2 * 3}
            />
         </div>
      </div>
   );
}
