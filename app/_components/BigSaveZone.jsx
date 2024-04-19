import React from 'react'
import { GoArrowDown } from "react-icons/go";
import TitleComponents from './TitleComponents'
import Image from 'next/image'
import Link from 'next/link';
function BigSaveZone() {
    return (
        <div className='max-w-screen-2xl mx-auto mb-[120px]'>
            <TitleComponents title={"Big Save Zone"} />
            <div>
                <div className="flex items-start justify-between gap-x-6">
                    <div className='relative rounded-xl overflow-hidden flex-1'>
                        <div className='absolute top-0 left-0 w-full h-full px-6'>
                            <div className='h-full flex flex-col items-start justify-center'>
                                <h3 className='text-white text-[28px] font-bold tracking-widest'>Hawaiian <span className=' line-clamp-2'>Shirts</span></h3>
                                <span className='text-[14px] text-white my-2'>Dress up in summer vibe</span>
                                <h6 className='text-white font-bold'>UPTO 50% OFF</h6>
                                <div className='flex flex-col items-center'>
                                    <span className='text-4xl text-white my-8'>
                                        <GoArrowDown className=' animate-bounce' />
                                    </span>
                                    <button className=' text-white text-[12px] font-bold border border-white rounded-md w-full py-2 px-8'>
                                        <Link href={'/'}>Shop Name</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Image src={'/BigSaveZone/Rectangle1.png'} width={400} height={394} className='w-full' alt='big Save Zone Image' />
                    </div>
                    <div className='relative rounded-xl overflow-hidden flex-1'>
                        <div className='absolute top-0 left-0 w-full h-full px-6 py-8 flex flex-col items-end justify-between'>,
                            <span className='text-white text-[12px] font-bold bg-colorGrayOne rounded-md w-fit py-3 px-6'>
                                Limited Stock
                            </span>
                            <h3 className='text-white text-[28px] font-bold tracking-widest'>Printed <span className=' line-clamp-2'>T-Shirt</span></h3>
                            <span className='text-white my-2'>New Designs Every Week</span>
                            <h6 className='text-white font-bold'>UPTO 50% OFF</h6>
                            <div className='flex flex-col items-center w-fit'>
                                <span className='text-4xl text-white my-8'>
                                    <GoArrowDown className=' animate-bounce' />
                                </span>
                                <button className='text-white text-[12px] font-bold border border-white rounded-md w-fit py-2 px-8'>
                                    <Link href={'/'}>Shop Name</Link>
                                </button>
                            </div>
                        </div>
                        <Image src={'/BigSaveZone/Rectangle2.png'} width={400} height={394} className='w-full' alt='big Save Zone Image' />
                    </div>
                    <div className='relative rounded-xl overflow-hidden flex-1'>
                        <div className='absolute top-0 left-0 w-full h-full'>
                            <div className=' absolute right-8 top-1/2 -translate-y-1/2 flex flex-col justify-center w-fit'>
                                <h3 className=' text-colorGrayOne text-[28px] font-bold tracking-widest'>Cargo<span className=' line-clamp-2'>Joggers</span></h3>
                                <span className='text-colorGrayOne my-2'>Move with style & comfort</span>
                                <h6 className='text-colorGrayOne font-bold'>UPTO 50% OFF</h6>
                                <div className='flex flex-col items-center w-fit'>
                                    <span className='text-4xl text-colorGrayOne my-8'>
                                        <GoArrowDown className=' animate-bounce' />
                                    </span>
                                    <button className='text-colorGrayOne text-[12px] font-bold border border-colorGrayOne rounded-md w-fit py-2 px-8'>
                                        <Link href={'/'}>Shop Name</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Image src={'/BigSaveZone/Rectangle3.png'} width={400} height={394} className='w-full' alt='big Save Zone Image' />
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4 mt-4'>
                    <div className='flex-1 relative'>
                        <div className=' absolute top-0 left-0 w-full h-full' />
                        <div className='absolute right-[15%] flex flex-col items-start justify-evenly h-full py-16'>
                            <h3 className='font-bold text-[32px] text-colorGrayOne tracking-widest'>Urban <span className='line-clamp-1'>Shirts</span></h3>
                            <span className=' text-colorGrayOne text-[16px] font-semibold'>Live In Confort</span>
                            <h5 className=' text-colorGrayOne text-[20px] font-bold'>FLAT 60% OFF</h5>
                            <div className='flex flex-col items-center w-fit'>
                                <span className='text-4xl text-colorGrayOne my-8'>
                                    <GoArrowDown className=' animate-bounce' />
                                </span>
                                <button className='text-colorGrayOne text-[12px] font-bold border-2 border-colorGrayOne rounded-md w-fit py-2 px-8'>
                                    <Link href={'/'}>Shop Name</Link>
                                </button>
                            </div>
                        </div>
                        <Image src={'/bigSaveZone/Rectangle4.png'} width={610} height={394} className='w-full' alt='big Save Zone Image' />
                    </div>
                    <div className='flex-1 relative'>
                        <div className=' absolute top-0 left-0 w-full h-full' />
                        <div className='absolute right-[15%] flex flex-col items-start justify-evenly h-full py-16'>
                            <h3 className='font-bold text-[32px] text-colorGrayOne tracking-widest'>Oversized<span className='line-clamp-1'>T-Shirts</span></h3>
                            <span className=' text-colorGrayOne text-[16px] font-semibold'>Street Style Icon</span>
                            <h5 className=' text-colorGrayOne text-[20px] font-bold'>FLAT 60% OFF</h5>
                            <div className='flex flex-col items-center w-fit'>
                                <span className='text-4xl text-colorGrayOne my-8'>
                                    <GoArrowDown className=' animate-bounce' />
                                </span>
                                <button className='text-colorGrayOne text-[12px] font-bold border-2 border-colorGrayOne rounded-md w-fit py-2 px-8'>
                                    <Link href={'/'}>Shop Name</Link>
                                </button>
                            </div>
                        </div>
                        <Image src={'/bigSaveZone/Rectangle5.png'} width={610} height={394} className='w-full' alt='big Save Zone Image' />
                    </div>
                </div>
                <div className='mt-[70px] flex items-center'>
                    <div className=' flex-1 relative'>
                        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                            <div className='pl-[10%]'>
                                <h3 className='text-[34px] font-extrabold text-white w-fit'>WE MADE YOUR EVERYDAY<span className='line-clamp-1'>FASHION BETTER!</span></h3>
                                <div className='w-3/5'>
                                <p className='text-[20px] text-colorGrayThree font-light tracking-wider my-6'>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                                </div>
                                <button className='text-[18px] text-colorGrayOne font-semibold bg-white px-8 py-3 rounded-md'><Link href={'/'}>Shop Now</Link></button>
                            </div>
                        </div>
                        <Image src={`/BigSaveZone/Rectangle6.png`} width={614} height={640} className='w-full' />
                    </div>
                    <div className=' flex-1 relative'>
                        <div className='absolute top-0 left-0 w-full h-full' />
                        <Image src={`/BigSaveZone/Rectangle7.png`} width={614} height={640} className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BigSaveZone