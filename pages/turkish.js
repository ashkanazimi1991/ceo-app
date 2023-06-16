import React from 'react';
import Head from 'next/head';
import HeroTurkish from '../components/Hero/HeroTurkish';
 import dynamic from "next/dynamic";

 const SoftwareDevTur = dynamic(() => import('../components/SoftwareDevelopment/SofrwareDevTur'))
 const GigT = dynamic(() => import('../components/Gigs/GigT'))
 const WhyT = dynamic(() => import('../components/Why/WhyT'))



const turkish = () => {
  return (
    <div className=" container">
       <Head>
        <title>ONLINE CEO</title>
        <meta name="description" content="online ceo" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/2.png" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
   <div className="flex flex-col">
     <HeroTurkish/>
   <SoftwareDevTur/>
   <GigT/>
   <WhyT/>
   </div>

   
  
 
 </div>
  )
}

export default turkish;