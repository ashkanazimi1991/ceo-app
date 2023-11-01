import React from 'react';
import Link from 'next/link'
import SliderOne from '../cardslider/sliderone';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import Header from '../Header/Header';

import img2 from '../../public/images/2.png'
import img3 from '../../public/images/96.png'
import img4 from '../../public/images/dd.png'



function HeroTurkish() {
  return (
    <div className='  w-full h-screen '>
    <Header/>
    <Image
             className=" fixed -z-20 o  object-cover h-screen "
             src="/images/HeroSpace.webp"
             width='4377'
             height='2043'
             alt="onlineceo"
            />

<Image
             className=" fixed -z-10  animate-pulse bottom-0 object-contain  "
             src="/images/spaceStart.webp"
             width='4377'
             height='2043'
             alt="onlineceo"
            />
      
      <div className=' w-full  flex flex-col justify-center h-screen '>
       
       <div className='flex flex-col justify-center  h-full   '>
           <div className='  '>
           <h1 className='text-gray-200 leading-loose text-5xl md:text-2xl  font-bold 
          text-center'>ONLINE CEO <br></br> Developers Community</h1>
               
               <p className='text-[#999999] leading-8 text-center text-md py-4 sm:pt-5 px-[5%] '>
               CEO Developers tarafından kendi girişiminiz, işiniz veya portföyünüz için güçlü platformlar oluşturun.   
               </p>
           </div>

             {/* button col */}
     

           <div className='flex  justify-center w-full'>
             <Link href="/contactUs">
               <div className=' shadow-2xl shadow-[#994dacbe] bg-[#3e1a6e44] mr-2 rounded-lg'>
                 <h3 className='text-gray-100 animate-bounce    shadow-slate-100 px-5 py-2  '>
                 bize Ulaşın
                 </h3>

               </div>
             </Link>
             <Link href="/galleryT" >
                   <h3 className='text-[#4ca8cc]  shadow-xl bg-[#00000044] text-center  animate-pulse rounded-lg  px-5 py-2'>Projeleri görüntüle</h3>
             </Link>
           </div>

     </div>

<div className='  bottom-0'>
   <SliderOne   
   img1='/images/js.png' img2='/images/python.png' img3='/images/c++.png' img4='/images/android.png' img5='/images/apple.png' img6='/images/windos.png'
   img7='/images/arduino.png' img8='/images/RaspberryPi.png' img9='/images/react.png' img10='/images/dj.png'
  //  title1='' title2='' title3='' title4='' title5='' title6=''
   />
     
</div>
           
 </div>
    

  
    </div>
  )
}

export default HeroTurkish;
