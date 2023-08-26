import React from 'react';
import Link from 'next/link'
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import SliderOne from '../cardslider/sliderone';
// import Map from '../Map/Map'


// import dynamic from "next/dynamic";

// const SliderOne = dynamic(() => import('../cardslider/sliderone'))


import img2 from '../../public/images/2.png'
import img3 from '../../public/images/96.png'
import img4 from '../../public/images/dd.png'


function Hero() {
  return (
    <div className='h-screen bg-[#000000a8]'>

          <Image
             className=" fixed -z-20  w-[100%] md:w-screen object-cover h-full 
              opacity-100 sm:opacity-100"
             src="/images/bb.webp"
             width='1200'
             height='800'
             alt="CEO"
            />
      
      <div className='flex flex-row lg:flex-col h-screen'>
        {/*  main left div............................................................................................
        ............................................................................................................. */}

        <div className=' w-2/6 sm:w-full md:w-full min-h-screen'>
          {/* top div................................................................................................. */}
          <div className='flex flex-col h-2/5 '>

            {/* logo */}
            <div className='flex flex-col justify-center p-5 bg-[#040f14e1] w-full h-[100%]'>
                 <Image  src={img2}  alt="logo" width='150' height='150'
                 className=" max-h-32 w-[100%] object-contain "/>
                 <a aria-label='CEO Developers Community'>
                  <h1 className='text-gray-400 text-xl font-bold text-center'>
                  CEO Developers Community 
                  </h1>
                 </a>
            </div>
           {/* button col */}
            <div className='flex justify-center '>
            <div className='bg-[#1c5f7b] w-[100%] '>
                    <Image  src={img3} height='50' width='50' alt="onlin ceo" 
                      className=" max-h-20 p-4 sm:p-3  sm:max-h-16 w-[100%] object-contain  "/>   
                    <div className='flex lg:flex-col md:flex-row justify-center  '>
                      <a aria-label='Web Development' >
                        <h1 className='text-center text-[#fdfdfd] text-xl md:text-sm 2xl:text-lg lg:text-sm drop-shadow-4xl xl:text-sm pb-2 '>
                             Web Development</h1>
                      </a>
                    </div>
                    
                </div>

                <div className='bg-gray-600 w-[100%] '>
                    <Image  src={img4} height='50' width='50'  alt="onlin ceo"
                   className=" max-h-20 p-4 sm:p-3  sm:max-h-16 w-[100%] object-contain  "/>  
                    <div className='flex flex-row lg:flex-col md:flex-row justify-center '>
                    <a aria-label='Web Development' >
                        <h1 className='text-center text-white drop-shadow-4xl  text-xl 
                        sm:text-sm md:text-sm 2xl:text-lg lg:text-sm xl:text-sm pb-2'>
                           App Development </h1>
                    </a>

                    </div>
                    
                </div>

            </div>
        </div>

          {/* bottom div ............................................................................................... */}
              <div className='flex flex-col justify-around pt-[10%] bg-[#040f14e1] h-3/5 '>
                      <h1 className='text-white  tracking-widest  pl-8 lg:pl-6 text-3xl sm:text-md  pt-10 '>
                        Welcome</h1>
                        <a aria-label=' Build powerful platforms for your own startup, business or portfolio by CEO Developers' >
                      <p className='text-[#999999] text-md py-4 sm:pt-5 px-[5%] sm:text-sm'>
                        Build powerful platforms for your own startup, 
                        business or portfolio by CEO Developers.   
                      </p>
                      </a>
                  <div className='flex flex-row justify-center w-full'>
                    
                    <Link href="/contactUs">
                      <h1 className='text-gray-400 border px-5 py-2 
                      rounded-md mr-5 sm:text-sm'>Contact Us</h1>
                    </Link>
                 

                    <Link href="/gallery">
                          <h1 className='text-[#4ca8cc] px-5 py-2 border rounded-md sm:text-sm '>Explore in Projects </h1>
                    </Link>
                  </div>

      <div className=' flex justify-center items-center '>
          <SliderOne   
          img1='/images/js.png' img2='/images/python.png' img3='/images/c++.png' img4='/images/android.png' img5='/images/apple.png' img6='/images/windos.png'
          img7='/images/arduino.png' img8='/images/RaspberryPi.png' img9='/images/react.png' img10='/images/dj.png' />
      </div>
        <div className='z-20 ' >
          <Navbar/>
        </div>
            </div>
        </div>
        {/* main right div */}
        <div className='w-4/6 h-full flex flex-col  md:w-screen sm:hidden
         bg-[#0000003d] '>
          {/* <Map/> */}
        </div>
      </div>
    
    

  
    </div>
  )
}

export default Hero;


