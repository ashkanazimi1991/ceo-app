import React from 'react';
import Image from 'next/image';
import { BiCurrentLocation} from 'react-icons/bi';
import VSlider from '../Restaurant/VSlider'
import VSlider2 from '../Restaurant/Vslider2'

 
const RestaurantHeroP = () => {
  return (
    <div className='bg-[#000000b0]'>
{/* bg............................................ */}
    <div>
        <Image className='fixed w-full object-cover min-h-screen  -z-10'
          width="1200" height="600" alt='fooddish'
          src="/images/food101.jpg"/>
        </div>
{/* bg............................................ */}

 <div className='w-full min-h-screen  md:space-y-8  flex flex-row-reverse '>
      <div className='w-full py-24  pl-[5%] flex flex-col items-start justify-center'>
      <h2 className='text-center w-full font-extrabold leading-loose md:leading-normal text-2xl  text-gray-200'>
          طمعی بی نظیر <br></br> محیطی دل نشین</h2>

        <p className='w-full leading-8 mt-8 text-center text-md text-gray-400 px-2'>
        رستوران ایتالیایی نیوشا در سال 1390جز 50 رستوران برتر شناخته شده  و موفق به اخذ لوح تقدیر و تندیس گردید          </p>
      {/* btn...................... */}
      <div className='mt-6 flex justify-center items-center space-x-4  w-full '>
        <p className='bg-orange-500 text-gray-300 px-4 py-3 whitespace-nowrap   rounded-3xl'>مشاهده منو</p>
        
        <div className='flex items-center space-x-4 border border-orange-500 px-4 py-1 rounded-3xl  '>
        <p className='text-md font-bold text-orange-500 whitespace-nowrap md:py-2 '>تحویل در محل</p>
        <div className='  p-2 '>
        <BiCurrentLocation className='text-orange-500 text-2xl'/>
        </div>
        </div>
      </div>
        <VSlider   
          img1='/images/food6.png' img2='/images/food6.png' img3='/images/food6.png' img4='/images/food6.png' img5='/images/food6.png' img6='/images/food6.png'
           />
        </div>
      {/* btn.......................... */}
      </div>

      {/* images.............. */}
      <div className='w-full grid grid-cols-4 '>
        <div className='flex  col-span-2 h-full items-center'>

        <div className='flex  col-span-2 h-full items-center'>
        {/* <VSlider2   
          img1='/images/food5.png' img2='/images/food5.png' img3='/images/food5.png' img4='/images/food5.png' img5='/images/food5.png' img6='/images/food5.png'
           /> */}
        </div>


    
        
      </div>


      {/* images......................... */}
      </div>


    </div>
   
  )
}
export default RestaurantHeroP;