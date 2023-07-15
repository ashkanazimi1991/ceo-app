
import React ,{useState}from 'react';
import Link from 'next/link';

import dynamic from "next/dynamic";

const Slider2 = dynamic(() => import('../cardslider/cardSlider2/Slider2'))
const SliderMainE = dynamic(() => import('../SliderMain/SliderMainE'))

const AcordionE = dynamic(() => import('../Acordion/AcordianE'))







// import { useTypewriter } from 'react-simple-typewriter'


export default function SoftwareDevelopment() {

  const [open, setOpen ] = useState(false);
  const toggle = ( id) => {
    if(open === id) {
      return setOpen(null)
    }
    setOpen(id)
  }
  
  const acodionData =[
    {
      id:'1',
      img: '/images/ss.png',
      title:"Startup Platforms",
      desc:"Join us if you have something in mind that you want to present to the world.Any startup idea needs its own platform to handle the business or services.we take care of that based on your exact requirements with the world's Top frameworks and programming languages.", 
      alt:"online ceo",
    },
    {
      id:'2',
      img: '/images/cat.png',
      title:"Online Shops",
      desc:"High-scale online shops developed for thousand or millions of users, with perfect UI and UX, by the world's top programming languages python and JavaScript with the purpose of, CEOs can have  fast and secure platforms with their own features and professional admin dashboards  and  to grows forever",
      alt:"online ceo",     
    },
    {
      id:'3',
      img: '/images/fas1t.png',
      title:"Smart Education Platforms",
      desc:"Fast and secure platforms for education in different fields with features such as own high-security watermark and copyright for teachers, institute own chat room, efficiency chart, skill chart, 3d classroom, online teaching board, Shops, teacher, student, and admin professional dashboard and etc. all in one platform",
      alt:"online ceo",
    },
    {
      id:'4',
      img: '/images/3.png',
      title:"Health Care Platforms",
      desc:"Integrated and dedicated platforms for clinics, hospitals, doctors, and health, and treatment services for quick and easy communication between the patient and the doctor with facilities such as online visits, the smart appointment system, comprehensive patient file, providing medical and health services on-site and Other Features",
      alt:"online ceo",
    },
    {
      id:'5',
      img: '/images/fibex2.png',
      title:"Blockchain and Crypto platforms",
      desc:"Designing and programming platforms of cryptocurrency exchanges in  React framework (Binance) contain all trading charts for buying, selling, and maintaining cryptocurrency, building Android and iOS applications for the exchange, wallet, and token generation Currency on the Ethereum blockchain and other blockchains",
      alt:"online ceo",
    },
    {
      id:'6',
      img: '/images/company.png',
      title:"Company and Factory Platforms",
      desc:" Designing and implementing integrated platforms to introduce the company and sell products and services professionally and exclusively on the basis of the world's fastest frameworks for all electronic devices and the web with management dashboards according to your company's needs.",
      alt:"online ceo",
    },
    {
      id:'7',
      img: '/images/food.png',
      title:"Service Base Platforms",
      desc:"We are providing scalable service platforms with facilities such as geographical maps and online locations for on-site services, multi-stage sales, intelligent price calculation, and dedicated management dashboards with the possibility of uploading to popular markets worldwide.",
      alt:"online ceo",
    },
    {
      id:'8',
      img: '/images/robotic.png',
      title:"Robtic Automation Platforms",
      desc:"programming from scratch for robotıc arm and robotic automation with fast and flexible programming languages with an easy and accurate user interface for internal robot hardware and user-side control and management apps.",
      alt:"online ceo",
    },
    {
      id:'9',
      img: '/images/iot.png',
      title:"IoT Platforms",
      desc:"Designing and programming Internet of Things platforms for industrial farms and personal collections with the aim of online control and management of relevant factors such as viewing information from sensors, controlling electronic systems, viewing the output of machines or operators, etc., all in an integrated platform. With a dedicated management dashboard with features such as real-time reporting on schematic diagrams",
      alt:"online ceo",
    },
    {
      id:'10',
      img: '/images/chair.png',
      title:"Virtual Reality and 3D ",
      desc:"The design and implementation of store and service platforms with different presentations such as virtual reality and 3D observations and virtual tours to facilitate services and higher purchasing accuracy are available for all CEOs.",
      alt:"online ceo",
    }
    

  ]


  
  // const [text] = useTypewriter({
  //   words: ['We Develop','Large-Scale', 'Built to Last', 'Fast & Secure', 'Platforms'],
  //   loop: 0
  // })


  return (
    <div className='min-h-screen flex flex-col md:max-h-full  sm:flex-col w-full'>
      
        {/* left............................... */}

        <div className='flex flex-col justify-between   container w-full 
        md:w-full bg-[#000000b4] '>

  <Link href="/gallery">
   <div className='bg-[#0f1a20f6] items-center flex w-full border-y-2 justify-around'>
      
             <h1 className= 'py-4  text-[#4ca8cc] text-center text-2xl sm:text-sm whitespace-nowrap px-2'>
              SoftWare Development
            </h1>
           

           <div className='grid  grid-cols-3  w-3/6  '>
            <h1 className= ' text-white text-center sm:text-sm px-4 whitespace-nowrap'> Android </h1>
            <h1 className= ' text-white text-center sm:text-sm px-4  whitespace-nowrap'> IOS </h1>
            <h1 className= ' text-white text-center sm:text-sm px-4 whitespace-nowrap '> Web </h1>
          </div>
          </div>
  </Link>


         

          <div className='flex pt-4 flex-col min-h-[450px] bg-[#000000a8] justify-center'>
          <p className='text-gray-400 text-center py-6'>Dedicated web and mobile user interfaces, based on JavaScript and global UI and UX standards  </p>
            <Slider2   
            img1='/images/1.png' img2='/images/cat.png' 
            img3='/images/3.png' img4='/images/fibex2.png'
             img5='/images/5.png' img6='/images/robotic.png'
          title1='Startup Ideas' title2='Large-scale Shops' title3='Healthcare and Lifestyle'
           title4='Blockchain and Crypto' title5='Service Base Platforms' title6='Robotic and IoT' 
          />


            <p className='text-gray-400 text-center py-6'> Live research of management departments in comprehensive and exclusive dashboards with Python programming language </p>

            {/* <SliderMainE/> */}
          </div>

          

       
{/* ........................................ */}
       
{/* .............................................. */}

      
       </div>


        {/* right............................. */}
       {/* acordion................................................. */}     
      <div className="w-full h-full bg-[#000000c5]">
            <div className='flex justify-around w-full py-6 flex-row'>
                <h1 className='text-left w-1/2  text-gray-400 tracking-widest  text-xl md:text-lg '>  
                  {/* <span>{text}</span> */}
                  Our Experiences
                </h1>
                <Link href="/whyE">          
                <h2 className='animate-pulse  text-xl text-white  md:text-lg text-center'>
                  WHY US ?
                </h2>
                </Link>

            </div>

            <div className='overflow-y-auto  max-h-[90%] md:max-h-full md:overflow-hidden  scrollbar-hide '>
             <section  className="group flex justify-center border-r-4  p-3 ">
                      <div className="flex flex-col items-center  justify-center px-[5%]  cursor-pointer">
                      {acodionData.map((data,id) => {
                        return <AcordionE key={id} open={id === open} title={data.title} 
                        desc={data.desc} img={data.img} alt={data.alt} toggle={ () => toggle(id)}  />;
                      } )}              
                    </div>
            
              </section>
            </div>
       </div>


     </div>  
      
    
    
    
  )
}
