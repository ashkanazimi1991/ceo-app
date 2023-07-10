
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../styles/Home.module.css";
// import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/ashkan2.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/bita.jpg' width='100' height='100'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">بیتا</p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>
       
        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/amir.jpg' width='100' height='100' alt='نرم افزار کلینیک'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">امیر</p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب سرشت برساد و همکاری دلسوزانه با مجموعه که سبب افزایش روحیه تیمی پرسنل شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/p1.jpg' width='100' height='100' alt='نرم افزار کلینیک'   className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right"> سالار</p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

 

        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/sajjad.jpg' width='100' height='100' alt='نرم افزار کلینیک'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right"> سجاد</p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/sara.jpg' width='100' height='100' alt='نرم افزار کلینیک'   className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">سارا </p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

        <SwiperSlide className="shadow-2xl ">
          <div className="flex flex-col w-full h-full bg-slate-600 justify-center items-center ">
            <div className="flex justify-around items-center flex-row-reverse">
            <Image src='/images/p1.jpg' width='100' height='100' alt='نرم افزار کلینیک'  className='rounded-xl   w-18 h-20  object-cover'/>
            <div className="flex flex-col">
            <p className="px-2 text-right">اشکان عظیمی</p>
            <p className="px-2 text-gray-400 text-xs text-right"> مجموعه مدیریت آنلاین</p>
            </div>
            </div>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 border-t-2 border-gray-400 leading-6">   با تشکر از کلینیک و کادر مجرب   و همکاری دلسوزانه با مجموعه که سبب افزایش عملکرد اعضا شده است. </p>
            <p className="px-2 text-gray-400 text-xs text-right py-4 mt-4 ">  1402/04/04 </p>

          </div>
        </SwiperSlide>

   
      </Swiper>
    </>
  );
}