"use client"
import React from 'react'
import Slider from 'react-slick';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import CateCard from './CateCard';
import TitleComponents from './TitleComponents';
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='w-fit absolute top-1/2 -translate-y-1/2 right-0 z-30 cursor-pointer text-xl text-black'><GoArrowRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='w-fit absolute top-1/2 -translate-y-1/2 left-0 z-30 cursor-pointer text-xl text-black'><GoArrowLeft/></div>
    );
}
function NewArrival() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const categories = [
    {
      image: "/cateImages/cate1.png",
      name:"Knitted Joggers"
    },
    {
      image: "/cateImages/cate2.png",
      name:"Full Sleeve"
    },
    {
      image: "/cateImages/cate3.png",
      name:"Active T-Shirts"
    },
    {
      image: "/cateImages/cate4.png",
      name:"Urban Shirts"
    },
  ]
  return (
    <div className='relative max-w-screen-2xl mx-auto mb-[120px]'>
      <TitleComponents title={"New Arrival"} />
      <div>
        <div>
          <Slider {...settings} className='px-6'>
            {
              categories.map((category, index) => (
                <CateCard key={index} category={category} showIconAndExplor={false} />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default NewArrival