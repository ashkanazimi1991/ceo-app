import React from "react";
import Column from "./Column";
import Performance from './Performance';
import Performance2 from './Performance2';
import Performance3 from './Performance3';
import Performance4 from './Performance4';
import Speed from "../DashChart/Speed";
import ColumnCatPersian from "../DashChart/ColumnCatPersian";
import CChartSection from "../CChart/CChartSection";

import { FiSettings } from "react-icons/fi";
import { BiBasket,BiBellOff, BiUser, BiGridVertical, BiDollar } from "react-icons/bi";
import LineChart from "./LineChart";


// import dynamic from "next/dynamic";
// const Speed = dynamic(() => import('../DashChart/Speed'))
//  const ColumnCatPersian = dynamic(() => import('../DashChart/ColumnCatPersian'))
//  const CChartSection = dynamic(() => import('../CChart/CChartSection'))






export default function DashChartSection() {
  return (
    <div className="flex flex-col   bg-[#0000005b] h-full w-full min-h-[400px] sm:min-w-[220px] min-w-[400px]">
       <h1 className="text-center text-white py-4 bg-[#0f1a20f6] border-y-2">نمونه امکانات داشبورد</h1>
        <div className="flex flex-row-reverse justify-between px-4 mt-8 py-4">
           <BiGridVertical className="text-white text-2xl"/>
           <BiUser className="text-white ml-[40%] text-2xl"/>
           <BiBellOff className="text-white text-2xl"/>
           <BiDollar className="text-white text-2xl"/>
           <BiBasket className="text-white text-2xl"/>
           <FiSettings className="text-white text-2xl"/>

        </div>
        <div className="flex justify-around py-2">
            <h2 className="text-white"> بیماران امروز: 25 نفر</h2>
            <h2 className="text-white">  کاربر: اشکان عظیمی</h2>
        </div>
        <div className="flex flex-row md:flex-col">
           <div className="w-3/4 md:w-full">
            <Column  />
           </div>
           <div className="w-1/4 md:w-full">
              <Performance/>
             <h2 className="text-white text-center text-sm">ویزیت های امروز</h2>

             <Performance2/>
             <h2 className="text-white text-center text-sm">سفارشات در انتظار تایید</h2>
           </div>
        </div>


        <div className="flex flex-row md:flex-col">
           <div className="w-3/4 md:w-full">
            <LineChart  />
            <h2 className="text-white text-center text-sm pb-4">تعداد تراکنش ها خدمات و فروش در سال</h2>
           </div>
           <div className="w-1/4 md:w-full">
              <Performance3/>
             <h2 className="text-white text-center text-sm">کل سفارشات به مرجوعی ها در ماه</h2>
             <Performance4/>
             <h2 className="text-white text-center pb-4 text-sm">کالا ها با موجودی صفر</h2>

           </div>

        </div>

        <div className="flex flex-row md:flex-col">
           <div className="w-3/4 h-full md:w-full">
            <ColumnCatPersian  />
            <h2 className="text-white text-center text-sm pb-4"> میزان فروش از هر دسته بندی </h2>
           </div>
           <div className="w-1/4 md:w-full ">
             <CChartSection/>
             <h2 className="text-white text-center pb-4 text-sm">سئو و عملکرد در مرورگرها</h2>

             <Speed />
             <h2 className="text-white text-center pb-4 text-sm">بارگزاری در مرورگرها</h2>

           </div>

        </div>



    </div>
      
      );
    }


