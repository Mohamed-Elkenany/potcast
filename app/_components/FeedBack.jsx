"use client"
import React from 'react'
import TitleComponents from './TitleComponents'
import FeedBackCard from './FeedBackCard'
import Slider from 'react-slick'

function FeedBack() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      };
    const feedback = [
        {
            name:"Floyd Miles",
            image: "/feedback/person2.png",
            rate: 3,
            feedback:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            
        },
        {
            name:"Floyd Miles",
            image: "/feedback/person1.png",
            rate: 3,
            feedback:"ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            
        },
        {
            name:"Floyd Miles",
            image: "/feedback/person3.png",
            rate: 3,
            feedback:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            
        },
    ]
  return (
    <div className='feedback max-w-screen-2xl mx-auto mb-[120px]'>
        <TitleComponents title={"Feedback"}/>
        <div>
            <Slider {...settings}>
            {
                  feedback.map((feedback, index) => (
                      <FeedBackCard key={index} feedback={feedback} />
                ))
            }
            </Slider>
        </div>
    </div>
  )
}

export default FeedBack