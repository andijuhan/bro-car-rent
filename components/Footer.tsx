export default function Footer() {
   return (
      <div className='bg-stone-950'>
         <div className='pt-10 mx-auto text-lg text-center bg-black'>
            <div className='items-center justify-center'>
               <div>
                  <h3 className='text-xl lg:text-3xl text-white font-bold mb-5'>
                     DinaCatering
                  </h3>
                  <p>Jl. Pemuda No. 1, Kuningan Jawa Barat</p>
                  <p>Whatsapp : +6281324569987</p>
                  <p>Instagram : @dinacatering</p>
               </div>
            </div>
            <p className='font-light mt-10 border-t-2 border-stone-700 p-5'>
               &copy;Copyright dinacaterering.id {new Date().getFullYear()}
            </p>
         </div>
      </div>
   );
}
