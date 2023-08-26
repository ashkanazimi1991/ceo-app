import React from 'react';
import BA_Slider from './BA_Slider';
import {FiStar,FiMail,FiPhoneCall} from  'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import SliderP from '../Dr_admin/SliderP';
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


const Body = () => {
  return (

    <div className='w-full  bg-[#00000086] py-6'>
    <div className='w-full  px-[15%] sm:px-[5%] bg-[#00000086] '>
         <div className='flex justify-center items-center w-full py-4'>
         <Link href='/dr/dr_department_member' >
                <button type="button" className='flex z-10 justify-around items-center outline outline-1 outline-cyan-500 bg-[#0e113452]  px-3 w-60 rounded-md ' >

                <p className='text-md  font-bold text-gray-300' >   مشاهده همه نمونه کار </p>

                <Image className='w-10 object-contain ' width='100' alt='online ceo'
                height='100' src='/images/dr_hero_icon.gif'/> 
                </button>
              </Link>
         </div>
        <div className='bg-blue-400 rounded-xl p-1'>
             <BA_Slider/>
        </div>


    <ChakraProvider theme={theme}>

<div className='flex w-full md:flex-col space-x-4 pt-6 '>

    <div className='w-1/2 md:w-full  '>
        <SliderP/>
    </div>

    <div className='w-full  flex justify-center items-center'>
    <Accordion dir='rtl' allowToggle  width='full'>
                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            سوال اول.......؟
                                                        </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        , به دلایل زیادی ما از جاوا اسکریپت استفاده میکنیم که........................... را بصورت یکپارچه در پلتفرم خود داشته باشیم                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            سوال دوم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                           مهتمرین دلیل بالا  بردن امنیت پلتفرم است شبکه امنیتی این بستر متشکل از پایتون و فریم ورک جنگواست که پلتفرم شما را از بعد تکنیکال هم سطح پلتفرم های جهانی می کند که نمونه های از آن ها را در ادامه نام برده ایم  و فاکتور های مهم بعدی  سرعت  پلتفرم , داده کاوی دیتابیس ها, رابط های ای پی ای, سیستم های بکاپ,  ربات های نرم افزاری, گزارش گیری ها لایو, کنترل اتوماسیون ها و صده ها آیتم دیگر که در اینجا نمیتوان به همه آنها اشاره کرد همه این عوامل باعث شده اند که پایتون و فریم ورک جنگو را برای بک اند پلتفرم های اجرای خود انتخاب کنیم   
                        </AccordionPanel>
                    </AccordionItem>



                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            سوال سوم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        بله صد در صد تمام پلتفرم ها بصورت مادام العمر قابلیت بهتر شدن یا افزودن ویژگی های جدید را دارد  
                        </AccordionPanel>
                    </AccordionItem>




                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            سوال چهارم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                            بله کاملا و نمونه های بارز همسان های داخلی و خارجی این ویژگی را کاملا بصورت عملی تصدیق میکند  برای مثال پلتفرم های چون اینستاگرام با این امکان میتوانند کاربران میلیونی خود را بدون کند شدن پلتفرم اداره کنند. علت این موضوع هم کلاینت ساید بودن فریم ورک است که از منابع سخت افزاری خود کاربران برای اجرا پلتفرم استفاده میکند و دیتا های عملیاتی فقط با سرور مرکزی در ارتباط هستند.
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            سوال پنجم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                            مجموعه مدیریت آنلاین آمادگی پشتیبانی مادام العمر پلتفرم های اجرا شده خود  را دارد و بصورت 7/24 پشتیبان منابع کاربران خود است.
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            سوال ششم.......؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                    بله بصورت کل و جز با نمودار های شماتیک, به این حالت که بعد از عقد قرار داد لینک دعوت به محیط توسعه پلتفرم در اختیار کارفرما قرار میگیرد تا بصورت آنلاین از پیشرفت پروژه خود باخبر باشد و با نظرات خود در توسعه پلتفرم تیم را همراهی کند.
                        </AccordionPanel>
                    </AccordionItem>


           






                </Accordion>
    </div>
</div>





    </ChakraProvider>



















{/* .....................<doctors>................. */}

<div className=' flex flex-col w-full  items-end justify-center px-[10%] '>

<p className='  py-12 sm:py-5 sm:text-xs md:text-md text-lg text-gray-300 '>پزشکان مجرب مجموعه  </p>

<div className="grid grid-cols-3 gap-4 md:grid-cols-2  sm:grid-cols-1  ">
        
{/* .................................................................. */}    
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/dr/dr_department_member' >             
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
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/doctors/Drrad' >             
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
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/doctors/Drrad' >             
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
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/doctors/Drrad' >             
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
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/doctors/Drrad' >             
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
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/doctors/Drrad' >             
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
<div className='relative  row-span-3 bg-slate rounded-xl transition delay-150  duration-500 h-96
    hover:scale-110 scale-100 brightness-75 hover:brightness-100  border-4 shadow-2xl hover:z-10'>
    <Image src='/images/dr06.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-md    w-full h-full drop-shadow-2xl  object-cover'/>

    <Link href='/doctors/Drrad' >             
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
  

</div>
</div>

{/* .....................<doctors/>................. */}




    </div>
    </div>

  )
}

export default Body