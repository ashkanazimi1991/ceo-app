import React, { useRef, useEffect } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillGearFill,BsFolder2, BsCalendarDate } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

import Link from 'next/link';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';



import Image from "next/image";




// import img1 from '../../public/images/s1.jpg'
// import img2 from '../../public/images/.png'


const Drawer = ({ isOpen, onClose }) => {
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
      className={`fixed inset-0 overflow-hidden z-40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="fixed inset-0 bg-gray-800  bg-opacity-75"></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div
          ref={drawerRef}
          className={`w-screen max-w-md transform transition ease-in-out duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="h-full bg-[#0b0c12e1] shadow-lg overflow-y-auto p-4">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
              <AiFillCloseCircle className="text-2xl  text-rose-600" />
            </button>
           

            <div className="flex  flex-col justify-center pt-10 items-center h-full">
           
            <button className="flex w-full justify-end my-4  bg-gradient-to-l from-black hover:bg-gray-900   shadow-2xl rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-300 text-center w-full px-4 py-2">  داشبورد</h3>
                 <MdOutlineDashboardCustomize className="text-2xl mr-4 text-rose-500 " />
                </div>

              </button>
              
              
     


              <button className="flex w-full justify-end my-4  bg-gradient-to-l from-black hover:bg-gray-900   shadow-2xl rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-300 text-center w-full px-4 py-2"> پرونده بیماری</h3>
                 <BsFolder2 className="text-2xl mr-4 text-rose-500" />
                </div>

              </button>

              <button className="flex w-full justify-end my-4  bg-gradient-to-l from-black hover:bg-gray-900   shadow-2xl rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-300 text-center w-full px-4 py-2"> دریافت نوبت</h3>
                 <BsCalendarDate className="text-2xl mr-4 text-rose-500" />
                </div>

             </button>


             <button className="flex w-full justify-end my-4  bg-gradient-to-l from-black hover:bg-gray-900   shadow-2xl rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-300 text-center w-full px-4 py-2"> کیف پول</h3>
                 <BsFillGearFill className="text-2xl mr-4 text-rose-500" />
                </div>

                </button>


             

              
              <button className="flex w-full justify-end my-4  bg-gradient-to-l from-black hover:bg-gray-900  shadow-2xl rounded items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-300 text-center w-full px-4 py-2"> تنظیمات</h3>
                 <BsFillGearFill className="text-2xl mr-4 text-rose-500" />
                </div>
                </button>
              


        <div className="flex justify-around  space-x-2">
           <button className='flex justify-around  bg-gray-700    ounded items-center mt-6 ' >
            <p className=' text-sm px-4 py-2 sm:text-xs text-gray-200 hover:text-rose-400'>خروج از حساب</p>
            <AiOutlineLogout className="text-2xl mr-4 text-rose-500 " />
           </button>


           <div className='flex justify-around  bg-gray-700  rounded items-center mt-6 ' >
            <p className=' text-sm px-4 py-2 sm:text-xs text-gray-200 hover:text-rose-400  '>پیشتیبانی</p>
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

export default Drawer;
