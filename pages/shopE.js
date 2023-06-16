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
const ColumnCatEnglish = dynamic(() => import('../components/DashChart/ColumnCatEnglish'))
const DashChartSectionE = dynamic(() => import('../components/DashChart/DashChartSectionE'))
const Slider = dynamic(() => import('../components/slider/slider'))

const CChartSection = dynamic(() => import('../components/CChart/CChartSection'))



const shopE = () => {
  const [showModel, setShowModal] = useState(false);
  return (
    <div className='w-full h-screen lg:h-full'>
    <Head>
     <title>ONLINE CEO</title>
     <meta name="description" content="نرم افزار دامپزشکی" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   <Link href='/gallery' >
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
   <div className="min-h-screen flex flex-row-reverse  md:flex-col-reverse ">
   
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

        <h2 className='text-left border-b-2 py-3 border-gray-500  px-[5%]  text-[#0c80ad] 
        text-2xl sm:px-[2%]'>
        Make your business ONLINE
        </h2>

            <p className='text-lg w-full text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
            all businesses have something to sell, so nothing better than a scaleable platform  for selling products or services can help you          </p>
            <h2 className='w-full border-b-2 text-white text-center py-4'>Technical specifications of the platforms</h2>
            <div className="   py-5 relative ">
            <Speed />
            <h2 className='text-white text-center'>Fast even in a weak network</h2>
            <div className='w-full flex sm:flex-col justify-center items-center'>
            <CChartSection/>
            <div>
            <Accessibility/>
            <BestPractices/>
            </div>
            </div>
             <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-xs text-gray-100 uppercase   ">
            <tr>
                <th scope="col" className="py-3 text-md text-center border-x-2 border-gray-800 sm:px-1 px-3">
                    frameworks
                </th>
                <th scope="col" className="py-3 text-md text-center sm:px-1 px-3">
                languages
                </th>
                <th scope="col" className="py-3 text-center text-md sm:px-1 border-gray-800 border-x-2 px-3">
                Softwares    
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-gray-100">
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
          
      
            <tr className=" border-b-2  border-gray-100">
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
       
       
        
           
            <tr className=" border-b-2  border-gray-100">
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


             
            <tr className=" border-b-2  border-gray-100">
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
    

        </div>

    </div>
{/* .............................../info1............................ */}

{/* ...............................info2............................ */}
<div className='flex flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center  w-full'>
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
        Comprehensive and independent categories </h2>
<p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
    The platform is programmed and designed in such a way that all categories and sub-categories are independent, exclusive and comprehensive, in addition, the entire platform is scalable and there is no limit in adding new categories or sections.    </p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>Have live reports from all of the components</h2>
  <ColumnCatEnglish/>
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




<p className='text-left border-t-2 text-white py-4 px-[5%] text-md  leading-10'>
The management dashboards of the online CEO community make it possible to view and manage all the items of your business in one platform. These sections can be implemented in management, admin and operator layers
</p>

<div className='flex justify-center w-full'>
    <DashChartSectionE/>

</div>





    </div>





    {/* left................................................
    ...........................................................
    ...................................................... */}
    <div className='flex min-h-screen py-6  flex-col justify-around w-2/6 bg-[#040f14e1] md:w-full'>
 {/* ........................... */}
    <div className=''>
        <h2 className='px-[10%] text-center text-xl text-[#2c9097]'>All Businesses have something to sell</h2>
   
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
              <h1 className= ' text-white text-center '> Android</h1>
              <h1 className= ' text-white text-center '>IOS</h1>              
              <h1 className= ' text-white text-center '> Windos </h1>
              <h1 className= ' text-white text-center '> Web </h1>
            </div>








    </div>
   
   </div>
   <div>
    
   </div>

   




  


 

 </div>
  )
}

export default shopE;












