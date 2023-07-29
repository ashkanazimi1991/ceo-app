import React from 'react'
import Image from 'next/image'
//  import { BsSearchHeart} from 'react-icons/bs';
import { BiShoppingBag} from 'react-icons/bi';
import { HiMenuAlt3, HiArrowNarrowRight} from 'react-icons/hi';


const RestaurantHeaderP = () => {
  return (
    <div className='fixed z-50 w-full'>
    
    <div className='flex space-x-14 bg-[#eceaeae0] w-full h-20'>
        {/* logo..................... */}
    <div className=' w-full flex justify-center items-center'>
    <Image className='w-20'
    width="100" height="100" alt='onlineceo'
    src="/images/rlogo.png"/>
    <p className='text-gray-800 text-lg sm:hidden sm:text-sm font-bold'>ITALIAN RESTURANT</p>
    </div>
    {/* menu .................... */}
    <div className=' w-full flex justify-evenly md:hidden space-x-2 items-center'>
      <p className='text-gray-800 text-md'>منو</p>
      <p className='text-gray-800 text-md'>شعبه ها</p>
      <p  className='text-gray-800 text-md'>درباره ما</p>
      <p className='text-gray-800 text-md'>ارتباط با ما</p>
      {/* <BsSearchHeart className='text-gray-800 ml-4 text-xl'/> */}
    </div>
    {/* btn........................... */}
    <div className=' w-full flex justify-around  items-center px-[5%]'>
    <BiShoppingBag className='text-gray-800 text-2xl mx-4'/>
    {/* <p className='text-gray-800 whitespace-nowrap md:hidden'>ثبت نام / ورود</p> */}
    <div className='bg-orange-500 rounded-2xl mx-2 shadow-xl flex justify-around items-center'>
      <p className=' p-3 whitespace-nowrap text-gray-200  '>ثبت نام / ورود</p>
      <HiArrowNarrowRight className='text-gray-200 mr-2 text-2xl'/>

    </div>

   <HiMenuAlt3 className='text-gray-800 ml-4 hidden md:block text-2xl'/>
    </div>
    

    {/* .................................................. */}
    </div>
    </div>
   
  )

}

export default RestaurantHeaderP;