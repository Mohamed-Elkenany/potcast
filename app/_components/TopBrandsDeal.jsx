import Image from 'next/image'
import React from 'react'

function TopBrandsDeal() {
  return (
      <div className='max-w-screen-2xl mx-auto bg-colorGrayOne rounded-2xl mb-[120px] py-[30px] flex flex-col items-center justify-center'>
          <h1 className='font-extrabold tracking-wide text-[50px] text-white'>Top Brands Deal</h1>
          <h4 className='text-white text-[22px] font-medium my-[30px]'>Up To <span className='text-[#FBD103]'>60%</span> off on brands</h4>
          <div className='w-full'>
              <div className='flex items-center justify-center gap-8 w-full max-h-full py-8 px-32'>
                  <div className='flex-1 px-4 py-3 bg-white flex items-center justify-center rounded-lg'>
                      <Image src={'/TopBrandsDeal/image1.png'} width={150} height={55} alt='Top Brands Deal' className='w-full object-cover object-center'/>
                  </div>
                  <div className='flex-1 px-4 py-3 bg-white flex items-center justify-center rounded-lg'>
                      <Image src={'/TopBrandsDeal/image2.png'} width={150} height={55} alt='Top Brands Deal' className='w-full object-cover object-center'/>
                  </div>
                  <div className='flex-1 px-4 py-3 bg-white flex items-center justify-center rounded-lg'>
                      <Image src={'/TopBrandsDeal/image3.jpg'} width={150} height={55} alt='Top Brands Deal' className='w-full object-cover object-center'/>
                  </div>
                  <div className='flex-1 px-4 py-3 bg-white flex items-center justify-center rounded-lg'>
                      <Image src={'/TopBrandsDeal/image4.png'} width={150} height={55} alt='Top Brands Deal' className='w-full object-cover object-center'/>
                  </div>
                  <div className='flex-1 px-4 py-5 bg-white flex items-center justify-center rounded-lg'>
                      <Image src={'/TopBrandsDeal/image5.png'} width={150} height={55} alt='Top Brands Deal' className='w-full object-cover object-center'/>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TopBrandsDeal