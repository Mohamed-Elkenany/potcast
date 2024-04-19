"use client"
import Image from 'next/image';
import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

function FeedBackCard({feedback}) {
    return (
        <div className='border border-colorGrayThree rounded-xl p-6 mx-2 h-[290px]'>
            <div className='flex items-start justify-between'>
                <div>
                    <Image src={feedback.image} width={59} height={59} className='w-full object-cover object-center' alt='person image' />
                </div>
                <div>
                    <ul className='flex items-center gap-2 text-2xl text-[#EDD146]'>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                        <li><IoIosStar /></li>
                    </ul>
                </div>
            </div>
            <h4 className='text-[22px] text-colorGrayOne font-medium my-[20px] tracking-wider'>{feedback.name}</h4>
            <div>
                <p className='text-[14px] text-colorGrayTwo font-normal'>{feedback.feedback}</p>
            </div>
        </div>
    );
}

export default FeedBackCard