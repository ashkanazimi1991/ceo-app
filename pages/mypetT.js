import React ,{useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsLaptop, BsPhone } from "react-icons/bs";
import { SlScreenTablet} from "react-icons/sl";
import { BsArrowLeft } from "react-icons/bs";
import Model from '../components/Modal';
import { FaPlayCircle } from "react-icons/fa";


import dynamic from "next/dynamic";
const Speed = dynamic(() => import('../components/DashChart/Speed'))
const ColumnCatEnglish = dynamic(() => import('../components/DashChart/ColumnCatEnglish'))
const DashChartSectionE = dynamic(() => import('../components/DashChart/DashChartSectionE'))
const CChartSection = dynamic(() => import('../components/CChart/CChartSection'))


const mypetT = () => {
  const [showModel, setShowModal] = useState(false);
  return (
    <div className='w-full h-auto lg:h-full'>
    <Head>
     <title>ONLINE CEO</title>
     <meta name="description" content="Veteriner klinikleri için özel platform" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   <Link href='/galleryT' >
   <BsArrowLeft className='fixed z-50 rounded-full  mt-8 ml-6  sm:text-2xl text-4xl text-[#5a5a5a]
    cursor-pointer'/>
   </Link>
   <Image
        className=" fixed -z-20  w-[100%] md:w-full object-cover min-h-screen 
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
        <h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
        Bir veteriner kliniğinin ihtiyacı olan her şey
        </h2>
            <p className='text-lg w-full text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
            Çevrimiçi ziyaretler ve konsültasyonların yanı sıra mağazalar, evcil hayvan dükkanları ve çevrimiçi eczaneler ve bazılarından aşağıda bahsedeceğimiz onlarca başka öğe ile entegre, hızlı ve güvenli bir hastane.
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
        <div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pete11.png"
        width='1200'
        height='800'
        alt="CEO"/>
</div>
    </div>
{/* .............................../info1............................ */}

{/* ...............................info2............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
Her tür için kapsamlı ve bağımsız kategoriler
 </h2>
<p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
Platform, tüm kategori ve alt kategorilerin bağımsız, özel ve kapsamlı olacağı şekilde programlanmış ve tasarlanmıştır, ayrıca platformun tamamı ölçeklenebilir ve yeni kategori veya bölüm ekleme sınırı yoktur.
</p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>Analytical profile of the platform by Google</h2>
  
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
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
Sesli, görüntülü arama ve Canlı sohbet için özel bir platform
 </h2>
<p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
Sınırsız ve bağımsız bir platforma sahip olmak için sohbetler ve çevrimiçi aramalar gibi tüm parçalar platformun içinde kodlanmıştır ve harici veya hazır modüller ve eklentiler kullanılmamaktadır.</p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>Best results in weakest network coverage</h2>
    <div className="   py-5 relative ">
           <Speed />
    </div>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pete3.png"
        width='1200'
        height='800'
        alt="CEO"/>
</div>
</div>
{/* .............................../info3............................ */}

{/* ...............................info4............................ */}
<div className='flex flex-row-reverse  lg:flex-col-reverse w-full justify-center items-center p-[5%] '>

<div className='flex h-full flex-col p-[5%] sm:p-1 justify-center lg:w-full w-1/2'>
<h2 className='text-left border-b-2 py-3 border-gray-500  px-[10%]  text-[#0c80ad] text-md sm:px-[2%]'>
Her tür için mağazalar ve özel eczaneler
</h2>
    <p className='text-sm text-left text-gray-400 py-2 px-[10%] sm:px-[2%] leading-10'>
    Platform, tüm kategori ve alt kategorilerin bağımsız, özel ve kapsamlı olacağı şekilde programlanmış ve tasarlanmıştır, ayrıca platformun tamamı ölçeklenebilir ve yeni kategori veya bölüm ekleme sınırı yoktur.   </p>
    <h2 className='w-full border-b-2 text-white text-center py-4'>View the amount of sales or treatment in the dashboard</h2>
    <div className="   py-5 relative ">
           <ColumnCatEnglish/>
    </div>
</div>

<div className='flex justify-center w-1/2 items-center  lg:w-full p-[5%]'>
        <Image
        className="lg:w-3/4 items-center object-contain"
        src="/images/pete5.png"
        width='1200'
        height='800'
        alt="CEO"/>
</div>

</div>
{/* .............................../info4............................ */}




<p className='text-left border-t-2 text-white py-4 px-[5%] text-md  leading-10'>
Online yönetim setinin yönetim panoları, işletmenizin tüm kalemlerini tek bir platformda görüntülemenizi ve yönetmenizi sağlar. Bu bölümler yönetim, yönetici ve operatör katmanlarında uygulanabilir, bu panoların yetenekleri mağaza ve eczane yönetimi ve muhasebe, kar görüntüleme, hasta dosyaları, ziyaretler ve ödemeleri içeren hasta kontrol bölümleri için kullanılabilir. Ve... hepsi gerçek zamanlı raporlama kabiliyetine sahip şematik diyagramlardadır. </p>

<div className='flex justify-center w-full'>
    <DashChartSectionE/>

</div>





    </div>





    {/* right................................................
    ...........................................................
    ...................................................... */}
    <div className='flex min-h-screen py-6 px-4 flex-col justify-center w-2/6 bg-[#040f14e1] md:w-full'>
 {/* ........................... */}
    <div>
      <h1 className='text-center px-[10%]  text-white text-lg '>
      Veteriner klinikleri için özel platform
       </h1>
     </div>
{/* ................................. */}
    
      <div className='w-full flex flex-col justify-center items-center'>
        <Model isVisible={showModel} onclose={() => setShowModal(false)}>
               <video   className="flex  w-[100%] h-[100%]" autoPlay loop  controls >
                    <source   src="/video/mypetTurkish.mp4"   type="video/mp4"  />
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
             className="md:w-[70%] w-[90%] sm:w-[100%] object-contain"
             src="/images/petP3.png"
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

export default mypetT;












