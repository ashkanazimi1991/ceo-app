import React ,{useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { BsLaptop, BsPhone } from "react-icons/bs";
// import { SlScreenTablet} from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import Model from '../components/Modal';
import { FaPlayCircle } from "react-icons/fa";


import dynamic from "next/dynamic";
const Speed = dynamic(() => import('../components/DashChart/Speed'))
// const ColumnCatEnglish = dynamic(() => import('../components/DashChart/ColumnCatEnglish'))
const DashChartSectionE = dynamic(() => import('../components/DashChart/DashChartSectionE'))
// const CChartSection = dynamic(() => import('../components/CChart/CChartSection'))
const SliderDrApp = dynamic(() => import('../components/slider/SliderDrApp'))

const pasteur = () => {
  const [showModel, setShowModal] = useState(false);
  return (
    <div className='w-full h-auto lg:h-full'>
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
        className=" fixed -z-20  w-[100%] md:w-screen object-cover min-h-screen 
        opacity-100 sm:opacity-100"
        src="/images/bb.webp"
        width='1200'
        height='800'
        alt="CEO"/>
   <div className="min-h-screen flex flex-row-reverse  md:flex-col-reverse ">
   
    {/* left........................................................... */}
    <div className='flex flex-col justify-start overflow-y-scroll 
    scrollbar-hide h-screen bg-[#0f1a20f6]   w-4/6  
       md:w-full md:h-full '>
{/* ...............................info1............................ */}
    <div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

        <div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
        <h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%] 
         text-[#0c80ad] text-xl sm:px-[2%]'>
                Everything a clinic needs</h2>
            <p className='text-lg w-full text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
            A fast and secure integrated platform for clinics, hospitals and health, beauty and treatment centers with web or software sections such as intelligent scheduling for online and in-person visits, patient files, and dozens of other management and control items. We will mention some of them below
            </p>
            <h2 className='w-full border-b-2 text-white text-center py-4'>Technical specifications of the platform</h2>
            <div className="   py-5 relative ">
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
                    Dashboard
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
        <div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
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
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad]
 text-xl sm:px-[2%]'>
Get an appointment online in less than 10 seconds
        </h2>
<p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
Choosing an in-person or online appointment from all over the world, viewing free times and choosing the right time by the patient or choosing the closest time
   </p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>Applicable for all devices and browsers</h2>
  
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
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
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad]
 text-xl sm:px-[2%]'>
Integrated platform for direct communication with the patient
         </h2>
<p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
To have an unlimited and independent platform, all parts such as chat and online calls are coded inside the platform and no external or ready-made modules and plugins are used.   
     </p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>Best results in weakest network coverage</h2>
    <div className="   py-5 relative ">
           <Speed />
    </div>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
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
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad]
 text-xl sm:px-[2%]'>
Comprehensive file of patients </h2>
    <p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
    Patient access to all their medical information from all over the world, such as tests, scans, prescriptions, treatment charts, and medication reminders.
    </p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>Instant archiving and reporting</h2>
    <div className="   py-5 relative ">
           {/* <ColumnCatEnglish/> */}
    </div>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pastor5.png"
        width='1200'
        height='800'
        alt="CEO"/>
</div>

</div>
<div className='px-[20%] sm:px-[5%]'>

<SliderDrApp/>
</div>
{/* .............................../info4............................ */}




<p className='text-left border-t-2 text-white py-4 px-[5%] text-md  leading-10'>
Management dashboards are exclusive and coded according to the needs of the collection, so there is no limit to adding new sections in the present and future. Integration provides the possibility to view and manage all your business items in one platform. These departments can be implemented in management, admin and operator layers, the capabilities of these dashboards can be used to manage patients, determine the type of appointment, observe the profit and loss of each department, archive patients which includes patient files, visits and payments and ... Cited. All these facilities can be presented in the form of schematic diagrams with real-time reporting
 </p>

<div className='flex justify-center w-full'>
    <DashChartSectionE/>

</div>





    </div>





    {/* right................................................
    ...........................................................
    ...................................................... */}
    <div className='flex min-h-screen py-6 px-4 flex-col  justify-around w-2/6 bg-[#040f14e1] md:w-full'>
 {/* ........................... */}
    <div>
      <h1 className='text-center px-[10%] leading-10  text-white text-xl '>
      Dedicated platform for clinics or hospital
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
      <div className='flex justify-center '>
       <Image
             className="md:w-[90%] w-[100%] object-contain"
             src="/images/drapp.png"
             width='800'
             height='800'
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

export default pasteur;














