import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CateCard({category}) {
  return (
    <Link href={'/'}>
      <div className=' mx-2'>
        <div className=' relative rounded-xl mb-8'>
          <div className=' absolute top-0 left-0 w-full h-full rounded-xl z-10' />
          <Image src={category?.image} width={263} height={264} alt='category_image' className='w-full' />
        </div>
        <h1 className=' text-xl font-bold'>{category?.name}</h1>
      </div>
    </Link>
  );
}

export default CateCard