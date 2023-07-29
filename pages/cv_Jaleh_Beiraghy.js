import Head from 'next/head'
import Link from 'next/link';

import Image from 'next/image'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineLibrary, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiPlayCircle } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const cv_Jaleh_Beiraghy = () => {
  return (
    <div className='max-w-[1400px] container bg-[#000]   '>
     <Head>
     <title>Jaleh Beiraghy</title>
     <meta name="description" content="ژاله بیرقی" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/2.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
      

        <div className=' bg-[#fff] flex flex-row h-70 '>
 
          <img  src="./images/j3.jpg"  alt="Jaleh Beiraghy"
              className="w-1/4 max-h-80 rounded-[10] object-center  object-contain "/>
            <div className='w-3/4 flex flex-col justify-center py-6'>
              <h1 className="text-black tracking-widest text-4xl font-bold md:text-3xl sm:text-2xl text-center">
              Jaleh Beiraghy </h1>
              <h2 className='text-[#000] text-3xl tracking-wider font-semibold text-center 
              sm:text-xl md:text-2xl '>
               Front-End Development </h2>
            </div>

        </div>
            <div className='bg-gray-600   py-10 flex flex-row sm:flex-col  items-center '>
                <h1 className='w-1/4 sm:w-screen py-2 tracking-widest text-right sm:text-center 
                text-2xl font-bold text-black border-b-4 min-w-300 whitespace-nowrap md:text-xl'>
                  ABOUT ME</h1>
                <h2 className='w-3/4 sm:w-screen sm:py-10 px-20 sm:px-10  text-
                 text-[#fff] text-justify'>
                  In 2008, I became interested in web development.
                  Currently, I work as a front-end developer at OnlineCEO. we built many
                   platforms & startups in different fields, such as large-scale platforms, Web apps, 
                   Native apps, Robotic & IoT automation, crypto exchange and, blockchain development. 
                  <br></br> right now we are continuously
                    building more and improving the built ones.</h2>

                  
                  
                  
            </div>
           
           
           
           
            {/* main body */}
            <div className='flex flex-row  sm:flex-col-reverse  '>
              
              
              {/* left col */}
                <div className='bg-gray-800  sm:w-screen justify-start min-w-300  sm:pl-[10%] pl-[4%]' >
                  
                  


                  {/* Skils */}

                  <h1 className=' pr-6 pt-5 font-bold text-white text-left tracking-widest'>SKILLS</h1>
                  <div className='border-b-4  reletive r-0 my-2'></div>

                      {/* Programming Skill */}
                        <div className='flex flex-col  w-[100%] pb-20   '>
                          <div className='flex flex-row py-2  justify-between items-center'>
                        
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'
                              aria-label='Instagram'>
                              <h1 className='text-white pr-2 sm:pl-10 '>Programming </h1>
                            </Link>
                        <div className='border-l-2 pr-10'>
                          <h2 className='text-white text-left pl-4 w-40'>"Java Script"</h2>
                        
                          <h2 className='text-white text-left pl-4 w-40'>"Python"</h2>
                        
                        
                          <h2 className='text-white text-left pl-4 w-40'>"Tailwindcss"</h2>
                        
                          <h2 className='text-white text-left pl-4 w-40'>"Html / CSS"</h2>
                        </div>
                        </div>

                    {/* FrameWork */}

                        <div className='flex flex-row py-2  justify-between items-center'>
                       
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'
                              aria-label='Instagram'>
                              <h1 className='text-white  sm:pl-10 w-30'>FrameWork</h1>
                            </Link>
                          <div className='border-l-2 pr-10'>
                            <h2 className='text-white text-left pl-4 w-40'>"React"</h2>
                            <h2 className='text-white text-left pl-4 w-40'>"React Native"</h2>
                            <h2 className='text-white text-left pl-4 w-40'>"ٍExpo"</h2>
                            <h2 className='text-white text-left pl-4 w-40'>"Nextjs"</h2>
                           
                          </div>
                        </div>



                  
                  {/* Automation IDE */}

                        <div className='flex flex-row py-2  justify-between items-center'>
                            {/* <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  
                              aria-label='Instagram'>
                              <FaRegDotCircle className=' w-10 text-sm  text-[#fff] '/> 
                            </Link>   */}
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h1 className='text-white sm:pl-10 w-30'>Automation</h1>
                            </Link>
                       
                       
                       
                       
                       
                        </div>





                  {/* Other */}

                      <div className='flex flex-row py-2  justify-between items-center'>
                            {/* <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  
                              aria-label='Instagram'>
                              <FaRegDotCircle className=' w-10 text-sm  text-[#fff] '/> 
                            </Link>   */}
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h1 className='text-white sm:pl-10 w-30'>Other Skill</h1>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left pl-4 w-40 whitespace-nowrap'>"Project Management"</h2>
                        <h2 className='text-white text-left pl-4 w-40'>"Ui,Ux "</h2>
                        <h2 className='text-white text-left pl-4 w-40'>"Figma"</h2>
                        <h2 className='text-white text-left pl-4 w-40'>"Git"</h2>
                       </div>
                      </div>

{/* ........................................................................................... */}
                  {/* language */}
                  <h1 className=' pr-6 pt-5 font-bold text-white text-left tracking-widest'>LANGUAGE</h1>
                  <div className='border-b-4  reletive r-0 my-2'></div>


                  <div className='flex flex-row py-2  justify-between items-center'>
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h1 className='text-white sm:pl-10 w-30'>Native</h1>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left pl-4 w-40'>"Turkish"</h2>
                        
                        <h2 className='text-white text-left pl-4 w-40'>"Persian"</h2>
                       </div>
                      </div>


                      <div className='flex flex-row py-2  justify-between items-center'>
                            <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'>
                              <h1 className='text-white sm:pl-10 w-30'>Other  </h1>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left pl-4 w-40'>"English - Advance "</h2>
                      
                       </div>
                      </div>


{/* .....contact........................................................................ */}



                      <h1 className=' pr-6 pt-5 font-bold text-white text-left tracking-widest '>
                        CONTACTS</h1>
                  <div className='border-b-4  reletive r-0 my-2'></div>

                  <div className='flex flex-col   '>

                    {/* Phone */}
                      <div className='flex flex-row py-2'>
                        <Link href='tel:+989146232212'>
                          <FiPhone className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='tel:+989146232212'>
                          <h1 className='text-white'>+98 914 623 2212</h1>
                        </Link>
                      </div>

                      {/* office */}
                      <div className='flex flex-row  py-2'>
                      
                      
                      
                       
                       
                       
                      </div>

                      {/* instagram */}
                      <div className='flex flex-row  py-2'>
                        <Link href='https://www.instagram.com/jaleh.beiraghy' target='_blank'  aria-label='Instagram'>
                          <FaInstagram className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='https://www.instagram.com/jaleh.beiraghy' target='_blank'  aria-label='Instagram'>
                          <h1 className='text-white px-1'>jaleh.beiraghy</h1>
                        </Link>
                      </div>

                      {/* telegram */}
                      <div className='flex flex-row  py-2'>
                        <Link href='https://t.me/jaleh_beiraghy' target='_blank'  aria-label='telgram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='https://t.me/jaleh_beiraghy' target='_blank'  aria-label='telgram'>
                          <h1 className='text-white px-2'>jaleh_beiraghy</h1>
                        </Link>
                      </div>
                            {/* mail */}
                      <div className='flex flex-row  py-2'>
                        <Link href="mailto:beiraghyjaleh@gmail.com" target='_blank'  aria-label='mail'>
                          <HiOutlineMail className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href="mailto:beiraghyjaleh@gmail.com" target='_blank'  aria-label='mail'>
                          <h1 className='text-white px-2'>beiraghyjaleh@gmail.com</h1>
                          
                        </Link>
                      </div>

                                 {/* location */}
                      <div className='flex flex-row  py-2'>
                        <Link href="https://goo.gl/maps/ADLwGuyzV7iG2S689" target='_blank'  aria-label='mail'>
                          <HiOutlineLocationMarker className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href="https://goo.gl/maps/ADLwGuyzV7iG2S689" target='_blank'  aria-label='mail'>
                          <h1 className='text-white px-2'>Iran - Urmia</h1>
                        </Link>
                      </div>



                  </div>
              
                  </div>
                </div>




              <div className='flex flex-row bg-white w-3/4 sm:w-screen p-10 pl-10'>

                {/* line */}
                
                


                  <div className='flex flex-col'>
                      <div >
                        <h1 className='font-bold tracking-widest text-lg'>WORK EXPERIENCE</h1>
                        
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Front End Developer [ 2015 - 2022 ]</h2>
                            <p className='ml-10'> Develop front End over the world for different countries with JavaScript & top style methods & languages 
                            on high ranking frameworks such as React, Next, React Native
                            </p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Digital marketing [ 2018 - 2022 ]</h2>
                            <p className='ml-10'>Most of our developed Software & platform are released in production mode with powerful SEO, color Psychology, theme, and typography rules, even we
                             can support product ads & market requirements for our customers
                            
                             </p>
                      </div>

                  



                      {/* EDUCATION or project*/}
                      <div>
                        <h1 className='font-bold border-b-4 pb-2 border-black tracking-widest text-lg
                         pt-10'>PROJECTS</h1>
  <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Pasteur Health Care platform </h2>
                            <p className='ml-10'>Web app and native app, to be terminal between patient and doctor with online visit and patients care requirements with visual diagrams,... &
                            professional admin app <br></br>FrameWorks: React,ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>
 <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>VetNow App</h2>
                            <p className='ml-10'>Web app & Native App for the VetNow veterinary clinic. Support Shops, Live News, video call , live Chat, ..., 
                            with professional admin dashboard <br></br>FrameWorks: React, NextJs, ReactNative, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>
                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Fibex crypto exchange platform</h2>
                            <p className='ml-10'>Web app for the fibexchange crypto community Support blockchains, market for hold, sell, trade crypto and NFT, 
                            professional admin and user dashboard <br></br>FrameWorks: React, ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, solidity, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>



                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Poultry IoT platform</h2>
                            <p className='ml-10'>Web app for the Vira company to control and monitor the poultry farms by IoT, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django, Arduino, raspberry pi  <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>


                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>GreenHouse IoT platform</h2>
                            <p className='ml-10'>Web app for the ONLINE CEO developer community Support 3D View, Virtual Reality, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django, Arduino, raspberry pi  <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>ODA App</h2>
                            <p className='ml-10'>Web app for ODA architect company that Support 3D View, Virtual Reality, 
                            professional admin dashboard <br></br>FrameWorks: React, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>



   


 

                            

  


                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>CarNet Platform</h2>
                            <p className='ml-10'>Web app and native app for the Carnet large scale startup, Support Live map and GPS, Professional check list, 
                            professional admin dashboard <br></br>FrameWorks: React,ReactNative NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>

                      

          
     
                      
                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>MyPet app</h2>
                            <p className='ml-10'>Web app and native app for the pet shops, with online visit, live pet shop and product shop, Health Care checklist and
                            professional admin dashboard <br></br>FrameWorks: React, ReactNative, NextJs, Django <br></br>
                             programming language: JavaScript, Python, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>







                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Fast School platforms</h2>
                            <p className='ml-10'>Web app and native app for the FastSchool startup, Its educational base supports virtual reality, 
                            3D view, Online whiteboard, live chat, conference video room, to-do app, auto exam, and practice, copyright watermark 
                            professional dashboard for admin, students, parents  <br></br>FrameWorks: React, Reactnative, NextJs, Django <br></br>
                             programming language: JavaScript, Python,C++, tailwindcss  </p>
                        {/* <div className='flex flex-row pt-2'>
                          <Link href='https://t.me/+ll4bLWoavUgyZTI0' target='_blank'  aria-label='Instagram'>
                            <FiPlayCircle className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                          <Link href='https://github.com/ashkanazimi1991/ceo-app-01.git' target='_blank'  aria-label='Instagram'>
                            <FaGithub className=' w-10 text-2xl text-[#000] '/> 
                          </Link>
                        </div> */}
                      </div>











                    </div>

                </div>
              </div>
            </div>


      </div>
  )
}

export default cv_Jaleh_Beiraghy