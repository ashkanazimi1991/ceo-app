import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import { BsCalendarDate } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';




import DrawerFront from '../Dr_admin/DrawerFront';
import Image from 'next/image'

const Hero_clinic = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
    
    
    return (
      <div  className= 'min-h-screen flex flex-col justify-center items-center '>
            <Image
             className=" fixed bottm-0 -z-20 bg-top w-full md:h-full min-h-screen   object-cover brightness-50
              opacity-100 "
             src="/images/mentalbg.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />
      {/* menu */}
      <div className='z-20 px-2 fixed w-full  bg-slate-900 shadow-2xl top-0 '> 
<div className='flex justify-between items-center'>
<Link href='/drappPersian' >
    <div className='flex items-center'>
    <Image  src='/images/2.png'  alt="logo" width='50' height='50'
                 className=" max-h-16 w-[100%] py-2 object-contain "/>
    <h3 className='text-gray-400 text-xs pl-2  whitespace-nowrap'>CEO Developer <br></br> Community</h3>
    </div>
    </Link>


   <div className='flex   items-center'>
   <Link href='/contactUsPersian' >
    <p className='py-2 my-2 text-white hover:text-green-400 cursor-pointer text-xs border-dashed border-2 border-sky-500 rounded-xl  px-2'>ثبت سفارش</p>
   </Link>
   
   
   <div>
         
          <button onClick={handleOpen}>
          <RiMenuUnfoldFill className='text-white text-2xl mx-4'/>
          </button>
          <DrawerFront isOpen={isOpen} onClose={handleClose} />
   </div>
   
   
    
    </div> 
    

    

</div>
</div>
        {/* /menu */}
        <div className='flex flex-row-reverse px-[10%] lg:px-[5%] md:px-[2%] md:flex-col-reverse py-[8%] md:pt-20 '>
          
          <div className=' w-full flex   flex-col justify-center items-center  px-[2%]  md:w-full '>
         <div className='flex  w-full items-center justify-center  py-2 '>
            <p className='  whitespace-nowrap text-right w-full text-2xl  text-blue-100 '>
                کلینیک روانشناسی
            </p>
          <Image src='/images/heartIcon.gif' width='100' height='100' alt='onlineceo' className='w-12 drop-shadow-txl   object-contain'/>
          </div> 
   
        
      
        
          {/* <p className=' text-right text-sm px-[5%] text-gray-100 leading-8 py-4'>
          فارغ التحصیل رشته اینترونشنال کاردیولوژی در ۱۳۹۱ از دانشگاه علوم پزشکی شهید بهشتی دوران پزشکی عمومی در دانشگاه شهید پزشکی بهشتی و دوره دستیاری را در دانشگاه علوم پزشکی اصفهان گذرانده است وی در حال حاضر بیمارستان‌های غرضی و مرکز قلب سعدی مشغول به کار  و ارائه خدمات می باشد.
          </p> */}

          <div className="flex justify-around space-x-2">
         
         <Link href='' >
          <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
            rounded items-center py-1 ' >
           <BsCalendarDate className="text-2xl mx-2 text-rose-100 hover:text-green-400" />
           <p className='text-gray-100 text-md px-4 py-2 text-bold sm:text-xs whitespace-nowrap'>  دریافت نوبت</p>
          </div>
          </Link>

          <Link href='' >
          <div className='flex justify-around py-1 border-2 border-blue-200 hover:border-green-400 cursor-pointer
            rounded items-center  ' >
           <FiLogIn className="text-2xl mx-2 text-rose-100 hover:text-green-400" />
           <p className='text-gray-100 text-md px-4 py-2 text-bold sm:text-xs whitespace-nowrap'>   ورود / ثبت نام </p>
          </div>
          </Link>

        

       </div>

        </div>
        <div className='w-1/2 flex justify-center    md:w-full'>
        
        </div>
        </div>
    </div>
  )
}

export default Hero_clinic