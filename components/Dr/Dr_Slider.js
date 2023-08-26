import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from 'next/image';
import {FiStar} from  'react-icons/fi';
import Slider from "react-slick";
import Link from "next/link";

export default class Dr_Slider extends Component {

  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 5,
     swipeToSlide: true,
      speed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          }},
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="container w-full overflow-hidden">
        <Slider {...settings}>
          <div className="" >
         
          <div className='relative h-96 row-span-3 mx-4 bg-slate rounded-xl transition delay-150  duration-500
               brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>
    
          
          </div>
         
          <div className="" >
         
          <div className='relative h-96 row-span-3 mx-4 bg-slate rounded-xl transition delay-150  duration-500
               brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>
    
          
          </div>
          <div className="" >
         
         <div className='relative h-96 row-span-3 mx-4 bg-slate rounded-xl transition delay-150  duration-500
              brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
             <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

             <Link href='/dr/dr_rad' >             
                 <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                 <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                
                <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                     <div className='flex justify-center items-center py-1  w-full space-x-1'>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-gray-500'/>

                     </div>
                   
                </div>
                 <div className='flex w-full justify-around  '>
                     <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                     <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                </div>

                 </button>   
             </Link>   
             </div>
   
         
         </div>



            <div className="" >
         
          <div className='relative h-96 row-span-3 mx-4 bg-slate rounded-xl transition delay-150  duration-500
               brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>
    
          
          </div>

          
          <div className="" >
         
         <div className='relative h-96 row-span-3 mx-4 bg-slate rounded-xl transition delay-150  duration-500
              brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
             <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

             <Link href='/dr/dr_rad' >             
                 <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                 <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                
                <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                     <div className='flex justify-center items-center py-1  w-full space-x-1'>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-gray-500'/>

                     </div>
                   
                </div>
                 <div className='flex w-full justify-around  '>
                     <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                     <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                </div>

                 </button>   
             </Link>   
             </div>
   
         
         </div>
         
         
         <div className="" >
         
         <div className='relative h-96 row-span-3 mx-4 bg-slate rounded-xl transition delay-150  duration-500
              brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
             <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

             <Link href='/dr/dr_rad' >             
                 <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                 <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                
                <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                     <div className='flex justify-center items-center py-1  w-full space-x-1'>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-yellow-500'/>
                         <FiStar className='text-gray-500'/>

                     </div>
                   
                </div>
                 <div className='flex w-full justify-around  '>
                     <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                     <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                </div>

                 </button>   
             </Link>   
             </div>
   
         
         </div>


   


        </Slider>
      </div>
    );
  }
}
