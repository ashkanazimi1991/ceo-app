import React from 'react'
import Image from 'next/image'
import { AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin } from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'


 const RestaurantFooter = () => {
  return (
   
    <div className='flex md:flex-col-reverse justify-center items-center md:space-y-4 space-x-14 bg-yellow-50 w-full py-6 px-[10%]'>
        <div className='-600 w-1/3 md:w-full flex items-center justify-center '> 
        <Image className='w-20'
    width="100" height="100" alt='fooddish'
    src="/images/logo.png"/>
    <p className='text-gray-800 font-bold'>ITALIAN RESTURANT</p>
        </div>




        <div className=' w-1/3 flex md:w-full justify-center items-center '>
            <div className='grid-cols-2 grid gap-6'>
                <p className='text-gray-800'>Location</p>
                <p className='text-gray-800'>Menu</p>
                <p className='text-gray-800'>About</p>
                <p className='text-gray-800'>Contact</p>
                <p className='text-gray-800'>+ 623215668</p>
                <p className='text-gray-800'>pariyaghaderi766</p>
                <p className='text-gray-800'>pariyaghaderi766</p>
                <p className='text-gray-800'>pariyaghaderi766</p>
   
            </div>
        </div>

        
        <div className=' grid grid-cols-4 gap-4'>
           
            <div className='bg-orange-400 rounded-full p-1  flex justify-center items-center'>
                <AiFillInstagram className='text-xl'/>
            </div>
           
            <div className='bg-orange-400 rounded-full p-1  flex justify-center items-center'>
                <AiFillLinkedin className='text-xl'/>
            </div>
           
            <div className='bg-orange-400 rounded-full p-1  flex justify-center items-center'>
                <BsFacebook className='text-xl'/>
            </div>
          
            <div className='bg-orange-400 rounded-full p-1  flex justify-center items-center'>
                <AiFillTwitterCircle className='text-xl'/>
            </div>

        </div>
    </div>


    // LOGO........................

  )
}


export default RestaurantFooter;