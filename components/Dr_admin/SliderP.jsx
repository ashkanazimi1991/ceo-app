import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import "../../styles/Home.module.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>
      


        <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>



 <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>




        <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex justify-around bg-green-200 py-[5%] my-auto">
            <div className="flex flex-col items-center bg-red-400 m-auto">
            <h2>Title</h2>
            <p>sdfsdfsfsdfsfsfsfsfsfsdfsdfsfsf</p>
            </div>

            <div className="w-1/2 px-4">
            <Image  src='/images/ux.png'  alt="logo" width='500' height='500'
                 className=" w-[100%] p-2  object-contain "/>
            </div>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </>
  );
}
