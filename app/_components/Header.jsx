"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
    const inputRef = useRef();
    const user = true;
    const [openSeach, setOpenSeach] = useState(false);
    const [language, setLanguage] = useState(false);
    const pathname = usePathname();
    const navLink = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Shop",
            path: "/shop"
        },
        {
            name: "Men",
            path: "/men"
        },
        {
            name: "Women",
            path: "/women"
        },
        {
            name: "Combos",
            path: "/combos"
        },
        {
            name: "Joggers",
            path: "/joggers"
        },
    ];
    return (
        <header className='shadow-sm border-b fixed top-0 left-0 w-full bg-white z-50'>
            <div className='px-4 max-w-screen-2xl mx-auto h-16 flex items-center'>
                <div className='flex flex-1 items-center justify-between pr-14'>
                    <div>
                        <Link href={'/'}>
                            <Image src={'/logo/logo.png'} width={90} height={45} alt='logo' />
                        </Link>
                    </div>
                    {
                        !user &&
                        <div className='lg:px-2'>
                            <nav>
                                <ul className='hidden lg:flex items-center gap-8'>
                                    {
                                        navLink.map((navLink, index) => (
                                            <li key={index} className={`${pathname === navLink.path ? ' text-colorGrayOne' : 'text-colorGrayThree'} font-semibold`}>
                                                <Link href={navLink.path}>{navLink.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    }
                    
                    <div className='hidden bg-colorGrayFour text-colorGrayOne md:flex items-center gap-1 py-1 px-3 rounded-lg'>
                        <CiSearch className='text-lg' />
                        <input type="text" placeholder='Search' className='bg-transparent outline-none placeholder:text-colorGrayTwo placeholder:text-center' />
                    </div>
                    <div>
                        
                    </div>
                    {user && <div className='relative'>
                        <button onClick={() => setLanguage(!language)} className='flex items-center gap-2'>
                            <h6 className='text-xs text-colorGrayTwo select-none'>English (united States)</h6>
                            <AiFillCaretDown className='text-xs text-colorGrayOne' />
                        </button>
                        <div className={`absolute ${language ? '' : '-translate-y-5 opacity-0'} rounded-lg top-10 left-1/2 -translate-x-1/2 bg-white shadow-md h- overflow-hidden duration-300`}>
                            <ul className='flex flex-col'>
                                <li>
                                    <button className='text-nowrap px-4 py-2 text-colorGrayOne text-sm'>
                                        English (united States)
                                    </button>
                                </li>
                                <li>
                                    <button className='text-nowrap px-4 py-2 text-colorGrayOne text-sm bg-slate-100'>
                                        English (united States)
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>}
                </div>
                <div>
                    {user ?
                        <div className='flex items-center gap-4'>
                            <button className='px-6 py-2 rounded-lg text-white bg-colorPink border-colorGrayTwo'>Login</button>
                            <button className='border border-colorGrayTwo px-5 py-2 rounded-lg text-colorPink'>Sign Up</button>
                        </div>
                        :
                        <div className='flex items-center gap-4'>
                            <button className='md:hidden border w-8 h-8 rounded-md bg-colorGrayFour text-colorGrayTwo flex items-center justify-center'>
                                <CiSearch />
                            </button>
                            <button className='hidden border w-8 h-8 rounded-md bg-colorGrayFour text-colorGrayOne md:flex items-center justify-center'>
                                <CiHeart />
                            </button>
                            <button className='hidden border w-8 h-8 rounded-md bg-colorGrayFour text-colorGrayTwo md:flex items-center justify-center'>
                                <AiOutlineUser />
                            </button>
                            <button className='border w-8 h-8 rounded-md bg-colorGrayFour text-colorGrayOne flex items-center justify-center'>
                                <CiShoppingCart />
                            </button>
                        </div>
                    }
                </div>
                <div className='ml-4'>
                    <button className='border lg:hidden w-8 h-8 rounded-md bg-colorGrayFour text-colorGrayOne flex items-center justify-center'>
                        <CiMenuBurger />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header