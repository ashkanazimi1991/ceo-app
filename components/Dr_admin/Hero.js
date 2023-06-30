import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import DrawerFront from './DrawerFront';
import Image from 'next/image'

const psychology = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
    
    
    return (
      <div  className= ' '>
            <Image
             className=" fixed bottm-0 -z-20  w-full md:h-full  object-cover brightness-50
              opacity-100 "
             src="/images/dr_bg.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />
      {/* menu */}
      <div className='fixed z-10 bg-blue-200  w-full'>
        <div className=' flex items-center    justify-between  '>
        <Link href='/drappPersian'>
            <div className='flex justify-center items-center'>
            <Image src='/images/barsad.png' width='100' height='200' alt='psychology' className=' scale-100 hover:scale-110 pl-4 rounded-xl object-contain'/>
            <p className='text-gary-400 sm:hidden tex-xs leading-4'>BARSAD<br></br>Psychology</p>
            </div>
        </Link>
         <div className=' flex md:hidden '>
            <div>
                <Link href='/'>
                    <p className=' text-gray-700 p-2 text-sm '>صفحه اصلی</p>

                </Link>
            </div>
            <div>
                <Link href='/'>
                    <p className=' text-gray-700 p-2 text-sm '>تست ها</p>

                </Link>
            </div>
            <div>
                <Link href='/'>
                    <p className=' text-gray-700 p-2 text-sm'>مقالات</p>

                </Link>
            </div>
            <div>
                <Link href='/'>
                    <p className=' text-gray-700 p-2 text-sm'>درباره ما</p>

                </Link>
            </div>
            
         </div>
         <div className=' flex p-2 '>
         <div>
                <Link href='/'>
                    <p className=' text-purple-500   text-xs rounded border md:hidden border-gray-400 px-4 py-2'> ارتباط با ما</p>

                </Link>
         </div>
         <div>
                <Link href='/'>
                    <p className=' bg-black text-gray-200 mx-2 text-xs rounded whitespace-nowrap  px-4 py-2'>ثبت نام / ورود</p>

                </Link>
            </div>

{/* drawer BTN.......................... */}
            <div className='hidden md:block items-center my-1 justify-center'>
                <button onClick={handleOpen}>
                <RiMenuUnfoldFill className='text-black text-2xl mx-4'/>
                </button>
                <DrawerFront isOpen={isOpen} onClose={handleClose} />
             </div>
{/* drawer BTN.......................... */}
            
         </div>
            
        </div>

      </div>
        {/* /menu */}
        <div className='flex flex-row-reverse px-[10%] lg:px-[5%]  md:px-[2%] md:flex-col py-40 p-10'>
        <div className=' w-1/2 flex flex-col justify-center items-center  px-[2%]  md:w-full '>
          <p className=' py-2 text-center w-full bg-blue-100 shadow-xl rounded-lg text-purple-500 '>
            کلینیک روانشناسی سرشت برساد
          </p>
          <p className='text-center text-blue-300 text-lg py-4'>
            مشاور سلامت ذهنی شما
          </p>
        
          <p className=' text-center text-xs text-gray-200 leading-8 pb-4'>
          کلینیک مشاوره روانشناسی سرشت برساد ارائه دهنده خدمات مشاوره روانشناسی حضوری و مجازی با بیش از100 متخصص در حوزه های مختلف روانشناسی آماده ارائه خدمات مشاوره تلفنی و حضوری به مشتریان می باشد
          </p>

        </div>
        <div className='w-1/2   shadow-2xl   md:w-full'>
        <Image src='/images/s2.jpg' width='700' height='700' alt='onlineceo' className='w-full h-full transition delay-150 duration-300 ease-in-out scale-100 hover:scale-110 rounded-xl object-cover'/>
        </div>
        </div>
    </div>
  )
}

export default psychology