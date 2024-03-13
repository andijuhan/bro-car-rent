import AboutUs from '@/components/AboutUs';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';
import ListCars from '@/components/ListCars';
import Services from '@/components/Services';

export default function Home() {
   return (
      <main className=''>
         <Hero />
         {/* <SocialProof /> */}
         <Heading
            text='Layanan Kami'
            description='loremLorem ipsum dolor sit amet consectetur adipisicing elit.'
         />
         <Services />
         <Heading
            text='List Mobil Rental'
            description='loremLorem ipsum dolor sit amet consectetur adipisicing elit.'
         />
         <ListCars />
         <Heading text='Tentang Kami' />
         <AboutUs />
         <Heading text='Mengapa Memilih Kami' />
      </main>
   );
}
