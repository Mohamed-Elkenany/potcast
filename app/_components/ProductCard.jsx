import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

function ProductCard({product}) {
    return (
        <div className='w-full'>
            <div className=' relative mb-8'>
                <button className='absolute top-8 right-8 bg-colorGrayFour p-2 rounded-full'>
                    <GoHeart />
                </button>
                <Link href={'/'}>
                    <Image src={product.image} width={282} height={370} alt='product_image' className='w-full' />
                </Link>
            </div>
            <div className='px-4'>
                <Link href={'/'}>
                    <div className='flex items-start justify-between'>
                        <div>
                            <h6 className='text-[16px] text-colorGrayOne font-semibold'>{product.name}</h6>
                            <span className='text-[14px] text-colorGrayTwo font-medium'>
                                {product.brandName}
                            </span>
                        </div>
                        <span className='text-[14px] font-bold text-colorGrayOne bg-colorGrayFive px-2 py-2 rounded-md'>{product.price}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProductCard