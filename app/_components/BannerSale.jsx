import Image from 'next/image'
import React from 'react'

function BannerSale() {
  return (
    <div className=' max-w-screen-2xl mx-auto my-24 flex items-center justify-between gap-8'>
      <div className='relative flex-1 rounded-2xl overflow-hidden'>
        <div className='absolute pl-12 py-16 top-0 left-0 w-full h-full text-white font-extrabold flex flex-col items-start justify-evenly'>
          <h6 className=''>Beyoung Presents</h6>
          <div>
            <h1>High Coziness</h1>
            <p className='font-medium mt-2 text-colorPink'>UPTO 50% OFF</p>
          </div>
          <h5 className='border-b border-white font-bold'>Explore Items</h5>
        </div>
        <Image src={`/heroBanner/bannerSale1.png`} width={605} height={356} className='w-full' />
      </div>
      <div className='relative flex-1 rounded-2xl overflow-hidden'>
        <div className='absolute pl-12 py-16 top-0 left-0 w-full h-full text-white font-extrabold flex flex-col items-start justify-evenly'>
          <h6 className=''>Low Price</h6>
          <div>
            <h1>Breezy Summer <span className=' line-clamp-2'>Style</span></h1>
            <p className='font-medium mt-2'>UPTO 50% OFF</p>
          </div>
          <h5 className='pb-1 border-b border-white font-bold'>Explore Items</h5>
        </div>
        <Image src={`/heroBanner/bannerSale2.png`} width={605} height={356} className='w-full' />
      </div>
    </div>
  );
}

export default BannerSale