import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
// import Image from 'next/image';
import Slider from "react-slick";

export default class HeroSlider extends Component {

  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 5,
      swipeToSlide: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }},
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className="container w-full overflow-hidden">
        <Slider {...settings}>
          <div className="" >
         
          <div className=' h-12 sm:h-9 mx-4 rounded-md  flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-full px-2 flex justify-center text-gray-300 text-md  whitespace-nowrap  items-center'> تهیه نسخه  </p> 
           </div>
    
          
          </div>
         
          <div>
            <div className=' h-12 sm:h-9 mx-4 rounded-md  flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-full px-2flex justify-center i text-gray-300 text-md text-center  whitespace-nowrap '> تزریقات در محل </p>    
            </div>
             
          </div>

          <div>
          
          <div className=' h-12 sm:h-9 mx-4 rounded-md  flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-full px-2 flex justify-center text-gray-300 text-md  whitespace-nowrap  items-center'> پرستاری در محل </p> 
           </div>
         
          </div>

          <div>
          <div className=' h-12 sm:h-9 mx-4 rounded-md  flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-full px-2 flex justify-center text-gray-300 text-md  items-center whitespace-nowrap '>  آزمایش در محل </p>
            </div>
             
          </div>

          
          <div>
          <div className=' h-12 sm:h-9 mx-4 rounded-md  flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-full px-2 flex justify-center text-gray-300 text-md  items-center whitespace-nowrap '>  تجهیزات در محل</p>
            </div>
        
          </div>
         
         
          <div>
          <div className=' h-12 sm:h-9 mx-4 rounded-md  flex justify-center items-center  border-2 ml-4 border-gray-300'>
              <p className='w-full px-2 flex justify-center text-gray-300 text-md  items-center whitespace-nowrap  '>  پزشک در محل  </p>
            </div>
             
          </div>


   


        </Slider>
      </div>
    );
  }
}
