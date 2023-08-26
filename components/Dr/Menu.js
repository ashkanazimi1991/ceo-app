import React, { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from './Drawer';
import Image from 'next/image';
import Link from 'next/link';


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
    };
    const handleClose = () => {
      setIsOpen(false);
    };
  return (

<div>
    
   {/*  background.........     */}
      

<div className='bg-[#080b28d8] fixed w-full z-30 '>
    
    {/*Header .......................  */} 
    <div className='flex justify-between h-14 outline outline-1 outline-cyan-500 bg-[#0b0c12e1] w-full items-center px-[2%]'>
       
    <Link href='/dr/dr_department' >
       
        <div className='flex space-x-2  items-center'>
            <Image className='w-10 object-contain ' width='100' height='100'  alt='online ceo'
             src='/images/dr_logo.png'/>
            <p className='text-xl font-bold sm:text-sm md:text-md text-gray-300'>Pasteur Dr Department</p>
        </div>
    </Link>
       {/* drawer........................ */}
        <button onClick={handleOpen}>
         <RiMenuUnfoldFill className='text-white text-2xl mx-4'/>
        </button>
           <Drawer isOpen={isOpen} onClose={handleClose} />
        </div>




    <div className='px-12 md:px-6 sm:px-3 bg-[#0b0c12e1] flex flex-col  '>
   
    {/* search.......... */}
        <div className='w-full pt-5 pb-3  md:pb-2 sm:pb-2 space-x-2  flex justify-center'>

            <input type='text'   className='  h-12 text-xs w-full px-2  bg-[#0b0c12e1] text-gray-200 text-right 
             rounded-md border-2 border-gray-700 ' placeholder=' جستجو با نام پزشک یا تخصص' >
            </input>
              
        

        </div>

    </div>
    </div>
   
   
    
    

</div>
  )
}
export default Menu;