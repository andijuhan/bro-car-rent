import Image from 'next/image';

interface PortfolioCardProps {
   title: string;
   imgUrl: string;
}

export default function PortfolioCard({ title, imgUrl }: PortfolioCardProps) {
   return (
      <div className='bg-white text-stone-900 rounded-lg overflow-hidden text-center w-full'>
         <Image
            src={imgUrl}
            width={300}
            height={600}
            alt={title}
            className='w-full h-[300px] object-cover object-center'
         />
         <h3 className='text-lg font-medium p-2'>{title}</h3>
      </div>
   );
}
