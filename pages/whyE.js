import React from 'react';
import Head from 'next/head';
import WhyE from '../components/Why/WhyE';
import { BsArrowLeft } from "react-icons/bs";
import Link from 'next/link';


const whyE = () => {
  return (
    <div className="h-full ">
    <Head>
     <title>ONLINE CEO</title>
     <meta name="description" content="مدیریت انلاین" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   
   <Link href='/' >
   <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-1 ring-white ring-2 
    rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
    cursor-pointer'/>
   </Link>

   <WhyE/>
   

   
  
 
 </div>
  )
}

export default whyE;