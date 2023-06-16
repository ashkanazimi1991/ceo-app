import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import SliderOne from '../cardslider/sliderone';
import Navbar from '../Navbar/Navbar';
import img2 from '../../public/images/2.png'
import img3 from '../../public/images/96.png'
import img4 from '../../public/images/dd.png'


function HeroPersian() {
  return (
    <div className='w-full h-screen bg-[#000000a8]'>

            <Image
             className=" fixed -z-20  w-[100%] md:w-full object-cover h-full 
              opacity-100 sm:opacity-100"
             src="/images/bb.webp"
             alt="CEO"
             width='1200'
             height='800'
            />
      
      <div className='flex  flex-row-reverse md:flex-col w-full min-h-screen'>
        {/*  main left div............................................................................................
        ............................................................................................................. */}

        <div className='w-2/6 md:w-screen h-screen'>
          {/* top div................................................................................................. */}
          <div className='flex flex-col h-2/5 '>

            {/* logo */}
            <div className='flex flex-col justify-center p-5 bg-[#040f14e1] w-full h-[100%]'>
                 <Image  src={img2}  alt="logo" width='150' height='150'
                 className=" max-h-32 lg:max-h-20 md:max-h-32 w-[100%] object-contain "/>
                 <h1 className='text-gray-400 text-xl 2xl:text-lg  font-bold 
                 text-center'>CEO Developers Community</h1>
            </div>
           {/* button col */}
            <div className='flex justify-center '>
            <div className='bg-[#1c5f7b] w-[100%] h-full'>
                      <Image  src={img3} height='50' width='50' alt="onlin ceo" 
                      className=" max-h-20 p-6 sm:p-3  sm:max-h-16 w-[100%] object-contain  "/>   
                    <div className='flex  md:flex-row justify-center '>
                        <h1 className='text-center pb-2 text-white text-lg drop-shadow-4xl'>
                         توسعه وب</h1>       
                    </div>
                    
                </div>

                <div className='bg-gray-600 w-[100%] h-full'>
                <Image  src={img4} height='50' width='50' alt="onlin ceo" 
                className=" max-h-20 p-6 sm:p-3  sm:max-h-16 w-[100%] object-contain  "/> 
                      <div className='flex flex-row lg:flex-col md:flex-row justify-center '>
                        <h1  className='text-center pb-2 text-white text-lg drop-shadow-4xl'>
                        توسعه نرم افزار </h1>
                       
                    </div>
                    
                </div>

            </div>
        </div>


          {/* bottom div ............................................................................................... */}
              <div className='flex flex-col justify-around pt-[5%] bg-[#040f14e1] h-3/5 '>
                  <div className=' px-[0%] '>
                     <h1 className='text-white   text-right pr-8 lg:pr-6
                      text-2xl  pt-10 '>
                        خوش آمدید</h1>
                      
                      <p className='text-[#999999] leading-10 text-right text-sm py-4 sm:pt-5 px-[5%] '>
                         مدیریت آنلاین اجرا کننده پلتفرم های یکپارچه برای 
                        ایده های استارت آپی , کسب و کار و اتوماسیون ها     
                      </p>
                  </div>

                  <div className='flex  justify-center w-full'>
                    <Link href="/contactUsPersian">
                      <h1 className='text-gray-400 border px-5 py-2 rounded mr-5'>
                        ارتباط با ما</h1>
                    </Link>
                    <Link href="/galleryP">
                          <h1 className='text-[#4ca8cc] pl-2 border rounded  px-5 py-2'>مشاهده پروژه ها</h1>
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

export default HeroPersian;
