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
      slidesToShow: 6,
      swipeToSlide: true,
      speed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
         
          <div className=' h-8 sm:h-7 mx-4 rounded-md text-gray-300 text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center whitespace-nowrap items-center'> تهیه نسخه  </p> 
           </div>
    
          
          </div>
         
          <div>
            <div className=' h-8 sm:h-7 mx-4 rounded-md text-gray-300 text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center  whitespace-nowrap'> تزریقات در منزل </p>    
            </div>
             
          </div>

          <div>
          <div className=' h-8 sm:h-7 mx-4  rounded-md text-gray-300 text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center whitespace-nowrap'>  پرستاری در منزل </p>
            </div>
         
          </div>

          <div>
          <div className=' h-8 sm:h-7 mx-4 rounded-md text-gray-300 text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center whitespace-nowrap'>  آزمایش در منزل </p>
            </div>
             
          </div>

          
          <div>
          <div className=' h-8 sm:h-7 mx-4 rounded-md text-gray-300 text-xs flex justify-center items-center  border-2 border-gray-300'>
              <p className='w-24 flex justify-center items-center whitespace-nowrap'>  تجهیزات در منزل</p>
            </div>
        
          </div>
         
         
          <div>
          <div className=' h-8 sm:h-7 mx-4 rounded-md text-gray-300 text-xs flex justify-center items-center  border-2 ml-4 border-gray-300'>
              <p className='w-24 flex justify-center items-center whitespace-nowrap'>  معاینه در منزل  </p>
            </div>
             
          </div>


   


        </Slider>
      </div>
    );
  }
}
