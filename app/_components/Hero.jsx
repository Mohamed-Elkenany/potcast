"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='hero w-fit absolute top-1/2 -translate-y-1/2 right-0 bg-black bg-opacity-20 z-30 cursor-pointer text-5xl text-white rounded-full p-2'><BsChevronRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='w-fit absolute top-1/2 -translate-y-1/2 left-0 bg-black bg-opacity-20 z-30 cursor-pointer text-5xl text-white rounded-full p-2'><BsChevronLeft/></div>
    );
}
  
function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='hero max-w-screen-2xl mx-auto rounded-lg'>
      <div>
        <Slider {...settings}>
          <div className=' relative rounded-2xl overflow-hidden'>
            <div className='absolute left-0 top-0 h-full w-full z-20 pl-[150px] rounded-lg'>
              <div className='w-[25%] h-full flex flex-col items-start justify-between pt-40 pb-[150px]'>
                <h3 className='text-white font-medium'>T-shirt / Tops</h3>
                <h1 className='text-white font-bold'>Summer <span className=' line-clamp-1'>Value Pack</span></h1>
                <h3 className='text-white font-medium'>cool / colorful / comfy</h3>
                <button className='bg-white text-2xl font-bold px-12 py-3 rounded-lg'>Shop Now</button>
              </div>
            </div>
            <Image src={`/heroBanner/banner1.jpg`} width={2000} height={500} alt='banner' className='w-full rounded-2xl' />
          </div>
          <div className=' relative rounded-2xl overflow-hidden'>
            <div className='absolute left-0 top-0 h-full w-full z-20 pl-[150px] py-[25%] rounded-lg'>
              <div className='w-[40%] flex flex-col items-start'>
                <h1 className='text-white font-bold mb-2'>Catch You Layer</h1>
                <p className='text-white text-[20px]'>Lightweight layers for those between-weather days & beyond.</p>
                <div className='flex items-center gap-4 mt-4'>
                <button className='bg-white text-xl font-bold px-6 py-3 rounded-lg'>SHOP MEN'S</button>
                <button className='bg-white text-xl font-bold px-6 py-3 rounded-lg'>SHOP WOMEN'S</button>
                </div>
              </div>
            </div>
            <Image src={`/heroBanner/banner21.png`} width={1000} height={500} alt='banner' className='w-full rounded-2xl' />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Hero