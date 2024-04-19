import React from 'react'
import TitleComponents from './TitleComponents'
import CateCard from './CateCard';

function CategoriesForWomen() {
    const categoriesMen = [
        {
            image: "/cateForWomen/cateWomen1.png",
            name: "Hoodies & Sweetshirt"
        },
        {
            image: "/cateForWomen/cateWomen2.png",
            name: "Coats & Parkas"
        },
        {
            image: "/cateForWomen/cateWomen3.png",
            name: "Tees & T-Shirt"
        },
        {
            image: "/cateForWomen/cateWomen4.png",
            name: "Boxers"
        },
    ];
    return (
        <div className='my-[120px] max-w-screen-2xl mx-auto'>
            <TitleComponents title={'Categories For Women'} />
            <div className='grid grid-cols-4 gap-8'>
                {
                    categoriesMen.map((categories, index) => (
                        <CateCard key={index} category={categories} showIconAndExplor={true} />
                    ))
                }
            </div>
        </div>
    );
}

export default CategoriesForWomen