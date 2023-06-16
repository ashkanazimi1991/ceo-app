import React ,{useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsLaptop, BsPhone } from "react-icons/bs";
import { SlScreenTablet} from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import Model from '../components/Modal';
import { FaPlayCircle } from "react-icons/fa";
import { BiChevronsDown } from 'react-icons/bi';

import dynamic from "next/dynamic";
const DashChartSection = dynamic(() => import('../components/DashChart/DashChartSection'))



const mypetP = () => {
  const [showModel, setShowModal] = useState(false);
  return (
    <div className='w-screen'>
    <Head>
     <title>ONLINE CEO</title>
     <meta name="description" content="نرم افزار دامپزشکی" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   <Link href='/galleryP' >
   <BsArrowLeft className='fixed z-50 rounded-full  mt-8 ml-6  sm:text-2xl text-4xl text-[#5a5a5a]
    cursor-pointer'/>
   </Link>
   <Image
        className=" fixed -z-20  w-[100%] md:w-screen object-cover min-h-screen 
        opacity-100 sm:opacity-100"
        src="/images/bb.webp"
        width='1200'
        height='800'
        alt="CEO"/>
   <div className="min-h-screen flex flex-row  md:flex-col-reverse ">
   
    {/* left........................................................... */}
    <div className='flex flex-col justify-start overflow-y-scroll 
    scrollbar-hide h-screen bg-[#0f1a20f6]   w-4/6  
       md:w-full md:h-full '>
{/* ...............................info1............................ */}
    <div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

        <div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
            <h2 className='text-right px-[10%]  text-white text-md '>
                هر آنچه یک کلینیک دامپزشکی نیاز دارد</h2>
            
            <p className='text-sm text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
       طراحی , برنامه نویسی و اجرا پلتفرم های یکپارچه برای کلینک ها و پت شاپ ها با کاربری چند منظوره, با امکان اختصاصی سازی بدون محدودیت با توجه به خواسته های کارفرما, بستری یکپارچه, سریع و امن با امکان ویزیت و مشاوره آنلاین  بهمراه پت شاپ و داروخانه و ده ها آیتم دیگر که در ادامه به برخی از آنها اشاره میکنیم  

      </p>
        
        </div>

        <div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/petP2.png"
        width='1200'
        height='800'
        alt="CEO"/>
        </div>
    </div>
{/* .............................../info1............................ */}

{/* ...............................info2............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-right border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
        دسته بندی های جامع و مستقل برای هر گونه </h2>
    <p className='text-sm text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
    پلتفرم به گونه برنامه نویسی و طراحی می شود که تمام دسته ها و زیرمجموعه بصورت مستقل , اختصاصی و جامع باشند علاوه بر آن تمامیت پلتفرم مقیاس پذیر بوده و هیچ محدودیت در اضافه کردن دسته بندی یا بخش های جدید نیست   
    </p>
    <h2 className='w-full border-b-2 py-3 border-gray-500 text-right text-white text-md'> 
           مشخصات آنالیزی پلتفرم توسط گوگل</h2>
 
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pet5.png"
        width='1200'
        height='800'
        alt="CEO"/>
        </div>
</div>
{/* .............................../info2............................ */}



{/* ...............................info3............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-right border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
        تماس های صوتی, تصویری و چت </h2>
    <p className='text-sm text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
    برای داشتن پلتفرمی بدون محدودیت و مستقل تمام بخش ها از قبیل چت ها و تماس های آنلاین در داخل پلتفرم کدنویسی می شوند و از هیچ ماژول و پلاگین خارجی یا آماده ای استفاده نمی شود   
    </p>
    <h2 className='w-full border-b-2 py-3 border-gray-500 text-right text-white text-md'>
        بهترین نتایج در ضعیف ترین پوشش های شبکه ای</h2>
   
</div>


<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pets3.png"
        width='1200'
        height='800'
        alt="CEO"/>
        </div>
</div>
{/* .............................../info3............................ */}

{/* ...............................info4............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
    <h2 className='text-right border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-lg sm:px-[2%]'>فروشگاه و داروخانه اختصاصی هر گونه </h2>
    <p className='text-sm text-right text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
    پلتفرم به گونه برنامه نویسی و طراحی می شود که تمام دسته ها و زیرمجموعه بصورت مستقل , اختصاصی و جامع باشند علاوه بر آن تمامیت پلتفرم مقیاس پذیر بوده و هیچ محدودیت در اضافه کردن دسته بندی یا بخش های جدید نیست   
    </p>
    <h2 className='w-full border-b-2 py-3 border-gray-500 text-right text-white text-md'>
        مشاهده میزان فروش یا درمان هر بخش در داشبورد</h2>
   
</div>


<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pet5.png"
        width='1200'
        height='800'
        alt="CEO"/>
        </div>
</div>
{/* .............................../info4............................ */}


<h2 className='w-full border-b-2 text-white text-center py-4'>مشخصات فنی پلتفرم</h2>
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

        <tr className=" border-b-2  border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-center text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 text-center">
                    JSX
                </td>
                <td className="py-4 px-3 text-center">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-center text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 text-center px-3">
                    JS-JSX
                </td>
                <td className="py-4 text-center px-3">
                    Web App
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-center text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 text-center px-3">
                    JS-TS-JSX
                </td>
                <td className="py-4 text-center px-3">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" ">
                <th scope="row" className="py-4 text-center px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 text-center">
                    Python
                </td>
                <td className="py-4 px-3 text-center">
                    BackEnd
                </td>
            </tr>
           
         

         

          

         
        </tbody>
             </table>

            </div>

<p className='text-right  text-white py-4 px-[5%] text-md  leading-10'>
     داشبورد های مدیریتی مجموعه مدیریت آنلاین این امکان را به وجود می آورد تا تمام آیتم های مد نظر کسب کار خود را در یک بستر مشاهده و مدیریت کنید. این بخش ها در لایه های مدیریتی, ادمین و لایه های اپراتوری قابل اجرا هستند, از قابلیت های این داشبوردها می توان به مدیریت  و حسابداری فروشگاه و داروخانه, مشاهده سود, بخش های کنترل بیماران که شامل پرونده های بیمارن , ویزیت ها, پرداختی ها و... همه و همه در نمودار های شماتیک با قابلیت گزارش گیری لحظه ای می باشند

</p>


<div className='flex justify-center w-full'>
    <DashChartSection/>

</div>





    </div>





    {/* right................................................
    ...........................................................
    ...................................................... */}
    <div className='flex min-h-screen py-6 px-4 flex-col justify-around w-2/6 bg-[#040f14e1] md:w-full'>
 {/* ........................... */}
    <div>
      <h1 className='text-center px-[10%]  text-white text-lg'>
      پلتفرم اختصاصی کلینیک های دامپزشکی 
      </h1>
   
    </div>
{/* ................................. */}
    
      <div className='w-full flex flex-col justify-center items-center'>
        <Model isVisible={showModel} onclose={() => setShowModal(false)}>
               <video   className="w-[100%] h-[100%]" autoPlay loop  controls >
                    <source   src="/video/mypetPersian.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-40 left-5 cursor-pointer items-center '>
                        <button onClick={() => setShowModal(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
             </div>
       <div className='flex justify-center '>
       <Image
             className="md:w-[70%] w-[60%] object-contain"
             src="/images/petP3.png"
             width='800'
             height='800'
             alt="CEO"
             />
      </div>
        </div>      
{/* ........................................... */}

    <div className='grid py-4 grid-cols-4 divide-x bg-[#0f1a20f6] border-y-2'>
              <h1 className= ' text-white text-center '> اندروید</h1>
              <h1 className= ' text-white text-center '>  ای او اس </h1>              
              <h1 className= ' text-white text-center '> ویندوز </h1>
              <h1 className= ' text-white text-center '> وب </h1>
    </div>


    </div>
   
   </div>
   <div>
    
   </div>



 </div>
  )
}

export default mypetP;







