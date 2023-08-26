import React ,{useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";
import { FcComboChart } from "react-icons/fc";

import Model from '../components/Modal';
import { FaPlayCircle,FaUsers ,FaTwitter  } from "react-icons/fa";
import dynamic from "next/dynamic";
const Speed = dynamic(() => import('../components/DashChart/Speed'))
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider , Checkbox,HStack,Button , extendTheme  } from '@chakra-ui/react';
const DashChartDrapp = dynamic(() => import('../components/DashChart/DashChartDrapp'))
const Desend = dynamic(() => import('../components/DashChart/Desend'))
// const Radial = dynamic(() => import('../components/DashChart/Radial'))
const LineChart = dynamic(() => import('../components/chart/LineChart'))

// const CChartSection = dynamic(() => import('../components/CChart/CChartSection'))
const SliderDrApp = dynamic(() => import('../components/slider/SliderDrApp'))

const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})




const drappPersian = () => {
    const [showModel, setShowModal] = useState(false);
    return (
<ChakraProvider theme={theme}>
        <div className='w-full h-auto lg:h-full'>
            <Head>
                <title>Dr App Info</title>
                <meta name="description" content="نرم افزار جامع مطب"/>
                <meta name="theme-color" content="#142028"/>
                <link rel="icon" href="/images/2.png" />
                <link rel='manifest' href='/manifest.json' />
            </Head>

           
          
            <Link href='/galleryP' >
            <BsArrowLeft className='fixed z-50 rounded-full  mt-8 ml-6  sm:text-2xl text-4xl text-[#5a5a5a]
                cursor-pointer'/>
            </Link>
            <Image
                className=" fixed -z-20  w-[100%] md:w-screen object-cover min-h-screen 
                opacity-100 sm:opacity-100"
                src="/images/drbg.jpg"
                width='1200'
                height='800'
                alt="CEO"/>
             <div className="min-h-screen flex flex-row  md:flex-col-reverse ">
   
   {/* left........................................................... */}
   <div className='flex flex-col justify-start overflow-y-scroll 
   scrollbar-hide h-screen bg-[#020507c9]   w-4/6  
      md:w-full md:h-full '>

      <div className='grid grid-cols-2 xl:grid-cols-1 gap-6 mt-[10%] mx-[10%] md:mx-4  my-4'>
       
      <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 py-4 border-b-2 sm:text-sm  border-gray-700'>پلتفرم جامع و اختصاصی مراکز درمانی</p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr/dr_department' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>

        <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 py-4 border-b-2 sm:text-sm  border-gray-700'>پلتفرم جامع و اختصاصی مطب</p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr_front' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>

        <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 sm:text-sm py-4 border-b-2 border-gray-700'>پلتفرم جامع و اختصاصی کلینیک های دندان پزشکی</p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr_front' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>


        <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 sm:text-sm  py-4 border-b-2 border-gray-700'>پلتفرم جامع و اختصاصی کلینیک های زیبایی</p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr_front' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>
  
        <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 sm:text-sm  py-4 border-b-2 border-gray-700'>  پلتفرم جامع و اختصاصی کلینیک روانشناسی</p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr_clinic' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>

        <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 py-4 border-b-2 sm:text-sm  border-gray-700'>پلتفرم جامع و اختصاصی ساختمان پزشکان</p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr/dr_department' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>

        <div className=' rounded-md bg-[#060e1b] w-full h-full   shadow-2xl '>
          <p className='text-white text-center  text-md sm:px-2 py-4 border-b-2 sm:text-sm  border-gray-700'>پلتفرم جامع و اختصاصی بیمارستان </p>
          <div className='flex flex-col sm:justify-center m-4 justify-around'>
          <div className="flex justify-around space-x-2">
         
          <Link href='/dr_admin' >
           <div className='flex justify-around border-2 border-rose-500 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs whitespace-nowrap'> محیط مدیریت</p>
            <FcComboChart className="text-2xl mr-4 text-rose-500 hover:text-green-400" />
           </div>
           </Link>

           <Link href='/dr/dr_department' >
           <div className='flex justify-around border-2 border-Indigo-400 hover:border-green-400 cursor-pointer
             rounded items-center  ' >
            <p className='text-gray-300 text-sm px-4 py-2 sm:text-xs  whitespace-nowrap'>محیط مراجعه کنندگان</p>
            <FaUsers className="text-xl mr-4 text-rose-300 hover:text-green-400" />
           </div>
          </Link>

        </div>
        
          </div>
        </div>
       
   
      </div>

{/* ...............................info1............................ */}
   <div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>
       <div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>


 



       <h2 className='text-right border-b-2 py-3 border-gray-500  px-[2%] 
        text-[#0c80ad] text-lg sm:px-[2%]'>
       هر آنچه یک پلتفرم جامعه پزشک و بیمار  نیاز دارد       
        </h2>
           <p className='text-sm w-full text-right text-gray-400 py-2 px-[2%] leading-10'>
           بستر یکپارچه سریع و امن برای کلنیک ها, بیمارستان ها و مراکز سلامتی و زیبایی  با بصورت نرم افزار های تحت وب یا نرم افزاری نیتیو برای اندروید و ای او اس با امکاناتی چون  نوبت دهی هوشند  برای ویزیت های آنلاین و حضوری, پرونده های بیماران, و ده ها آیتم مدیریتی و کنترلی دیگر که در ادامه به بخشی از آنها اشاره میکنیم
          </p>
           <h2 className='w-full border-b-2 text-white text-center py-4'>خلاصه اطلاعات فنی پلتفرم</h2>
           <div className="   py-5 relative ">
            <table className="w-full text-sm text-left text-gray-400  ">
       <thead className="text-xs text-gray-100 uppercase   ">
           <tr>
               <th scope="col" className="py-3 text-md text-center border-x-2 border-gray-800 sm:px-1 px-3">
                   فریم ورک ها
               </th>
               <th scope="col" className="py-3 text-md text-center sm:px-1 px-3">
               زبان ها
               </th>
               <th scope="col" className="py-3 text-center text-md sm:px-1 border-gray-800 border-x-2 px-3">
               نرم افزارها    
               </th>
           </tr>
       </thead>
       <tbody>

       <tr className=" border-b-2  border-gray-100">
               <th scope="row" className="py-4 px-6 font-medium text-center text-gray-100 whitespace-nowrap dark:text-white">
                   React 
               </th>
               <td className="py-4 px-3 text-center">
               جاوا اسکریپت
               </td>
               <td className="py-4 px-3 text-center">
                   مدیریت
               </td>
           </tr>
         
     
           <tr className=" border-b-2  border-gray-100">
               <th scope="row" className="py-4 px-6 font-medium text-center text-gray-100 whitespace-nowrap dark:text-white">
                   Nextjs
               </th>
               <td className="py-4 text-center px-3">
                  جاوا اسکریپت
               </td>
               <td className="py-4 text-center px-3">
                    وب اپلیکیشن بیمار
               </td>
           </tr>
      
      
       
          
           <tr className=" border-b-2  border-gray-100">
               <th scope="row" className="py-4 px-6 font-medium text-center text-gray-100 whitespace-nowrap dark:text-white">
                   React Native
               </th>
               <td className="py-4 text-center px-3">
                جاوا اسکریپت
               </td>
               <td className="py-4 whitespace-nowrap text-center px-3">
                  اندروید و ای او اس
               </td>
           </tr>


            
           <tr className=" border-b-2  border-gray-100">
               <th scope="row" className="py-4 text-center px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                   Django
               </th>
               <td className="py-4 px-3 text-center">
                   پایتون
               </td>
               <td className="py-4 px-3 text-center">
                   بک اند
               </td>
           </tr>
          
        

        

         

        
       </tbody>
            </table>
           </div>
       </div>
       <div className='flex justify-center w-1/2 items-center  lg:w-full p-[1%]'>
       <Image
       className="lg:w-3/4 items-center object-contain"
       src="/images/pastor1.png"
       width='1200'
       height='800'
       alt="CEO"/>
</div>
   </div>
{/* .............................../info1............................ */}

{/* ...............................info2............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-right border-b-2 py-3 border-gray-500  px-[2%]  text-[#0c80ad] text-md sm:px-[2%]'>
دریافت آنلاین نوبت کمتر از 10 ثانیه        
</h2>
<p className='text-sm text-right text-gray-400 py-2 px-[2%] leading-10'>
  دریافت نوبت ویزیت حضوری یا آنلاین از سراسر جهان, مشاهده وقت های آزاد و انتخاب وقت مناسب توسط بیمار یا انتخاب نزدیکترین زمان 
    </p>
   <h2 className='w-full border-b-2 text-white text-right py-4'>قابل اجرا برای تمام دستگاه ها و مرورگر ها</h2>
 
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[1%]'>
       <Image
       className="lg:w-3/4 items-center object-contain"
       src="/images/pastor2.png"
       width='1200'
       height='800'
       alt="CEO"/>
</div>
</div>
{/* .............................../info2............................ */}



{/* ...............................info3............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-right border-b-2 py-3 border-gray-500  px-[2%]  text-[#0c80ad] text-md sm:px-[2%]'>
بستر یکپارچه برای ارتباط مستقیم با بیمار    
</h2>
<p className='text-sm text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
برای داشتن یک پلتفرم نامحدود و مستقل، تمامی قسمت ها مانند چت و تماس های آنلاین در داخل پلتفرم کدنویسی می شود  و از هیچ ماژول و پلاگین خارجی یا آماده استفاده نمی شود
</p>
   <h2 className='w-full border-b-2 text-white text-center py-4'>سرعت بالا حتی در پوشش های ضعیف اینترنت </h2>
   <div className="   py-5 relative ">
          <Speed />
   </div>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[1%]'>
       <Image
       className="lg:w-3/4 items-center object-contain"
       src="/images/pastor4.png"
       width='1200'
       height='800'
       alt="CEO"/>
</div>
</div>
{/* .............................../info3............................ */}

{/* ...............................info4............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-right border-b-2 py-3 border-gray-500  px-[2%]  text-[#0c80ad] text-md sm:px-[2%]'>
       پرونده جامع بیماران
</h2>
   <p className='text-sm text-right text-gray-400 py-2 px-[2%] sm:px-[2%] leading-10'>
    دسترسی بیمار به تمام اطلاعات پزشکی خود از سراسر جهان از قبیل آزمایشات,اسکن ها, نسخه های درمانی, نمودارهای کمک درمانی و یادآوری های مصرف دارو
    </p>
   <h2 className='w-full border-b-2 text-white text-center py-4'>بایگانی و گزارش گیری لحظه ای</h2>
   <div className="   py-5 relative ">
          {/* <ColumnCatEnglish/> */}
   </div>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[1%]'>
       <Image
       className="lg:w-3/4 items-center object-contain"
       src="/images/pastor5.png"
       width='1200'
       height='800'
       alt="CEO"/>
</div>

</div>
<div className='px-[25%] sm:px-[5%]'>

<SliderDrApp/>
</div>
<div className='w-full'>
    <h2 className='text-white text-center text-md pt-10'>توجیح و مزایای پلتفرم</h2>
    <div className='w-full '>
        <LineChart />
    </div>

<Tabs isFitted dir='rtl'  >
                    <TabList color="gray.500">
                        <Tab>  اقتصادی</Tab>
                        <Tab>  مدیریتی</Tab>
                        <Tab > مراقبتی</Tab>
                 

                    </TabList>

                    <TabPanels>
                        <TabPanel>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>

                      <div className='flex   py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>اضافه شدن سیستماتیک  ویزیت ها و مشاوره های آنلاین از سراسر ایران و جهان  </p>     
                      </div>


                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>اضافه شدن سیستماتیک درآمد های خدمات در محل </p>     
                      </div>

                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>اضافه شدن درآمدهای فروشگاهی از قبیل تجهیزات پزشکی, داروخانه و سایر محصولات قابل ارائه </p>     
                      </div>
                  
                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>  افزایش  تعداد بیماران به دلیل خدمات منحصر بفرد, راحتی در دسترسی, کاهش اتلاف وقت و ده ها آیتم دیگر   </p>     
                      </div>
                      
                  </div>
                        </TabPanel>
                        {/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
                        <TabPanel>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>

                   

                      <div className='flex   py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>گزارش گیری آنلاین از تمام دیتا بیس و بخش های مجموعه  </p>     
                      </div>


                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>داشبورد جامع با کنترل پنل های گویا برای کنترل تمام بخش های خدماتی و فروشگاهی در یک پلتفرم </p>     
                      </div>

                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>مشاهده عملکرد کارکنان و میزان رضایتمندی بیماران از کارکنان </p>     
                      </div>
                  
                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>مشاهده رشد یا ضعف مجموعه بصورت گویا   </p>     
                      </div>
                      
                  </div>
                        </TabPanel>
{/* ................................................................. */}
                        <TabPanel>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>

                   

                      <div className='flex   py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'> دسترسی سریع بیماران مجموعه به تمام خدمات مجموعه </p>     
                      </div>


                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>دسترسی بیماران به پرونده پزشکی خود از سراسر جهان </p>     
                      </div>

                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'>بخش های مراقبت از بیمار همانند یادآوری های مصرف دارو, چکاپ ها, خدمات در محل و دریافت نوبت</p>     
                      </div>
                  
                      <div className='flex  border-t-2 border-gray-600 py-2 w-full'>
                        <p className='text-right w-full pr-4 text-sm text-gray-400'> استفاده بیماران از داشبورد های سلامتی برای مشاهده پیشرفت بیماری یا بهبودی  </p>     
                      </div>
                      
                  </div>
                        </TabPanel>

                    </TabPanels>
                </Tabs>

</div>

{/* .............................../info4............................ */}




<p className='text-right border-t-2 text-white py-4 px-[5%] text-md  leading-10'>
داشبوردهای مدیریتی چون اختصاصی و با توجه به نیاز های مجموعه کدنویسی می شوند هیچ محدودیتی در اضافه کردن بخش های جدید  در زمان حال و آینده وجود ندارد. یکپارچگی امکان مشاهده و مدیریت تمامی موارد کسب و کار شما را در یک پلتفرم فراهم می کند. این بخش ها در لایه های مدیریتی، ادمین, اپراتور و سایر لایه ها قابل پیاده سازی است، از قابلیت های این داشبوردها می توان به مدیریت بیماران, تعیین نوع نوبت دهی , مشاهده سود و زیان هر بخش, بایگانی بیماران که شامل پرونده بیماران، ویزیتها و پرداختها , خدمات در محل و ... اشاره کرد. همه ای این امکانات به صورت نمودارهای شماتیک با قابلیت گزارش لحظه ای  قابل ارائه هستند 
</p>

<div className='flex flex-col justify-center w-full'>
   <DashChartDrapp/>
   <Desend/>
   {/* <Radial/> */}

</div>





   </div>





   {/* right................................................
   ...........................................................
   ...................................................... */}
   <div className='flex min-h-screen py-6 px-4 flex-col  justify-around w-2/6 bg-[#040f14e1] md:w-full'>
{/* ........................... */}
   <div className='flex flex-col justify-center items-center'>
     <h1 className='text-center px-[10%] leading-10  text-white text-ئی '>
     پلتفرم های یکپارچه پزشک و بیمار
      </h1>

   
    </div>
{/* ................................. */}
   
     <div className='w-full flex flex-col justify-be items-center'>
       <Model isVisible={showModel} onclose={() => setShowModal(false)}>
              <video   className="w-[100%] h-[100%]" autoPlay loop  controls >
                   <source   src="/video/pasteur.mp4"   type="video/mp4"  />
                   Your browser does not support the video tag.
               </video>
            </Model>
            <div className=' relative top-40 left-5 cursor-pointer items-center '>
                       <button onClick={() => setShowModal(true)} className='w-20 h-20'>
                       <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                       </button>
            </div>
     <div className='flex w-full justify-center '>
      <Image
            className="w-[80%]  object-contain"
            src="/images/pastor3.png"
            width='800'
            height='800'
            alt="CEO"
            />
     </div>
       </div>      
{/* ........................................... */}

<div className='grid py-4 grid-cols-4 divide-x bg-[#0f1a20f6] border-y-2'>
             <h1 className= ' text-white text-center '> اندروید</h1>
             <h1 className= ' text-white text-center '>ای او اس</h1>              
             <h1 className= ' text-white text-center '> ویندوز </h1>
             <h1 className= ' text-white text-center '> وب </h1>
           </div>








   </div>
  
  </div>
        </div>
 </ChakraProvider>
    );
}

export default drappPersian;
