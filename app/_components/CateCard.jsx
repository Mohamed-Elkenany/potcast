import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from "react-icons/go";

function CateCard({category,showIconAndExplor}) {
  return (
    <Link href={'/'}>
      <div className=' mx-2'>
        <div className=' relative rounded-xl mb-8'>
          <div className=' absolute top-0 left-0 w-full h-full rounded-xl z-10' /> 
          <Image src={category?.image} width={274} height={394} alt='category_image' className='w-full object-cover object-center' />
        </div>
        {
          showIconAndExplor === true ?
            <div className=''>
              <div className=' flex items-center justify-between pr-4'>
                <h1 className=' text-xl font-bold'>{category?.name}</h1>
                <button className='w-fit text-colorGrayTwo'>
                  <GoArrowRight className='text-xl' />
                </button>
              </div>
              <span className='font-medium text-[13px] text-colorGrayTwo'>Explore Now!</span>
            </div>
            :
            <h1 className=' text-xl font-bold'>{category?.name}</h1>
        }
      </div>
    </Link>
  );
}

export default CateCard