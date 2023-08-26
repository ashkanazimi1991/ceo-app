import React, { useState } from 'react'
import Image from 'next/image';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from './Drawer';
import Link from 'next/link';


const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
<div>    
<div className='fixed   w-full left-0 top-0 z-50  bg-[#05151ab2]  px-[2%]'>
  <div className='flex justify-between items-center h-14'>
          <Link href='/dr/dr_department_member' >
          <div className='flex space-x-2  items-center'>
              <Image className='w-10 object-contain ' width='100' height='100'  alt='online ceo'
              src='/images/dr_logo.png'/>
      
              <p className='text-xl font-bold sm:text-sm md:text-md text-gray-300'>Pasteur Dr Department</p>
          </div>
        </Link>
        
    

   
       {/* drawer............................................................................*/}

       <div className='flex justify-around items-center'> 
       <Link href='/contactUsPersian' >
              <button type="button" className='flex z-10 justify-around items-center outline outline-1 outline-cyan-500 bg-[#0e113452]  px-2 py-2  rounded-md ' >

              <p className='text-sm px-2  whitespace-nowrap text-gray-300' >  ثبت سفارش </p>

        
              </button>
              </Link>
        <button onClick={handleOpen}>
         <RiMenuUnfoldFill className='text-gray-300 text-3xl mx-2'/>
        </button>
           <Drawer isOpen={isOpen} onClose={handleClose} />

       </div>

        </div>
    </div>
</div>  
   
   
   
   
   
   
   
   )
   
   
   
}

export default Header;