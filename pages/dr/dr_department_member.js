import React from 'react';
import Image from 'next/image';
import Menu from '../../components/Dr/Menu';
import Head from 'next/head';
import {FiStar,FiMail,FiPhoneCall} from  'react-icons/fi';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,Box,
  AccordionIcon, ChakraProvider, extendTheme, 
} from '@chakra-ui/react'

import Link from 'next/link';
import Dr_Slider from '../../components/Dr/Dr_Slider';




const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})



const dr_department_member = () => {
  return (
    <div>
<Head>
        <title>  کلینیک پاستور</title>
        <meta name="description" content="استارت اپ پاستور" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/2.png" />
        <link rel='manifest' href='/manifest.json' />  
      </Head>
          <Image
             className=" fixed bottm-0 -z-20 bg-top w-full md:h-full min-h-screen   object-cover brightness-50
              opacity-100 "
             src="/images/drDepartment.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />



        <div className='bg-[#00000086] '>
            <div className='fixed top-0  -z-30'>
                 <Image className='fixed top-0 w-full min-h-screen object-cover' 
                      width='1200' height='1200'alt='online ceo'src='/images/bg04.jpg'/>
                    </div>
            <div className='flex flex-col'>



<div>
    <Menu/>
</div>

<div className=' py-60 sm:py-52 px-[10%]'>
    

<div className='flex w-full items-center py-6'>
    <Dr_Slider/>

</div>





    <ChakraProvider theme={theme}>
    <Accordion dir='rtl' allowToggle  width='full'>
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                       

                            <div className='flex justify-around items-center'>
                            طبقه اول
                                <p className='text-gray-300'>داروخانه و کالای پزشکی</p>
                            
                            </div>
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 py-6 sm:grid-cols-1 ">          


{/* .................................................................. */}          
<div className='relative  row-span-3 col-span-2 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/drDepartment20.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h2 className='text-sm text-center pt-1   text-gray-100'>ثبت سفارش آنلاین</h2>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>

                      </div>
                    
                 </div>
               

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

           {/* .................................................................. */}          
<div className='relative  row-span-3 md:col-span-2 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr100.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-1/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>تحویل در محل</h1>
                 
               
                      <div className='flex justify-center items-center py-1 sm:hidden w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>

                      </div>
                    
            
            

                  </button>   
              </Link>   
              </div>


</div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            <div className='flex justify-around items-center'>
                            طبقه دوم
                                <p className='text-gray-300'>آزمایشگاه - رادیولوژی</p>
                            
                            </div>
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 py-6 sm:grid-cols-1 ">          

{/* .................................................................. */}          
<div className='relative col-span-2 row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/lab01.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <p className='text-sm text-center pt-1   text-gray-100'>آزمایشگاه تخصصی پاستور</p>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>نتایج آنلاین  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 


           {/* .................................................................. */}          
<div className='relative  row-span-3 md:col-span-2 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/xray01.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-2/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <p className='text-sm text-center pt-1   text-gray-100'>رادیولوژی</p>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>دسترسی آنلاین به پرونده  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 





 



          

               



          {/* .................................................................. */} 




</div>                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            <div className='flex justify-around items-center'>
                            طبقه سوم
                                <p className='text-gray-300'>زیبایی - چشم - مغز و اعصاب</p>
                            
                            </div>
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 py-6 sm:grid-cols-1 ">          

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

           {/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 





 



          

               



          {/* .................................................................. */} 




</div>
                        </AccordionPanel>
                    </AccordionItem>




                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            <div className='flex justify-around items-center'>
                            طبقه چهارم
                                <p className='text-gray-300'>زیبایی - چشم - مغز و اعصاب</p>
                            
                            </div>
                            </Box>
                            <span className="relative flex h-3 w-3">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 py-6 sm:grid-cols-1 ">          

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

           {/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 





 



          

               



          {/* .................................................................. */} 




</div>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            <div className='flex justify-around items-center'>
                            طبقه پنجم
                                <p className='text-gray-300'>قلب - کودکان - مامایی</p>
                            
                            </div>
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 py-6 sm:grid-cols-1 ">          

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

           {/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

    </div>          
              </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            <div className='flex justify-around items-center'>
                            طبقه ششم
                                <p className='text-gray-300'>داخلی - ارتوپدی - روانشناسی</p>
                            
                            </div>
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 py-6 sm:grid-cols-1 ">          

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

{/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 

           {/* .................................................................. */}          
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500
               hover:brightness-100  border-4 shadow-2xl hover:z-10'>
              <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

              <Link href='/dr/dr_rad' >             
                  <button className='w-full h-3/6 space-y-2 absolute bottom-0 bg-[#07181fa9]  rounded-xl' >
                  <h1 className='text-sm text-center pt-1   text-gray-100'>فرزاد راد: متخصص مغز و اعصاب</h1>
                 
                 <div className='flex w-full md:flex-col sm:justify-center items-center justify-around px-2 '>
                      <div className='flex justify-center items-center py-1  w-full space-x-1'>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-yellow-500'/>
                          <FiStar className='text-gray-500'/>

                      </div>
                    
                 </div>
                  <div className='flex w-full justify-around  '>
                      <p className='text-sm  text-right px-2   text-gray-100'>ثبت نوبت </p> 
                      <p className=' text-sm text-right px-2   text-gray-100'>رزومه  </p> 
                 </div>

                  </button>   
              </Link>   
              </div>

          {/* .................................................................. */} 





 



          

               



          {/* .................................................................. */} 




</div>                        </AccordionPanel>
                    </AccordionItem>



                </Accordion>
    </ChakraProvider>
</div> 
  
  


  
</div>  
</div>
    </div>
  )
}

export default dr_department_member