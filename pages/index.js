import Hero from "../components/Hero/Hero";
import Head from 'next/head';
import dynamic from "next/dynamic";
// import Polar from "../components/SmartSchool/Polar";
// import Polygon from "../components/SmartSchool/Polygon";
// import Raychat from "../components/Raychat ";
// import { registerLicense } from '@syncfusion/ej2-base';

const SoftwareDevelopment = dynamic(() => import('../components/SoftwareDevelopment/SoftwareDevelopment'))
const Gig = dynamic(() => import('../components/Gigs/Gig'))
const WhyE = dynamic(() => import('../components/Why/WhyE'))


export default function Home() {
  // registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diXn9ac3RWQWdUUEA=');
  return (
    <div className=" container">
       <Head>
        <title>ONLINE CEO</title>
        <meta name="description" content="online ceo developer community develop software and platforms" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/2.png" />
        <link rel='manifest' href='/manifest.json' />  
      </Head>
      <div className="flex flex-col">
      <Hero/>
      <SoftwareDevelopment/>
      <Gig/>
      <WhyE/>

    {/* <Polygon/> */}
    {/* <Polar/> */}
      </div>

      
     <div>
      
     </div>
    
  

    </div>
    

  )}
