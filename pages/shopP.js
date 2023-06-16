import React ,{useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsLaptop, BsPhone } from "react-icons/bs";
import { SlScreenTablet} from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import Model from '../components/Modal';
import { FaPlayCircle } from "react-icons/fa";
import BestPractices from '../components/CChart/BestPractices';
import Accessibility from '../components/CChart/Accessibility';

import dynamic from "next/dynamic";
const Speed = dynamic(() => import('../components/DashChart/Speed'))
const ColumnCatPersian = dynamic(() => import('../components/DashChart/ColumnCatPersian'))
const DashChartSectionP = dynamic(() => import('../components/DashChart/DashChartSectionP'))
const Slider = dynamic(() => import('../components/slider/slider'))

const CChartSection = dynamic(() => import('../components/CChart/CChartSection'))



const shopP = () => {
  const [showModel, setShowModal] = useState(false);
  return (
    <div className='w-full h-screen lg:h-full'>
    <Head>
     <title>ONLINE CEO</title>
     <meta name="description" content="پلتفرم های فروشگاهی" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   <Link href='/galleryP' >
   <BsArrowLeft className='fixed z-50 rounded-full  mt-8 ml-6  sm:text-2xl text-4xl text-[#5a5a5a]
    cursor-pointer'/>
   </Link>
   <Image
        className=" fixed -z-20  w-[100%] md:w-full object-cover min-h-screen 
        opacity-100 sm:opacity-100"
        src="/images/shopE.jpg"
        width='1200'
        height='800'
        alt="CEO"/>
   <div className="min-h-screen flex flex-row  md:flex-col-reverse ">
   
    {/* right........................................................... */}
    <div className='flex flex-col justify-start overflow-y-scroll 
    scrollbar-hide h-screen bg-[#0f1a20f6]   w-4/6  
       md:w-full md:h-full '>
{/* ...............................info1............................ */}
            <div className='mt-14'>
                <Slider/>
            </div>
   
    <div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>


        <div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-3/4'>

        <h2 className='text-right border-b-2 py-3 border-gray-500  px-[5%]  text-[#0c80ad] 
        text-xl sm:px-[2%]'>
       کسب و کار خود را آنلاین کنید
        </h2>

            <p className='text-lg w-full text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
            برنامه نویسی پلتفرم های فروشگاهی و چند منظوره بطور اختصاصی با زبان های جاوا اسکریپت و پایتون روی محبوب ترین فریم ورک جهان ریکت, هم اکنون بزرگترین و محبوب ترین فروشگاه های روز دنیا و فروشگاهای داخلی چون دیجی کالا در این بستر راه اندازی شده اند در ادامه به بخشی از مزایایی پلتفرم ها اشاره می شود   
            </p>
            <h2 className='w-full border-b-2 text-white text-center py-4'>آنالیز مرورگرها نسبت به پلتفرم</h2>
            <div className="   py-5 relative ">
            <Speed />
            <h2 className='text-white text-center'>سرعت دریافت اطلاعات توسط مرورگر کمتر از 100 میلی ثانیه</h2>
            <div className='w-full flex sm:flex-col justify-center items-center'>
            <CChartSection/>
            <div>
            <Accessibility/>
            <BestPractices/>
            </div>
            </div>
         
            </div>
    

        </div>

    </div>
{/* .............................../info1............................ */}

{/* ...............................info2............................ */}
<div className='flex flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center  w-full'>
<h2 className='text-right border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
       ایجاد دسته بندی و زیر مجموعه های مستقل </h2>
<p className='text-sm text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
مقیاس پذیری و یک پارچه بودن کل پلتفرم باعث می شود هیچ محدودیتی در رشد پلتفرم خود نداشته باشید و گذشته و آینده کسب و کارتان را در یک پلتفرم جامع و اختصاصی مدیریت و کنترل کنید و محصولات و خدمات خود را به تمام جهان ارائه دهید 
 </p>
    <h2 className='w-full border-b-2 text-white text-center sm:text-sm py-4'>گزارشات لحظه ای از تمام بخش ها روی نمودار های شماتیک</h2>
  <ColumnCatPersian/>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pete10.png"
        width='1200'
        height='800'
        alt="CEO"/>
</div>
</div>
{/* .............................../info2............................ */}



{/* ...............................info3............................ */}

{/* .............................../info3............................ */}

{/* ...............................info4............................ */}

{/* .............................../info4............................ */}




<p className='text-right border-t-2 text-white py-4 px-[5%] text-md  leading-10'>
تمامیت پلتفرم به تمام زبان های زنده دنیا قابل ارائه می باشد, داشتن قدرت ارائه های روز دنیا از قبیل مشاهده سه بعدی, واقعیت مجازی , محاسبه هوشمند و در لحظه قیمت برای فروش های چندمرحله ای یا اختصاصی کردن محصول قبل از خرید و داشبورد های اختصاصی باعث ایجاد تفاوت در نوع معرفی و کنترل و اتوماسیون کردن کسب و کارتان می شود
</p>

<div className='flex justify-center w-full'>
    <DashChartSectionP/>

</div>





    </div>





    {/* left................................................
    ...........................................................
    ...................................................... */}
    <div className='flex min-h-screen py-6  flex-col justify-around w-2/6 bg-[#040f14e1] md:w-full'>
 {/* ........................... */}
    <div className=''>
        <h2 className='px-[10%] text-center leading-10 text-lg text-[#2c9097]'> بستر اختصاصی برای معرفی و فروش, خدمات یا محصولات </h2>
   
     </div>
{/* ................................. */}
    
      <div className='w-full flex flex-col justify-center items-center'>
        <Model isVisible={showModel} onclose={() => setShowModal(false)}>
               <video   className="w-[100%] h-[100%]" autoPlay loop  controls >
                    <source   src="/video/sho.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-40 left-5 cursor-pointer items-center '>
                        <button onClick={() => setShowModal(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
      </div>
      <div className='flex justify-center items-center '>
       <img
             className="md:w-[70%] w-[90%] object-contain"
             src="/images/sho.png"
        
             alt="CEO"
             />
      </div>
        </div>      
{/* ........................................... */}

<div className='grid py-4 grid-cols-4 divide-x bg-[#0f1a20f6] border-y-2'>
              <h1 className= ' text-white text-center '> اندروید </h1>
              <h1 className= ' text-white text-center '> ای او اس </h1>
              <h1 className= ' text-white text-center '>ویندوز</h1>              
              <h1 className= ' text-white text-center '> وب</h1>
            </div>








    </div>
   
   </div>
   <div>
    
   </div>

   




  


 

 </div>
  )
}

export default shopP;












