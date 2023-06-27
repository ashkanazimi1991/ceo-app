import React, { useRef, useEffect } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillGearFill,BsFillPeopleFill, BsFillBarChartFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

import Link from 'next/link';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';



import Image from "next/image";




import img1 from '../../public/images/2.png'
import img2 from '../../public/images/2.png'


const DrawerFront = ({ isOpen, onClose }) => {
  const drawerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 overflow-hidden z-50 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div
          ref={drawerRef}
          className={`w-screen max-w-md transform transition ease-in-out duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="h-full z-50 bg-blue-100 shadow-lg overflow-y-auto p-4">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
              <AiFillCloseCircle className="text-4xl  text-red-900" />
            </button>
           

            <div className="flex  flex-col justify-center pt-10 items-center h-full">


            <div className="flex w-full justify-end my-4 bg-blue-50  shadow-2xl border mt-4 rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>
                 <h3 className="text-gray-800 text-center w-full px-4 py-2"> صفحه اصلی</h3>
                 <MdOutlineDashboardCustomize className="text-4xl mr-4 text-gray-800" />
                </div>

              </div>
           
            <div className="flex w-full justify-end my-4 bg-blue-50  shadow-2xl border mt-4 rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>
                 <h3 className="text-gray-800 text-center w-full px-4 py-2"> داشبورد</h3>
                 <MdOutlineDashboardCustomize className="text-4xl mr-4 text-gray-800" />
                </div>

              </div>

              
     


              <div className="flex w-full justify-end my-4 bg-blue-50  shadow-2xl border mt-4 rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>
                 <h3 className="text-gray-800 text-center w-full px-4 py-2"> دریافت نوبت</h3>
                 <MdOutlineDashboardCustomize className="text-4xl mr-4 text-gray-800" />
                </div>

              </div>

              <div className="flex w-full justify-end my-4 bg-blue-50  shadow-2xl border mt-4 rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>
                 <h3 className="text-gray-800 text-center w-full px-4 py-2"> تست ها</h3>
                 <MdOutlineDashboardCustomize className="text-4xl mr-4 text-gray-800" />
                </div>

              </div>


              <div className="flex w-full justify-end my-4 bg-blue-50  shadow-2xl border mt-4 rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>
                 <h3 className="text-gray-800 text-center w-full px-4 py-2"> مقالات</h3>
                 <MdOutlineDashboardCustomize className="text-4xl mr-4 text-gray-800" />
                </div>

              </div>


              <div className="flex w-full justify-end my-4 bg-blue-50  shadow-2xl border mt-4 rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>
                 <h3 className="text-gray-800 text-center w-full px-4 py-2"> ارتباط با ما</h3>
                 <MdOutlineDashboardCustomize className="text-4xl mr-4 text-gray-800" />
                </div>

              </div>


              
            


        <div className="flex justify-around space-x-2">
           <div className='flex justify-around border-2 bg-slate-600 border-rose-500 hover:border-green-400 cursor-pointer  rounded items-center mt-6 ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs '>خروج از حساب</p>
            <AiOutlineLogout className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>


           <div className='flex justify-around border-2 bg-slate-600 border-rose-500 hover:border-green-400 cursor-pointer  rounded items-center mt-6 ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  '>پیشتیبانی</p>
            <BiSupport className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>


        </div>
       

        


            </div>


          </div>
        </div> 
      </div>
    </div>
  );
};

export default DrawerFront;
