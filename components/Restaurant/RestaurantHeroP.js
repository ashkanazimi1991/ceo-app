import React from 'react';
import Image from 'next/image';
import { BiCurrentLocation} from 'react-icons/bi';
import VSlider from '../Restaurant/VSlider'
import VSlider2 from '../Restaurant/Vslider2'

 
const RestaurantHeroP = () => {
  return (
    <div>
{/* bg............................................ */}
    <div>
        <Image className='fixed w-full object-cover min-h-screen -z-10'
          width="1200" height="600" alt='fooddish'
          src="/images/food101.jpg"/>
        </div>
{/* bg............................................ */}

 <div className='w-full min-h-screen md:flex-col md:pt-18 md:space-y-8  flex flex-row-reverse '>
      <div className='w-[45%] md:w-full py-24 bg-[#000000b0] pl-[5%] flex flex-col items-start justify-center'>
      <h2 className='text-center font-extrabold leading-loose md:leading-normal text-4xl  text-gray-500'>
          BEST FOOD FOR <br></br> YOUR TASTE</h2>

        <p className=' leading-8 mt-8 text-left text-md text-gray-400 pr-[15%]'>synergistcall network frictionless interfaces via timely functionalites. holisticly pursue e-business methods of ompowerment</p>
      {/* btn...................... */}
      <div className='mt-6 flex justify-center items-center space-x-4 '>
        <p className='bg-orange-500 font-bold px-4 py-3 whitespace-nowrap  rounded-3xl'>GET STARTED</p>
        
        <div className='flex items-center space-x-4 border border-orange-500 px-4 py-1 rounded-3xl  '>
        <p className='text-md font-bold text-orange-500 whitespace-nowrap md:py-2 '>YOUR LOCATION</p>
        <div className=' border md:hidden  border-orange-500 rounded-full p-2 '>
        <BiCurrentLocation className='text-orange-500 text-2xl'/>
        </div>
        </div>
      </div>
      {/* btn.......................... */}
      </div>

      {/* images.............. */}
      <div className='w-[55%] md:w-full grid grid-cols-4 '>
        <div className='flex  col-span-2 h-full items-center'>
        <VSlider   
          img1='/images/food6.png' img2='/images/food6.png' img3='/images/food6.png' img4='/images/food6.png' img5='/images/food6.png' img6='/images/food6.png'
           />
        </div>

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