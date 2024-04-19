"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { usePathname } from 'next/navigation';

function Header() {
    const [showLanguage, setShowLanguage] = useState(false);
    const user = true;
    const pathname = usePathname();
    const navLink = [
        {
            name: "Home",
            path:"/"
        },
        {
            name: "Shop",
            path:"/shop"
        },
        {
            name: "Man",
            path:"/man"
        },
        {
            name: "Women",
            path:"/women"
        },
        {
            name: "Combos",
            path:"/combos"
        },
        {
            name: "Joggers",
            path:"/joggers"
        },
    ]
    const toggleShowLanguage = () => {
        setShowLanguage(!showLanguage);
    }
    return (
        <header className=' bg-white w-full shadow-md border-b border-colorGrayFour py-4 fixed top-0 left-0 z-50'>
            <div className='max-w-screen-2xl mx-auto flex items-center justify-between gap-12'>
                <div className='flex-1 flex items-center justify-between'>
                    <div>
                        <Link href={'/'}>
                            <Image src={'/logo/Logo.png'} width={93} height={45} className='w-full object-cover object-center' />
                        </Link>
                    </div>
                    {
                        user === true &&
                        <div>
                            <ul className='text-[22px] font-semibold text-colorGrayThree flex items-center gap-9'>
                                {
                                    navLink.map((nav, index) => (
                                        <li key={index} className={`${pathname === nav.path ? 'text-colorGrayOne' : ''}`}>
                                            <Link href={nav.path}>
                                                {nav.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                    <div className=' flex items-center justify-center gap-2 border bg-colorGrayFour p-2 rounded-lg text-colorGrayTwo'>
                        <button className='text-xl'><IoSearchOutline /></button>
                        <input type="text" placeholder={`Search`} className='bg-transparent w-[180px] outline-none' />
                    </div>
                </div>
                {
                    !user ?
                        <div className='flex-1 flex items-center justify-end gap-16'>
                            <div className='relative text-colorGrayTwo'>
                                <button onClick={toggleShowLanguage} className='flex items-center gap-3'>
                                    <p>English (united States)</p>
                                    <FaCaretDown className='text-colorGrayOne' />
                                </button>
                                <div className={`absolute ${showLanguage ? 'top-10 opacity-100 visible' : ' top-0 opacity-0 invisible'} duration-300 left-0 w-full h-full z-50`}>
                                    <ul className='flex flex-col bg-white rounded-lg shadow-lg'>
                                        <li className='cursor-pointer p-2'><p className='w-fit mx-auto'>English (united States)</p></li>
                                        <li className='cursor-pointer p-2 bg-slate-50 rounded-b-lg'><p className='w-fit mx-auto'>English (united States)</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center gap-6'>
                                <button className='text-[18px] text-white font-medium text-center bg-colorPink rounded-lg px-10 py-3'>
                                    <Link href={'/login'}>Login</Link>
                                </button>
                                <button className='text-[18px] text-colorPink border border-colorGrayTwo font-medium text-center rounded-lg px-8 py-3'>
                                    <Link href={'/signUp'}>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                        :
                        <div className='flex items-center gap-4 text-[18px] ml-12'>
                            <button className='p-3 rounded-lg bg-colorGrayFour'>
                                <CiHeart />
                            </button>
                            <button className='p-3 rounded-lg bg-colorGrayFour'>
                                <GoPerson />
                            </button>
                            <button className='p-3 rounded-lg bg-colorGrayFour'>
                                <BsCart2 />
                            </button>
                        </div>
                }
            </div>
        </header>
    );
}

export default Header