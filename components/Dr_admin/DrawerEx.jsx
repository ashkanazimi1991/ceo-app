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


const DrawerEx = ({ isOpen, onClose }) => {
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
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div
          ref={drawerRef}
          className={`w-screen max-w-md transform transition ease-in-out duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="h-full bg-[#142028] shadow-lg overflow-y-auto p-4">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
              <AiFillCloseCircle className="text-4xl  text-red-900" />
            </button>
           

            <div className="flex  flex-col justify-center pt-10 items-center h-full">
            <p className='text-gray-400 my-4 w-full py-4 border-b-2 border-gray-700'> رادیولوژی و ام ار ای</p>
                <div className='grid grid-cols-3 gap-4 '>
           
                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/mriww.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in   border-b-2 border-gray-700 object-cover "/>
                  </div>
                  
            

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/xray.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in   border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/mri1.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/mri1.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/mri1.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>
                </div>


                <p className='text-gray-400 my-4 w-full py-4 border-b-2 border-gray-700'>پاتولوژی</p>
                <div className='grid grid-cols-3 gap-4'>
                <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/ptest.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/ptest.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                  <Image  src='/images/ptest.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>


          
           
                </div>
     

                <p className='text-gray-400 my-4 w-full py-4 border-b-2 border-gray-700'>سایر آزمایشها</p>
                <div className='grid grid-cols-3 gap-4'>
     <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                   <Image  src='/images/ctest.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                   <Image  src='/images/ctest.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                  <div className='border border-gray-600 flex flex-col-reverse w-34 h-24 my-2 rounded-xl curser'>
                    <p className='text-gray-100 text-xs py-2'>1402/02/20</p>
                   <Image  src='/images/ctest.jpg'  alt="logo" width='250' height='250'
                 className="w-34 h-24  w-full rounded-xl cursor-zoom-in  border-b-2 border-gray-700 object-cover "/>
                  </div>

                </div>

        


            </div>


          </div>
        </div> 
      </div>
    </div>
  );
};

export default DrawerEx;
