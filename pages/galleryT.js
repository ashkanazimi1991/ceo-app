import React ,{useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";
import Image from 'next/image';
import Model from '../components/Modal'
import { FaPlayCircle } from "react-icons/fa";




import img2 from '../public/images/sss.png'
import img3 from '../public/images/drapp.png'
import img4 from '../public/images/fast3.png'
import img5 from '../public/images/pet4.png'
import img6 from '../public/images/fibex.png'
import img7 from '../public/images/sssdd.png'
import img8 from '../public/images/iot2.png'





const galleryT = () => {
    const [showModel, setShowModal] = useState(false);
    const [showModel2, setShowModal2] = useState(false);
    const [showModel3, setShowModal3] = useState(false);
    const [showModel4, setShowModal4] = useState(false);
    const [showModel5, setShowModal5] = useState(false);
    const [showModel6, setShowModal6] = useState(false);



  return (
    <div className="h-full container">
    <Head>
     <title>CEO Project</title>
     <meta name="description" content="پروژه های مدیریت آنلاین" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/2.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   <div className="w-full ">

   <Link href='/turkish' >
   <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-1 ring-white ring-2 
    rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
    cursor-pointer'/>
   </Link>
   <Image
             className=" fixed -z-20 o  object-cover h-screen "
             src="/images/HeroSpace.webp"
             width='4377'
             height='2043'
             alt="onlineceo"
            />
      <Image
             className=" fixed -z-10  animate-pulse bottom-0 object-contain  "
             src="/images/spaceStart.webp"
             width='4377'
             height='2043'
             alt="onlineceo"
            />

    <div className="w-screen h-full grid   bg-gradient-to-b from-transparent to-[#07090aec]
     px-[5%]  grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-[5%]  gap-8  ">
                        
       





{/* pasteur....................
..........................
.......................................
.............................................................. */}
  <div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center  bg-gradient-to-b from-transparent to-[#07090aec] 
         items-center  rounded-xl">

            <Model isVisible={showModel2} onclose={() => setShowModal2(false)}>
            <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/pasteur.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal2(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4  text-2xl font-semibold text-gray-200 
          ">Pasteur Startup</h1>
            <Image  src={img3}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Doktor ve hasta bakım ve tedavi platformu</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-lg text-gray-400  tracking-wide   border-x-2 border-[#994dac3f]border-[#994dac3f]">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
           
         

         

          

         
        </tbody>
    </table>
</div>
        <div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            <Link href='/pasteur' >
            <h className="text-white w-[100%]  flex justify-center text-center
             py-4">Daha fazla bilgi</h>
            </Link>
        </div>


        </div>

{/* crypto ......................................... */}
<div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center  bg-gradient-to-b from-transparent to-[#07090aec]
         items-center  rounded-xl">

            <Model isVisible={showModel5} onclose={() => setShowModal5(false)}>
            <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/cryptoop.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal5(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4 text-2xl font-semibold text-gray-200 
          ">Crypto-BlockChain</h1>
            <Image  src={img6}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Çevrimiçi ticaret ve takas platformu ve kripto para biriminin oluşturulması</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-lg text-gray-400  tracking-wide   border-x-2 border-[#994dac3f]border-[#994dac3f] ">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
           
         

         

          

         
        </tbody>
    </table>
</div>

        <div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            <Link href='/cryptoT' >
            <h3 className="text-white w-[100%]  flex justify-center text-center
             py-4">Daha fazla bilgi</h3>
            </Link>
        </div>

        </div>


{/* FastSchool......................................... */}
<div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center  bg-gradient-to-b from-transparent to-[#07090aec] 
         items-center  rounded-xl">

            <Model isVisible={showModel3} onclose={() => setShowModal3(false)}>
            <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/fast.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal3(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4 text-2xl font-semibold text-gray-200 
          ">Smart School </h1>
            <Image  src={img4}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Akıllı ve çevrimiçi eğitim için entegre bir platform</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-lg text-gray-400  tracking-wide   border-x-2 border-[#994dac3f] ">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
           
         
        </tbody>
    </table>
</div>

        <div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            {/* <Link href='/pasteur' > */}
            <h className="text-white w-[100%]  flex justify-center text-center
             py-4">Daha fazla bilgi</h>
            {/* </Link> */}
        </div>

        </div>






{/* mypet......................................... */}
<div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center  bg-gradient-to-b from-transparent to-[#07090aec] 
         items-center  rounded-xl">

            <Model isVisible={showModel4} onclose={() => setShowModal4(false)}>
            <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/mypet.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal4(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4 text-2xl font-semibold text-gray-200 
          ">Mypet Startup</h1>
            <Image  src={img5}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Veteriner klinikleri ve evcil hayvan dükkanları platformu</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-lg text-gray-400  tracking-wide   border-x-2 border-[#994dac3f] ">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
           
         

         

          

         
        </tbody>
    </table>
</div>


        <div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            <Link href='/mypetT' >
            <h className="text-white w-[100%]  flex justify-center text-center
             py-4">Daha fazla bilgi</h>
            </Link>
        </div>

        </div>






{/* Shops ......................................... */}
<div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center  bg-gradient-to-b from-transparent to-[#07090aec] 
         items-center  rounded-xl">

            <Model isVisible={showModel6} onclose={() => setShowModal6(false)}>
            <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/chair.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal6(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4 text-2xl font-semibold text-gray-200 
          ">Shops</h1>
            <Image  src={img7}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Ölçeklenebilir ve çok amaçlı mağaza platformları</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-lg text-gray-400  tracking-wide   border-x-2 border-[#994dac3f]">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
                   
        </tbody>
    </table>
</div>


<div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            <Link href='/shopT' >
            <h className="text-white w-[100%]  flex justify-center text-center
             py-4">Daha fazla bilgi</h>
            </Link>
        </div>

        </div>      





        
{/* iot ......................................... */}
<div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center  bg-gradient-to-b from-transparent to-[#07090aec] 
         items-center  rounded-xl">

            <Model isVisible={showModel6} onclose={() => setShowModal6(false)}>
            <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/iot.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal6(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4 text-2xl font-semibold text-gray-200 
          ">IoT Automation</h1>
            <Image  src={img8}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Çiftlikler ve işletmeler için IoT platformlarının tasarlanması ve uygulanması</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-lg text-gray-400  tracking-wide   border-x-2 border-[#994dac3f]">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django - Pi
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
                   
        </tbody>
    </table>
</div>


<div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            <Link href='/iot' >
            <h className="text-white w-[100%]  flex justify-center text-center
             py-4">Daha fazla bilgi</h>
            </Link>
        </div>

        </div>  

{/* carnet......................................... */}
<div className="flex flex-col border border-gray-700 px-16 sm:px-6 justify-center 
         items-center  rounded-xl">

            <Model isVisible={showModel} onclose={() => setShowModal(false)}>
               <video   className="w-[60%] sm:w-[100%] md:w-[70%]  " autoPlay loop  controls >
                    <source   src="/video/carnet.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
             </Model>
             <div className=' relative top-48 pl-10 cursor-pointer items-center '>
                        <button onClick={() => setShowModal(true)} className='w-20 h-20'>
                        <FaPlayCircle  className="text-5xl animate-pulse bg-white rounded-full  text-[#dd0101]"/>
                        </button>
                    </div>

         <h1 className="mt-4 text-2xl font-semibold text-gray-200  ">
            CarNet Startup
            </h1>
            <Image  src={img2}  alt="carnet" width='350' height='350'
                 className=" max-h-58   sm:w-[80%] w-[70%] object-contain "/>
                 
         <h2 className="mt-2 text-center text-gray-500">Bulunduğunuz yerde araba servisi</h2>

<div className="   py-5 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-400  ">
        <thead className="text-xs text-gray-100 uppercase  border-x-2 border-[#994dac3f]">
            <tr>
                <th scope="col" className="py-3 px-3">
                    Framework
                </th>
                <th scope="col" className="py-3 px-3">
                language
                </th>
                <th scope="col" className="py-3 px-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React 
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Admin
                </td>
            </tr>
          
      
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Nextjs
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                   Web Application
                </td>
            </tr>
       
       
        
           
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    React Native
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    JSX
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    Android-IOS
                </td>
            </tr>


             
            <tr className=" border-b-2  border-[#994dac3f]">
                <th scope="row" className="py-4 px-6 font-medium text-gray-100 whitespace-nowrap dark:text-white">
                    Django
                </th>
                <td className="py-4 px-3 whitespace-nowrap">
                    Python
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                    BackEnd
                </td>
            </tr>
           
         

         

          

         
        </tbody>
    </table>
</div>

        <div className='w-full border rounded shadow shadow-[#994dacbe] mb-5 border-[#994dac3f]'>
            <h className="text-white w-full flex justify-center text-center
             py-4">Daha fazla bilgi</h>
        </div>

        </div>
                
    </div>
    

   </div>

   
  
 
 </div>
  )
}

export default galleryT;