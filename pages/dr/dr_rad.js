import React, { useState } from 'react'
import Image from 'next/image';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Drawer from '../../components/Dr/Drawer';
import Link from 'next/link'
import Header from '../../components/Dr/Header';
import {FiStar,FiMail,FiPhoneCall} from  'react-icons/fi';
import { BsCalendarDate,BsNewspaper,BsListTask,BsFillChatRightTextFill,BsCheck2Square } from 'react-icons/bs';
import BA_BrainXray from '../../components/Dr/BA_BrainXray'
import Head from 'next/head';


import SliderP from '../../components/Dr_admin/SliderP';
// import { ChakraProvider } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,Box,
    AccordionIcon, ChakraProvider, extendTheme, 
  } from '@chakra-ui/react'
  
  


  const fonts = {
      body:'IRANSansWeb',
      // heading:'IRANSansWeb'.
  
  }
  const theme= extendTheme({fonts})



const dr_rad = () => {


  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
<div className=''>    

<Head>
        <title>دکتر فرزاد راد</title>
        <meta name="description" content="استارت اپ پاستور" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/2.png" />
        <link rel='manifest' href='/manifest.json' />  
      </Head>
{/* <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-full h-screen "  >
             <source   src="/video/v10.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video> */}
{/* ......................................rtl btton...................... */}
<div className='fixed z-20 bg-gradient-to-l from-gray-900 to-gray-600  top-1/2 rounded-l-xl w-6 right-0'>
   <div className='flex justify-center items-center flex-col my-4 space-y-4'>
   <BsFillChatRightTextFill className='text-yellow-500'/>
   <BsCalendarDate className='text-yellow-500'/>
   <BsCheck2Square className='text-yellow-500'/>
   <FiStar className='text-yellow-500'/>
  
    </div> 
</div>
{/* ......................................rtl btton...................... */}

<Image
             className=" fixed bottm-0 -z-20 bg-top w-full md:h-full min-h-screen   object-cover brightness-75
              opacity-100 "
             src="/images/brain.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />
    
      {/*Header-drawer............................................................................*/}
    <Header/>





    <div className=' w-full min-h-screen  flex flex-col justify-center items-center py-24 px-[15%] md:px-[10%] sm:px-[6%]   '>
  {/*Aks doctor.......................................................................................*/}

      <div className=' w-full py-6 flex md:flex-col-reverse bg-gradient-to-l from-gray-900 to-gray-600 rounded-md '>
          {/*Bio grafi............................................................................*/}
         
      <div className='flex flex-col justify-center items-center space-y-7 w-full py-2 px-4'>

            <div className='grid grid-cols-3 gap-2'>
            <Image className=' w-full h-32 object-cover rounded-xl p-2' src='/images/mriww.jpg' width='600' height='600' alt='استارت اپ پاستور'/>
            <Image className=' w-full h-32 object-cover rounded-xl p-2' src='/images/xray.jpg' width='600' height='600' alt='استارت اپ پاستور'/>
            <Image className=' w-full h-32 object-cover rounded-xl p-2' src='/images/mri1.jpg' width='600' height='600' alt='استارت اپ پاستور'/>
      </div>





        <p className='text-md  text-right w-full sm:text-md text-cyan-500 ' >بیوگرافی </p>
        <p className=' md:text-sm  text-right text-sm text-gray-300   ' >
              فارغ التحصیل رشته پزشکی در سال ۱۳۷۱ در رشته پزشکی عمومی و فارغ التحصیل رشته تخصصی مغز و اعصاب در سال ۱۳۸۱ با تجربه نزدیک به ۳ دهه خدمت در رشته پزشکی است، ایشان بعلت علاقه ایکه به طب درد و درمان‌های غیردارویی داشت عازم کشور کانادا شد تا بمدت ۳ سال در رشته اکوپانکچر درد در کالج تورنتو تحصیل نماید، پشتکار و علاقه او باعث شد تا با رتبه عالی فارغ التحصیل شود. 
          </p>
      </div> 
      {/*.............................................................................................*/}
           <div className=' h-full   w-full'>

                  <Image className=' w-full rounded-xl p-2' src='/images/dr06.jpg' width='600' height='600' alt='استارت اپ پاستور'/>
              <div className=' flex h-2/5 py-4 justify-end  items-center space-x-5 px-3'>
                  <div className='flex justify-center items-center py-1  w-full space-x-1'>
                            <FiStar className='text-yellow-500 cursor-pointer'/>
                            <FiStar className='text-yellow-500 cursor-pointer'/>
                            <FiStar className='text-yellow-500 cursor-pointer'/>
                            <FiStar className='text-yellow-500 cursor-pointer'/>
                            <FiStar className='text-gray-500 cursor-pointer'/>
                      <p className='text-xl md:text-l sm:text-xs text-white px-2 text-bold'>4.9</p>
                   </div>

                 <p className='whitespace-nowrap  text-right w-full text-xl text-blue-300 text-bold'>دکتر فرزاد راد</p>

              </div>
              <div className=' flex h-1/5 justify-end  items-center space-x-5 px-3'>

             







              </div>
              <div className='flex flex-col justify-start items-end py-3 space-y-2 px-3 h-2/5 '>
                <p className='text-l md:text-sm sm:text-xs text-right text-gray-200 text-bold' >جراح مغز و ستون فقرات </p>
                <p className='text-l md:text-sm sm:text-xs text-right text-gray-200 text-bold' > عضو انجمن جراحان مغز و اعصاب آمریکا  </p>
              </div>
           </div>
      </div>

  {/*tedad bimar - sabege ............................................................................*/}     
      <div className='flex justify-arounded py-4 space-x-7 w-full h-28 md:h-24'>
        <div  className='flex flex-col py-1 justify-center items-center bg-[#e725bdab] w-full h-full rounded-md'>
          <p className='text-xl md:text-l sm:text-sm text-gray-100  text-bold' >+5000</p>
          <p className='text-xl md:text-l sm:text-sm text-gray-100 text-bold' >بیمار</p>     
        </div>
        <div  className='flex flex-col py-1 justify-center items-center bg-[#0d4a66c4] w-full h-full rounded-md'>
          <p className='text-xl md:text-l sm:text-sm text-gray-100  text-bold' >+6</p>
          <p className='text-xl md:text-l sm:text-sm text-gray-100 text-bold' >سابقه</p>     
        </div>
      </div>



 



  {/*daryaft nobat............................................................................*/}

    <Link href='/dr/dr_booking' >     
      <button className='flex justify-center items-center h-20 sm:h-14 md:h-16  w-full rounded-md'>
      <div className='flex justify-around border-2 bg-gradient-to-l from-gray-900 to-gray-600  border-rose-500 hover:border-green-400 cursor-pointer
            rounded items-center py-1 ' >
           <BsCalendarDate className="text-2xl mx-2 text-green-200 hover:text-green-400" />
           <p className='text-md px-4  text-green-200 py-2 text-bold sm:text-xs whitespace-nowrap '>  دریافت نوبت</p>
          </div>
      </button>
    </Link>
   
    </div> 
    

    <div className='w-full px-[10%]'>
        <BA_BrainXray />

 

        <ChakraProvider theme={theme}>

<div className='flex w-full md:flex-col bg-[#f8f8f82f] my-6 rounded-xl space-x-4 pt-6 '>

    <div className='w-1/2 md:w-full  '>
        <SliderP/>
    </div>

    <div className='w-full  flex justify-center items-center'>
    <Accordion dir='rtl' allowToggle  width='full'>
                    <AccordionItem color='blue.900'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' pr={4}  fontSize='sm'>
                            سوال اول.......؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.700' pb={4}>
                        ................................................................................................
                                              </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem color='blue.900'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' pr={4} fontSize='sm'>
                            سوال دوم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.700' pb={4}>
                        ................................................................................................
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem color='9'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' pr={4}  fontSize='sm'>
                            سوال سوم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='7' pb={4}>
                        ................................................................................................
                        </AccordionPanel>
                    </AccordionItem>




                    <AccordionItem color='9'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' pr={4}  fontSize='sm'>
                            سوال چهارم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='7' pb={4}>
                        ................................................................................................
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='9'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' pr={4}  fontSize='sm'>
                            سوال پنجم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='7' pb={4}>
                        ................................................................................................

                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='9'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' pr={4}  fontSize='sm'>
                            سوال ششم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='7' pb={4}>
                        ................................................................................................
                        </AccordionPanel>
                    </AccordionItem>


           






                </Accordion>
    </div>
</div>





    </ChakraProvider>




    </div>

{/* <div className='grid grid-cols-2 md:grid-cols-1 gap-4 px-[10%]'>
    <BA_BrainXray/>
    <BA_BrainXray/>

</div> */}
<div className='flex w-full justify-evenly py-6 px-[10%]'>

<button className='flex justify-center items-center h-20 sm:h-14 md:h-16  w-full rounded-md'>
      <div className='flex justify-around border-2 bg-gradient-to-l from-gray-900 to-gray-600 border-rose-500 hover:border-green-400 cursor-pointer
            rounded items-center py-1 ' >
           <BsListTask className="text-2xl mx-2 text-rose-100 hover:text-green-400" />
           <p className='text-gray-100 text-md px-4 py-2 text-bold sm:text-xs whitespace-nowrap'>  همه نمونه کارها </p>
          </div>
      </button>


      <button className='flex justify-center items-center h-20 sm:h-14 md:h-16  w-full rounded-md'>
      <div className='flex justify-around border-2 bg-gradient-to-l from-gray-900 to-gray-600 border-rose-500 hover:border-green-400 cursor-pointer
            rounded items-center py-1 ' >
           <BsNewspaper className="text-2xl mx-2 text-rose-100 hover:text-green-400" />
           <p className='text-gray-100 text-md px-4 py-2 text-bold sm:text-xs whitespace-nowrap'>  مقالات </p>
          </div>
      </button>

</div>


















  

    
</div>  
   
   
   

   
   
   )
   
   
   
}

export default dr_rad;