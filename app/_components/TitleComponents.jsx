import React from 'react'

function TitleComponents({title}) {
  return (
    <div className='relative mb-[70px]'>
        <div className='absolute left-0 top-1/2 -translate-y-1/2  h-2/3  w-[7px] bg-colorPink rounded-full' />
        <h3 className="relative font-bold pl-12">
          {title}
        </h3>
      </div>
  )
}

export default TitleComponents