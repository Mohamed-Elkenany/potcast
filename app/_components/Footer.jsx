"use client"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
function Footer() {
    return (
        <div className='bg-colorGrayOne w-full pt-[40px]'>
            <div className='max-w-screen-2xl mx-auto'>
                <div className='max-w-screen-xl mx-auto'>
                    <div className=' grid grid-cols-4 gap-x-4 gap-y-8'>
                        <div className='text-white col-span-1'>
                            <p className=' text-[29px] font-bold mb-[35px]'>Need Help</p>
                            <ul className='text-[18px] font-medium text-colorGrayThree'>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Contact Us</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Track Order</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Returns & Refunds</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>FAQ's</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Career</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white col-span-1'>
                            <p className=' text-[29px] font-bold mb-[35px]'>Company</p>
                            <ul className='text-[18px] font-medium text-colorGrayThree'>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>About Us</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>euphoria Blog</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>euphoriastan</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Collaboration</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Media</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white col-span-1'>
                            <p className=' text-[29px] font-bold mb-[35px]'>More Info</p>
                            <ul className='text-[18px] font-medium text-colorGrayThree'>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Term and Conditions</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Privacy Policy</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Shipping Policy</Link>
                                </li>
                                <li className='mb-[25px] hover:text-colorGrayFive'>
                                    <Link href={'/'}>Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white col-span-1'>
                            <p className=' text-[29px] font-bold mb-[35px]'>Location</p>
                            <ul className='text-[18px] font-medium text-colorGrayThree'>
                                <li className='mb-[25px] text-nowrap hover:text-colorGrayFive'>
                                    <Link href={'/'}>support@euphoria.in</Link>
                                </li>
                                <li className='mb-[25px] text-nowrap hover:text-colorGrayFive'>
                                    <Link href={'/'}>Eklingpura Chouraha, Ahmedabad Main Road</Link>
                                </li>
                                <li className='mb-[25px] text-nowrap hover:text-colorGrayFive'>
                                    <Link href={'/'}>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-3 flex items-end gap-2 text-md text-colorGrayOne'>
                            <div className='px-2 py-2 bg-colorGrayFour flex items-center justify-center rounded-lg'>
                                <FaFacebookF />
                            </div>
                            <div className='px-2 py-2 bg-colorGrayFour flex items-center justify-center rounded-lg'>
                                <FaInstagram />
                            </div>
                            <div className='px-2 py-2 bg-colorGrayFour flex items-center justify-center rounded-lg'>
                                <FaLinkedinIn />
                            </div>
                            <div className='px-2 py-2 bg-colorGrayFour flex items-center justify-center rounded-lg'>
                                <FaXTwitter />
                            </div>
                        </div>
                        <div className=' col-span-1'>
                            <h1 className='font-bold text-white text-[29px] tracking-wide'>Download The App </h1>
                            <div className='flex items-center justify-between w-full mt-[40px]'>
                                <div className='flex items-center text-nowrap gap-x-4'>
                                    <Image src={'/Group.png'} width={31} height={34} className='w-full' alt='icon' />
                                    <div>
                                        <span className='text-[10px] font-normal text-colorGrayFive'>android app on</span>
                                        <p className='text-[18px] font-normal text-colorGrayFive'>Google Play</p>
                                    </div>
                                </div>
                                <div className='flex items-center text-nowrap gap-x-4'>
                                    <MdPhoneIphone className='text-5xl text-colorGrayTwo'/>
                                    <div>
                                        <span className='text-[10px] font-normal text-colorGrayFive'>Available on the</span>
                                        <p className='text-[18px] font-normal text-colorGrayFive'>App Store</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' my-12 py-6 border-b-[1px] border-t-[1px] border-colorGrayTwo'>
                    <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
                        <h1 className='text-[29px] text-white font-bold'>Popular Categories</h1>
                        <span className='text-xl text-white'><SlArrowDown/></span>
                    </div>
                </div>
                <div className='pb-12 w-fit mx-auto text-colorGrayThree'>
                    <p className='text-[18px] font-bold'>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer