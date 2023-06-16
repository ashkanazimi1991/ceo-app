import React from 'react';
import { BiChevronsDown } from 'react-icons/bi';
import ChartSection from '../chart/ChartSection';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { ChakraProvider, extendTheme, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel     } from '@chakra-ui/react';
const Slider = dynamic(() => import('../slider/slider'))

const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})


const WhyP = () => {
  return (
    

<div className="group px-[10%] md:px-[2%] sm:px-0 min-h-screen flex flex-col justify-around  bg-[#07090aec] p-3" >
    <div className="flex items-center py-2 border-b-2  justify-between px-[5%] ">
                <AiOutlineInfoCircle className="text-white text-2xl" />
                <h2 className="text-lg text-center   text-gray-400 ">
                چرا مجموعه مدیریت آنلاین؟
                 </h2>          
    </div>
      <div className='mt-10'>
        <Slider/>
      </div>
    <div className='flex sm:flex-col-reverse space-x-4  sm:space-x-0 mx-2 '>

      {/* ................................accordion */}
      <div className='flex-col justify-center w-2/3 sm:w-full items-center'>
        <ChakraProvider theme={theme} >
            <Accordion dir='rtl' allowToggle >
                    <AccordionItem color='blue.300'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            چرا از  جاوا اسکریپت در  برنامه نویسی رابط کاربری استفاده می کنید؟
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        , به دلایل زیادی ما از جاوا اسکریپت استفاده میکنیم که از مهمترین آنها, تعاملی بودن و قابلیت توسعه پایدار آن است که علاوه برای ویژگی های پویا بصری پایداری و راندمان عملکرد بهتری از سایر رقیبان خود در فرانت اند نشان می دهد و همچنین با تمام مرورگرها و سخت افزارهای مختلف سازگاری بهتری دارد و می توان به راحتی بیش از 75% عملیات های اجرایی را بدون درگیر کردن بک اند و سمت سرور اجرا کرد که خود این قابلیت باعث افزایش سرعت پلتفرم شده و همچنین بار ترافیکی سرور را تاحد چشمگیری  کم می کند و همچنان چون به راحتی با تگنولوژی های روز بروز می شود می توان هر آیتمی از قبیل واقعیت مجازی, ارائه های سه بعدی, بسترهای بلاک چینی,هوش مصنوعی و ... را بصورت یکپارچه در پلتفرم خود داشته باشیم                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem color='blue.200'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            چرا از زبان پایتون در  برنامه نویسی بک اند استفاده می کنید؟
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



                    <AccordionItem color='blue.300'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            آیا این پلتفرم ها در آینده امکان توسعه دارند؟
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




                    <AccordionItem color='blue.200'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                        آیا این پلتفرم ها با افزایش کاربران مقیاس پذیر هستند؟
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


                    <AccordionItem color='blue.300'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                                پشتیبانی این پلتفرم ها چگونه است؟
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


                    <AccordionItem color='blue.200'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            آیا روند پیشرفت پروژه قابل مشاهده است؟          
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


                    <AccordionItem color='blue.300'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                                نحوه ثبت سفارش به چه صورت است؟
                            </Box>
                        <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                            {/* <AccordionIcon /> */}
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                            از مسیر های گوناگونی میتوانید ثبت سفارش را انجام دهید, مانند ارتباط با مسیر های ارتباطی یا پر کردن فرم ثبت سفارش از لینک زیر یا ارتباط با اپراتور آنلاین که در پایین صفحه سمت راست قابل مشاهده است به همراه مشاوره رایگان برای رفع هر گونه ابهام از طرف شرکت یا مشاوره تخصصی                    
                       <div className='flex justify-center items-center'>
                       <Link href="/contactUsPersian"> 
                            <p className='text-green-400 border bg-black border-green-400 px-4 py-2 mt-4 rounded '> ثبت سفارش</p>
                        </Link>
                        </div>
                       
                        </AccordionPanel>
                    </AccordionItem>







                </Accordion>
        </ChakraProvider>
      </div>


     
   
   
      <div className='flex flex-col justify-center px-4  items-center border border-gray-600 rounded-xl  bg-gradient-to-b from-gray-700 via-gray-900 to-black w-1/3 sm:w-full'>
        <p className='text-gray-200 text-center px-[6%] sm:px-[4%] text-md leading-8'>برنامه نویسی  یکپارچه و اختصاصی بدون استفاده از پلاگین های آماده یا سایت ساز ها   </p>
        <div className='border-t-2 border-gray-800 mt-2 w-full grid grid-cols-4 py-4'>
        <Image className=" object-contain"  src="/images/js.png"   width='50'  height='50'  alt="CEO"/>
        <Image className=" object-contain"  src="/images/python.png"   width='50'  height='50'  alt="CEO"/>
        <Image className=" object-contain"  src="/images/react.png"   width='50'  height='50'  alt="CEO"/>
        <Image className=" object-contain"  src="/images/dj.png"   width='50'  height='50'  alt="CEO"/>



        </div>

      </div>

    <div>

    </div>

</div>










    <div className='w-full pt-5  flex flex-col px-40 2xl:px-20 sm:px-5  justify-center'>
        <p className="my-4 px-5 w-full text-gray-400 text-right">
            در ادامه به نمودار رتبه بندی فریم ورک های جهان نگاه می کنیم
        </p>  
        <ChartSection/>
        <p className="my-4 px-5 w-full text-right text-gray-400">
            اگر به پروژه های مجموعه مدیریت آنلاین نگاه کنید مشاهده خواهید کرد 
            که تمام پلتفرم های ساخته شده بر روی فریم ورک شماره یک جهان  هستند نه دومین!! با 
            قدرتمندترین زبان های برنامه نویسی از جمله جاوا اسکریپت و پایتون که توسط برنامه نویسان با تجربه مجموعه مدیریت آنلاین کدنویسی می شوند  
        </p>

        <h3 className='text-blue-400 text-right text-lg px-5 sm:text-sm'>برترین های جهان و ایران از همین تکنولوژی که ما به شما پیشنهاد میکنیم استفاده کرده اند</h3>
            <div className='grid p-[5%] grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                <p className='text-gray-400 text-center whitespace-nowrap  px-4 py-2 border rounded border-gray-500'>توییتر</p>    
                <p className='text-gray-400 text-center  whitespace-nowrap px-4 py-2 border rounded border-gray-500'>اینستاگرام</p>       
                <p className='text-gray-400 text-center  whitespace-nowrap px-4 py-2 border rounded border-gray-500'>واتس اپ</p> 
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>نتفلیکس</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>اپل</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>دیجی کالا</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>بایننس</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>دیسکورد</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>پینترست</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>دیوار</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>اسکایپ</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>اسنپ</p>       


            </div>
    </div>          
                
            

                    

  {/* ..................................................................
  ..................................................................
  ........................timeline..................................
  ..................................................................
.................................................................. */}
<h2 className="text-xl sm:text-lg text-right  font-medium text-[#67d2f3] px-5">
:همچنین پلتفرم های ما دارای
</h2>
        <div className=' overflow-x-scroll scrollbar-hide px-[5%]  pb-16'>
            <ol className="items-center pl-5 py-5 flex w-full ">

            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg  text-[#67d2f3]">
                        A رتبه</h3>
                    <h3 className="pr-10 whitespace-nowrap  text-gray-500 ">
                    در آنالیز گوگل</h3>
                </div>
            </li>
            
        <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font whitespace-nowrap text-[#67d2f3]">
                    گزارش پیشرفت پروژه</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    در داشبورد آنلاین کارفرما</h3>
                </div>
            </li>

            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                        پیشتیبانی 7/24</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    99.99% آنلاین بودن  سرور </h3>
                </div>
            </li>



            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                    گارانتی امنیت دیتابیس</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    بکاپ گیری مستمر در  سرورهای ابری</h3>
                </div>
            </li>




            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                    نمونه اولیه رایگان</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    ارائه پروتوتایپ کامل پروژه قبل از اجرا </h3>
                </div>
            </li>


            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                    طراحی تخصصی رابط کاربری</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    رعایت اصول تجربه کاربری و بهینه سازی مکرر</h3>
                </div>
            </li>




            
            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                    قیمت عادلانه خدمات</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                        تخفیف 10 درصدی برای فول پکیج ها</h3>
                </div>
            </li>

            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3] whitespace-nowrap pr-10">
                    قرارداد رسمی با روز شمار</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    تحویل کامل پروژه در زمان معین شده</h3>
                </div>
            </li>


            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                    بارگذاری در مارکت</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                    بعد از رضایت کامل کارفرما</h3>
                </div>
            </li>

            <li className="relative  ">
                <div className="flex items-center ">
                    <div className="flex z-10 justify-center items-center w-6 h-6 
                    rounded-full ring-20 ring-white
                        ring-4 shrink-0">
                        <BiChevronsDown className="text-white text-2xl" />
                    </div>
                    <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                    <h3 className="text-lg font text-[#67d2f3]">
                    پشتیبانی سئو</h3>
                    <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
                برای تمامی مرورگرها</h3>
                </div>
            </li>


            

            

            </ol>
            

        </div>
       
    </div>
  )
}

export default WhyP;


{/* <ChakraProvider theme={theme}>
 
</ChakraProvider> */}