
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./styles.css";

// import required modules
// import { EffectCards } from "swiper";

import { Pagination, Navigation } from 'swiper/modules';


export default function SliderP() {
  return (
    <>
      <Swiper
       spaceBetween={30}
        // effect={"cards"}
        grabCursor={true}
        // modules={[EffectCards]}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>
       
        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

 
        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="  py-6  ">
          <div className="flex flex-col w-full  justify-center items-center ">
            <div className="flex justify-around  w-full items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 py-2 text-gray-600 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-600 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

   
      </Swiper>
    </>
  );
}

// export default SliderP