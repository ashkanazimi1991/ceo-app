import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider1() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
       
       <SwiperSlide>
        <div className="flex w-full justify-center  ">
        <Image height='400' width='400' alt="online ceo"  
        className="w-full   sm:h-44 h-96  md:h-72 rounded-md object-cover object-left " src='/images/s014.jpg' />
        </div>
      </SwiperSlide>


       <SwiperSlide>
            <div className="flex w-full justify-center    ">
            <Image height='400' width='400' alt="online ceo"  className=" w-full  sm:h-44 h-96  md:h-72 rounded-md object-cover object-left " src='/images/s011.jpg' />
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="flex w-full justify-center  ">
            <Image height='400' width='400' alt="online ceo"  className="w-full   sm:h-44 h-96  md:h-72 rounded-md object-cover object-left " src='/images/s012.jpg' />
            </div>  
        </SwiperSlide>
        
        <SwiperSlide>
            <div className="flex w-full justify-center   ">
            <Image height='400' width='400' alt="online ceo"  className=" w-full sm:h-44 h-96  md:h-72 rounded-md object-cover object-left " src='/images/s013.jpg' />
            </div>
        </SwiperSlide>

       
      </Swiper>
    </>
  );
}
