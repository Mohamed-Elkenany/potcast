"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import Link from 'next/link';
function page() {
  const [hidden, setHiddden] = useState(true);
  const toggleHidden = (e) => {
    e.preventDefault();
    setHiddden(!hidden)
  }
    return (
        <div className='flex pt-16'>
            <div className='max-md:hidden flex-1 max-w-fit'>
                <Image src={'/signUp/signUp.png'} width={695} height={956} className='w-fit object-cover object-center' />
            </div>
            <div className='flex-1 w-full pl-32 pt-16 pr-[350px]'>
                <div>
                    <div>
                        <h1 className='text-heading text-colorGrayOne font-bold'>Sign Up</h1>
                        <p className=' font-medium text-[16px] text-colorGrayThree'>Sign up for free to access to in any of our products </p>
                    </div>
                    <div className='mt-[50px] flex flex-col gap-4'>
                        <button className='flex items-center justify-center gap-2 border border-colorGrayTwo hover:bg-colorPink hover:text-white rounded-lg text-colorPink text-center font-semibold w-full py-3 duration-300'>
                            <FaGoogle className='text-2xl' />
                            <h4 className='font-medium'>Continue With Google</h4>
                        </button>
                        <button className='flex items-center justify-center gap-2 border border-colorGrayTwo hover:bg-colorPink hover:text-white rounded-lg text-colorPink text-center font-semibold w-full py-3 duration-300'>
                            <FaFacebookF className=' text-2xl' />
                            <h4 className='font-medium'>Continue With Facebook</h4>
                        </button>
                    </div>
                    <div className='relative w-full my-[80px]'>
                        <div className='border' />
                        <h6 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white text-colorGrayOne z-10 px-4'>OR</h6>
                    </div>
                </div>
                <div className='w-full'>
                    <form action="" className='flex flex-col gap-8'>
                        <div className='w-full flex flex-col gap-1'>
                            <label htmlFor="username" className='text-lg text-colorGrayTwo'>User name or email address</label>
                            <input type="text" id='username' className='w-full border py-3 border-colorGrayTwo rounded-md text-xl outline-none pl-1' />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <div className='flex items-center justify-between'>
                                <label htmlFor="password" className='text-lg text-colorGrayTwo'>Password</label>
                                <div>
                                    <div>
                                        {
                                            hidden ?
                                                <button onClick={toggleHidden} className='flex items-center gap-2 text-colorGrayTwo'>
                                                    <BiShowAlt className='text-xl' />
                                                    <h6>Show</h6>
                                                </button>
                                                :
                                                <button onClick={toggleHidden} className='flex items-center gap-2 text-colorGrayTwo'>
                                                    <BiHide className='text-xl' />
                                                    <h6>Hidden</h6>
                                                </button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <input type={`${hidden ? 'password' : 'text'}`} id='password' className='w-full border py-3 border-colorGrayTwo rounded-md text-xl outline-none pl-1' />
                            <div className='w-full text-sm text-colorGrayThree'>
                                <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            </div>
                            <div className='flex flex-col gap-4 py-4'>
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" name="" id="privacy" />
                                    <label htmlFor="privacy" className='text-colorGrayTwo'>Agree to our <span className='underline'>Terms of use</span> and <span className='underline'>Privacy Policy</span></label>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" name="" id="Subscribe" />
                                    <label htmlFor="Subscribe" className='text-colorGrayTwo'>Subscribe to our monthly newsletter</label>
                                </div>
                            </div>
                            <div className='w-full'>
                                <button className=' border px-9 py-3 rounded-lg font-medium text-white bg-colorPink hover:bg-white hover:text-colorPink hover:shadow-md duration-300'>
                                    <h6>Sign in</h6>
                                </button>
                                <h6 className='text-colorGrayTwo mt-1 text-base'>
                                    Already have an  account? <Link href={`/login`} className='hover:text-colorPink hover:underline duration-300'>Log in</Link>
                                </h6>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default page