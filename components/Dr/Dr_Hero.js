import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import dynamic from 'next/dynamic';


import HeroSlider from './HeroSlider';
import Hero_Slider02 from './Hero_Slider02';
import Slider1 from './Slider1';

// const Drnav = dynamic(() => import('../components/Drnav'))




const Dr_Hero = () => {
  return (
    <div className='min-h-screen bg-[#00000086] w-full'>
           {/* background asli..................................................................... */}
       <div className='fixed top-0 -z-10'>
         <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-full h-screen "  >
             <source   src="/video/v04.mp4"   type="video/mp4"  />
             <meta name="apple-mobile-web-app-capable" content="yes">

             </meta>
                Your browser does not support the video tag.
            </video>        
          </div>
<div className='flex  h-full  w-full flex-col space-y-8 justify-center items-center  '>
    
    <p className='text-gray-200 pt-[14%] sm:pt-[25%]  text-md '>کلینیک و ساختمان پزشکان پاستور</p>
    <p className='text-gray-300 text-sm'>ارائه دهنده خدمات تخصصی درمانی</p>




<div className='w-full flex flex-col  justify-center items-center space-y-8 z-40 px-[15%] md:px-10 sm:px-4'>
          <HeroSlider/>
     

          <Hero_Slider02/>


</div>



{/* -----------------nav------------------------------- */}









          <div className=' flex w-full    justify-center items-center '>
          <Link href='/dr/dr_department_member' >     
              <button type="button" className='flex z-10 justify-around items-center outline outline-1 outline-cyan-500 bg-[#0e113452]  px-3 w-60 rounded-md ' >

              <p className='text-md  font-bold text-gray-300' >   مشاهده پزشکان </p>

              <Image className='w-10 object-contain ' width='100' alt='online ceo'
              height='100' src='/images/dr_hero_icon.gif'/> 
              </button>
              </Link>

        
        </div>  



    {/* slider............................................................................... */}
        <div className=' w-full px-[15%]  md:px-10  flex justify-around md:justify-around items-center space-x-4 md:space-x-0 py-20 md:flex-col md:space-y-8'>

            <div className='w-2/4 md:w-full felx  justify-center items-center outline outline-1 outline-cyan-500 rounded-md    '>
              <Slider1/>
            </div>



    {/* location.............................................................................. */}

            <div className='outline outline-1   outline-cyan-500 flex  md:w-full justify-end items-center rounded-md'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.0010847953853!2d45.074636676064515!3d37.531394993748506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400553e9a50d4db9%3A0xd560db1a9059ff21!2z2LTYsdqp2Kog2K_Yp9mG2LQg2KjZhtuM2KfZhiDZhdiv24zYsSDYotmG2YTYp9uM2YY!5e0!3m2!1sen!2sde!4v1692372294474!5m2!1sen!2sde"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="full" height="200" className=" outline outline-1 outline-cyan-500   md:w-full 
            sm:h-44 md:h-72 h-96 brightness-50 hover:brightness-100 rounded-md delay-150  "   ></iframe>




              
            </div>

      </div>

</div>
{/* -----------------nav------------------------------- */}


    </div>
  )
}

export default Dr_Hero