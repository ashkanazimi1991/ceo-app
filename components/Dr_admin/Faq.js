import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
const SliderP = dynamic(() => import('../Dr_admin/SliderP'))
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



const Faq = () => {
  return (
    <ChakraProvider theme={theme}>
    <div className=' flex-col py-10'>

      <div>
      <p className='text-md py-4 text-center'>
       سوالات متداول و نظرات کاربران
      </p>
      </div>
   
   
   
   
   
    <div className=' px-[15%] md:px-[2%] space-x-4 md:space-x-0 md:space-y-4 flex md:flex-col w-full pb-9'>

      <div className=' w-1/2 md:w-full '>
   <SliderP/>
      </div>

      <div className=' w-1/2  md:w-full'>

      <Accordion dir='rtl' allowToggle >
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
                        , به دلایل زیادی ما از جاوا اسکریپت استفاده میکنیم که از مهمترین آنها, تعاملی بودن و قابلیت توسعه پایدار آن است که علاوه برای ویژگی های پویا بصری پایداری و راندمان عملکرد بهتری از سایر رقیبان خود در فرانت اند نشان می دهد و همچنین با تمام مرورگرها و سخت افزارهای مختلف سازگاری بهتری دارد و می توان به راحتی بیش از 75% عملیات های اجرایی را بدون درگیر کردن بک اند و سمت سرور اجرا کرد که خود این قابلیت باعث افزایش سرعت پلتفرم شده و همچنین بار ترافیکی سرور را تاحد چشمگیری  کم می کند و همچنان چون به راحتی با تگنولوژی های روز بروز می شود می توان هر آیتمی از قبیل واقعیت مجازی, ارائه های سه بعدی, بسترهای بلاک چینی,هوش مصنوعی و ... را بصورت یکپارچه در پلتفرم خود داشته باشیم                        </AccordionPanel>
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


                    <AccordionItem color='blue.500'  >
                        <h2>
                        <AccordionButton  >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                                نحوه ثبت نوبت به چه صورت است؟
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

      </div>
      
      
      
      
      

      
      </div>
      <div>
      <Link href='/dr_front' className=' flex justify-center'>
                    <p className=' flex justify-center border-gray px-4 py-2 border-2 text-sm rounded-2xl shadow-2xl '>دریافت نوبت</p>
      </Link>
      </div>
    </div>
      </ChakraProvider>
    
  )
}

export default Faq