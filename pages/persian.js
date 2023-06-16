import React from 'react';
import Head from 'next/head';
import HeroPersian from '../components/Hero/HeroPersian';
 import dynamic from "next/dynamic";


 const SoftwareDevPersian = dynamic(() => import('../components/SoftwareDevelopment/SoftwareDevPersian'))
 const GigP = dynamic(() => import('../components/Gigs/GigP'))
 const WhyP = dynamic(() => import('../components/Why/WhyP'))


const persian = () => {
  return (
    <div className="h-full ">
       <Head>
        <title>ONLINE CEO</title>
        <meta name="description" content="online ceo" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/2.png" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
   <div className=" ">
     <HeroPersian/>
     
   <SoftwareDevPersian/>
   <GigP/>
   <WhyP/>

   </div>

   
  
 
 </div>
  )
}

export default persian;