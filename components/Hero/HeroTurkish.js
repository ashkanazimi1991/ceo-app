import React from 'react';
import Link from 'next/link'
import SliderOne from '../cardslider/sliderone';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';

import img2 from '../../public/images/2.png'
import img3 from '../../public/images/96.png'
import img4 from '../../public/images/dd.png'



function HeroTurkish() {
  return (
    <div className='  w-full h-screen bg-[#000000a8]'>

<Image
             className=" fixed -z-20  w-[100%] md:w-screen object-cover h-full 
              opacity-100 sm:opacity-100"
             src="/images/bb.webp"
             width='1200'
             height='800'
             alt="CEO"
            />
      
      <div className='flex flex-row md:flex-col w-full h-screen'>
        {/*  main left div............................................................................................
        ............................................................................................................. */}

        <div className=' w-2/6 sm:w-screen md:w-screen  min-h-screen'>
          {/* top div................................................................................................. */}
          <div className='flex flex-col h-2/5 '>

            {/* logo */}
            <div className='flex flex-col justify-center p-5 bg-[#040f14e1] w-full h-[100%]'>
            <Image  src={img2}  alt="logo" width='150' height='150'
                   className=" max-h-32 w-[100%] object-contain "/>
                 <h1 className='text-gray-400 text-xl font-bold text-center'>
                 CEO Geliştiriciler Topluluğu</h1>
            </div>
           {/* button col */}
           <div className='flex justify-center '>
            <div className='bg-[#1c5f7b] w-[100%] h-full'>
            <Image  src={img3} height='50' width='50' alt="onlin ceo" 
                 className=" max-h-20 p-6 sm:p-3  sm:max-h-16 w-[100%] object-contain  "/>             
                  <h1 className='text-center text-[#fdfdfd] text-xl md:text-sm 2xl:text-lg lg:text-sm drop-shadow-4xl xl:text-sm pb-2'>
                   WEB GELİŞTİRME </h1>   
            </div>

            <div className='bg-gray-600 w-[100%] h-full'>
                <Image  src={img4} height='50' width='50' alt="onlin ceo" 
                  className=" max-h-20 p-6 sm:p-3  sm:max-h-16 w-[100%] object-contain  "/>   
                  <h1 className='text-center text-white drop-shadow-4xl  text-xl 
                         sm:text-sm md:text-sm 2xl:text-lg lg:text-sm xl:text-sm pb-2' >
                           YAZILIM GELİŞTİRME
                  </h1>
                </div>

            </div>
        </div>







          {/* bottom div ............................................................................................... */}

              <div className='flex flex-col justify-around pt-[5%] bg-[#040f14e1] h-3/5 '>
                      <h1 className='text-white   tracking-widest  pl-6
                      text-2xl pt-10 sm:text-4xl'>Hoş  geldiniz</h1>
                      <p className='text-[#999999] text-lg py-4 sm:pt-5 px-[5%]  '>
                        CEO Developers tarafından kendi girişiminiz, işiniz veya portföyünüz için güçlü platformlar oluşturun. 
                      </p>
              

                  <div className='flex flex-row justify-center w-full'>
                    <Link href="/contactUs">
                      <h1 className='text-gray-400 border px-5 py-2 
                      rounded-md mr-5'>Bize Ulaşın</h1>
                    </Link>
                    <Link href="/galleryT">
                          <h1 className='border px-5 py-2 text-center rounded-md text-[#4ca8cc] '>
                            projede keşfet  </h1>
                    </Link>
                  </div>


            

      <div className=' relative bottom-0'>
          <SliderOne   
          img1='/images/js.png' img2='/images/python.png' img3='/images/c++.png' img4='/images/android.png' img5='/images/apple.png' img6='/images/windos.png'
          img7='/images/arduino.png' img8='/images/RaspberryPi.png' img9='/images/react.png' img10='/images/dj.png'
         //  title1='' title2='' title3='' title4='' title5='' title6=''
          />
            
      </div>
        <div className='z-20 ' >
          <Navbar/>
        </div>
            </div>


         

                  
        </div>
        
        {/* main right div */}
        <div className='w-4/6 h-full flex flex-col  md:w-screen sm:hidden
         bg-[#0000003d] '>

   
       
      

       
             

        
        </div>
      </div>
    
    

  
    </div>
  )
}

export default HeroTurkish;
