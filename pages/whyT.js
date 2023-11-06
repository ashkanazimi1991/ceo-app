import React from 'react';
import Head from 'next/head';
import WhyT from '../components/Why/WhyT';
import { BsArrowLeft } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';

const whyT = () => {
  return (
    <div className="h-full ">
    <Head>
     <title>ONLINE CEO</title>
     <meta name="description" content="onlineceo" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>

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
   
   <Link href='/turkish' >
   <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-1 ring-white ring-2 
    rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
    cursor-pointer'/>
   </Link>

   <WhyT/>
   

   
  
 
 </div>
  )
}

export default whyT;