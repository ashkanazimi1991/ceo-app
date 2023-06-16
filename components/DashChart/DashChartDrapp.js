import React from "react";
import Column from "./Column";
import Redail from './Radial';
import Performance2 from './Performance2';
import Performance3 from './Performance3';
import Performance4 from './Performance4';


import { FiSettings } from "react-icons/fi";
import { BiBasket,BiBellOff, BiUser, BiGridVertical, BiDollar } from "react-icons/bi";
import LineChart from "./LineChart";





export default function DashChartSectionE() {
  return (
    <div className="flex flex-col   bg-[#0000005b] h-full w-full min-h-[400px] sm:min-w-[220px] min-w-[400px]">
       <h1 className="text-center text-white py-4 bg-[#0f1a20f6] border-y-2">چند نمونه از نمودار های مدیریتی</h1>
        <div className="flex flex-row-reverse justify-between px-4 mt-8 py-4">
           <BiGridVertical className="text-white text-2xl"/>
           <BiUser className="text-white ml-[40%] text-2xl"/>
           <BiBellOff className="text-white text-2xl"/>
           <BiDollar className="text-white text-2xl"/>
           <BiBasket className="text-white text-2xl"/>
           <FiSettings className="text-white text-2xl"/>

        </div>
        <div className="flex justify-around py-2">
            <h2 className="text-gray-500 text-sm"> ویزیت های رزرو شده : 25 نفر</h2>
            <h2 className="text-gray-500 text-sm">  ادمین: اشکان عظیمی</h2>
        </div>
        <div className="flex flex-row sm:flex-col">
           <div className="w-3/4 sm:w-full">
            <Column  />
           </div>
           <div className="w-1/4 sm:w-full">
              <Redail/>
             {/* <h2 className="text-white text-center text-sm"></h2> */}

             <Performance2/>
             {/* <h2 className="text-white text-center text-sm">Orders pending confirmation</h2> */}
           </div>
        </div>


        <div className="flex flex-row sm:flex-col">
           <div className="w-3/4 sm:w-full">
            <LineChart  />
            {/* <h2 className="text-white text-center text-sm pb-4">Number of service users and sales per year</h2> */}
           </div>
           <div className="w-1/4 sm:w-full">
              <Performance3/>
             {/* <h2 className="text-white text-center text-sm">Total orders to returns per month</h2> */}
             <Performance4/>
             {/* <h2 className="text-white text-center pb-4 text-sm">Items with zero inventory</h2> */}

           </div>

        </div>
    </div>
      
      );
    }

 