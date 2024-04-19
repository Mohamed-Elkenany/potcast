import React from 'react'
import TitleComponents from './TitleComponents'
import ProductCard from './ProductCard'

function InTheLimelight() {
    const product = [
        {
            image: '/InTheLimelight/samplePro1.png',
            name: "Black Sweatshirt with",
            brandName: "Jhanvi’s  Brand",
            price:"$123.00"
        },
        {
            image: '/InTheLimelight/samplePro2.png',
            name: "Black Sweatshirt with",
            brandName: "Jhanvi’s  Brand",
            price:"$123.00"
        },
        {
            image: '/InTheLimelight/samplePro3.png',
            name: "Black Sweatshirt with",
            brandName: "Jhanvi’s  Brand",
            price:"$123.00"
        },
        {
            image: '/InTheLimelight/samplePro4.png',
            name: "Black Sweatshirt with",
            brandName: "Jhanvi’s  Brand",
            price:"$123.00"
        },
    ]
  return (
    <div className='mx-auto max-w-screen-2xl mb-[120px]'>
          <TitleComponents title={'In The Limelight'} />
          <div className=' flex items-center gap-8'>
              {
                  product.map((product, index) => (
                      <ProductCard key={index} product={product} />
                  ))
              }
          </div>
    </div>
  )
}

export default InTheLimelight