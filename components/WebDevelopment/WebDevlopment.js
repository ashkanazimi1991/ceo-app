import React from 'react';
import Slider from '../slider/slider';
import { GoChevronRight } from "react-icons/go";

export default function WebDevlopment() {
  return (
    <div className='h-screen flex flex-row md:flex-col'>
        {/* left............................... */}
        <div className='flex flex-col  justify-around container h-screen   space-y-9  w-2/5 
         md:w-screen bg-black '>
          
          
          
           <div >
           <h1 className= ' text-white text-center text-3xl py-10'>
              Web Development
            </h1>
            <div className=' bg-green-400'>
            <Slider  />

            </div>
           </div>




          <div className='grid grid-cols-3 divide-x'>

            <h1 className= ' text-white text-center '>
              Android
            </h1>
             
            <h1 className= ' text-white text-center '>
              IOS
            </h1>

            <h1 className= ' text-white text-center '>
              Windows
            </h1>
          </div>





          

          





          <div className='flex cursor-pointer pb-10  z-20 '>
            <h1 className='text-white w-full bg-[#040f14e1] text-center border mx-[15%] 
            rounded-lg py-3'> 
            Order</h1>
          </div>
            {/* <GoChevronRight className=' self-start  absolute   text-4xl animate-pulse text-white'/> */}
    
        </div>


        {/* right............................. */}
        <div className=' container  bg-[#040f14e1] h-sceen w-3/5 md:w-screen  '>
            <div className=' grid grid-flow-col gap-14   overflow-y-scroll
              h-screen w-[100%]'>
            
              <div className='ml-8 col-span-12 sm:col-span-8 h-full'>
                  <div className='flex  flex-col h-[100%] justify-center 
                  bg-[#0000007c]'>
                    <h1 className='text-gray-400 text-3xl 2xl:text-lg  font-bold 
                    text-center'>CEO Developers Coummnity</h1>
                      <img  src="./images/1.png"  alt="logo"
                       className="    w-[100%] object-cover "/>
                   </div>
              </div>


              <div className=' col-span-12 sm:col-span-8 h-full'>
                  <div className='flex  flex-col h-[100%] justify-center 
                  bg-[#0000007c]'>
                    <h1 className='text-gray-400 text-3xl 2xl:text-lg  font-bold 
                    text-center'>CEO Developers Coummnity</h1>
                      <img  src="./images/1.png"  alt="logo"
                       className="    w-[100%] object-cover "/>
                   </div>
              </div>


              <div className=' col-span-12 sm:col-span-8 h-full'>
                  <div className='flex  flex-col h-[100%] justify-center 
                  bg-[#0000007c]'>
                    <h1 className='text-gray-400 text-3xl 2xl:text-lg  font-bold 
                    text-center'>CEO Developers Coummnity</h1>
                      <img  src="./images/1.png"  alt="logo"
                       className="    w-[100%] object-cover "/>
                   </div>
              </div>



              <div className=' col-span-12 sm:col-span-8 h-full'>
                  <div className='flex  flex-col h-[100%] justify-center 
                  bg-[#0000007c]'>
                    <h1 className='text-gray-400 text-3xl 2xl:text-lg  font-bold 
                    text-center'>CEO Developers Coummnity</h1>
                      <img  src="./images/1.png"  alt="logo"
                       className="    w-[100%] object-cover "/>
                   </div>
              </div>






                  

              



              

              

            </div>




        </div>
            
        
    
    
    
    </div>
    
  )
}
