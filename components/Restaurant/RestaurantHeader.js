import React from 'react'
import Image from 'next/image'
//  import { BsSearchHeart} from 'react-icons/bs';
import { BiShoppingBag} from 'react-icons/bi';
import { HiMenuAlt3} from 'react-icons/hi';


const RestaurantHeader = () => {
  return (
    <div className='fixed z-50 w-full'>
    
    <div className='flex space-x-14 bg-gray-100 w-full h-20'>
        {/* logo..................... */}
    <div className=' w-full flex justify-center items-center'>
    <Image className='w-20'
    width="100" height="100" alt='onlineceo'
    src="/images/rlogo.png"/>
    <p className='text-gray-800 text-lg sm:text-sm font-bold'>ITALIAN RESTURANT</p>
    </div>
    {/* menu .................... */}
    <div className=' w-full flex justify-evenly sm:hidden space-x-2 items-center'>
      <p className='text-gray-800 text-md'>CONTACT</p>
      <p className='text-gray-800 text-md'>LOCATION</p>
      <p className='text-gray-800 text-md'>MENU</p>
      <p  className='text-gray-800 text-md'>ABOUT</p>
      {/* <BsSearchHeart className='text-gray-800 ml-4 text-xl'/> */}
    </div>
    {/* btn........................... */}
    <div className=' w-full flex justify-around  items-center px-[5%]'>
    <BiShoppingBag className='text-gray-800 text-2xl'/>
    <p className='text-gray-800'>LOGIN</p>
    <p className='bg-orange-500 p-3 whitespace-nowrap sm:hidden rounded-2xl'>SIGN UP</p>

   <HiMenuAlt3 className='text-gray-800 ml-4 hidden sm:block text-2xl'/>
    </div>
    

    {/* .................................................. */}
    </div>
    </div>
   
  )

}

export default RestaurantHeader;