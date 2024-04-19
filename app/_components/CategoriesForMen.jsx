import React from 'react'
import TitleComponents from './TitleComponents'
import CateCard from './CateCard'

function CategoriesForMen() {
  const categoriesMen = [
    {
      image: "/cateForMen/cateMen1.png",
      name:"Shirts"
    },
    {
      image: "/cateForMen/cateMen2.png",
      name:"Printed T-Shirts"
    },
    {
      image: "/cateForMen/cateMen3.png",
      name:"Plain T-Shirt"
    },
    {
      image: "/cateForMen/cateMen4.png",
      name:"Polo T-Shirt"
    },
    {
      image: "/cateForMen/cateMen5.png",
      name:"Hoodies & Sweetshirt"
    },
    {
      image: "/cateForMen/cateMen6.png",
      name:"Jeans"
    },
    {
      image: "/cateForMen/cateMen7.png",
      name:"Activewear"
    },
    {
      image: "/cateForMen/cateMen8.png",
      name:"Boxers"
    },
  ]
  return (
      <div className='max-w-screen-2xl mx-auto'>
      <TitleComponents title={'Categories For Men'} />
      <div className='grid grid-cols-4 gap-8'>
        {
          categoriesMen.map((categories, index) => (
            <CateCard key={index} category={categories} showIconAndExplor={true}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoriesForMen