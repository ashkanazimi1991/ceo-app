import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import {GiHeartOrgan,GiBrain,GiBeastEye,GiHealthPotion} from  'react-icons/gi';
import {FaLungs,FaBone} from  'react-icons/fa';
// import Image from 'next/image';
import Slider from "react-slick";

export default class Hero_Slider02 extends Component {

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
            slidesToShow: 4,
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
      <div className="container w-full  overflow-hidden">
        <Slider {...settings}>
     
        <div className="" >
            <div className='  w-24 outline px-4  mx-4  outline-cyan-500 h-24 shadow-2xl outline-1 rounded-md flex flex-col justify-around items-center   bg-[#061a2b62]'>
              <GiBeastEye className='text-white text-2xl' /> 
              <p className='text-center w-full text-gray-200 '>چشم</p> 
            </div>
         </div>
         



    <div className="" >
          <div className=' w-24 outline px-4 mx-4  outline-cyan-500 h-24 shadow-2xl outline-1 rounded-md flex flex-col justify-around items-center   bg-[#61616162]'>
             <GiHeartOrgan className='text-white text-2xl'/> 
             <p className='text-center w-full text-gray-200 '>قلب</p> 

          </div>
         </div>

    
             
            <div className="" >
         <div className=' w-24 outline px-4 mx-4  outline-cyan-500 h-24 shadow-2xl outline-1 rounded-md flex flex-col justify-around items-center   bg-[#061a2b62]'>
                <GiBrain className='text-white text-2xl' /> 
                <p className='text-center w-full text-gray-200 '>نورولوژی</p> 
            </div>
         </div>

   


       <div className="" >
            <div className='  w-24 outline px-4  mx-4  outline-cyan-500 h-24 shadow-2xl outline-1 rounded-md flex flex-col justify-around items-center   bg-[#61616162]'>
              <FaLungs className='text-white text-2xl' /> 
              <p className='text-center w-full text-gray-200 '>ریه</p> 
            </div>
         </div>


             <div className="" >
            <div className='  w-24 outline px-4  mx-4  outline-cyan-500 h-24 shadow-2xl outline-1 rounded-md flex flex-col justify-around items-center   bg-[#061a2b62]'>
              <FaBone className='text-white text-2xl' /> 
              <p className='text-center w-full text-gray-200 whitespace-nowrap'>فیزیوتراپی</p> 
            </div>
         </div>



             <div className="" >
            <div className='  w-24 outline px-4  mx-4  outline-cyan-500 h-24 shadow-2xl outline-1 rounded-md flex flex-col justify-around items-center  bg-[#61616162]'>
              <GiHealthPotion className='text-white text-2xl' /> 
              <p className='text-center w-full text-gray-200 '>داخلی</p> 
            </div>
         </div>


        </Slider>
      </div>
    );
  }
}
