import Head from 'next/head'
import Link from 'next/link';

import Image from 'next/image'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { HiOutlineLibrary, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiPlayCircle } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import {AiOutlineLinkedin} from"react-icons/ai";
import {PiLinkedinLogo} from"react-icons/fi";

const cv_ali_moghadam = () => {
  return (
      <div className='max-w-[1400px] container bg-[#000]   '>
        <Head>
     <title>  Ali Moghaddam</title>
     <meta name="description" content="علی مقدم" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/2.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
      

        <div className=' bg-[#fff] flex flex-row h-70 '>
 
          <img  src="./images/ali.jpg"  alt="ashkan azimi"
              className="w-1/4 max-h-80 rounded-[10] object-center  object-contain "/>
            <div className='w-3/4 flex py-6 flex-col justify-center'>
              <h1 className="text-black tracking-widest text-6xl font-bold md:text-3xl sm:text-2xl  text-center">
                Ali Moghaddam </h1>
              <h2 className='text-[#000] text-3xl  tracking-wider font-semibold text-center 
              sm:text-xl md:text-2xl '>
               Front-End Developer </h2>
            </div>

        </div>
            <div className='bg-gray-600   py-10 flex flex-row sm:flex-col  items-center '>
                <h1 className='w-1/4 sm:w-screen py-2 tracking-widest text-right sm:text-center 
                text-2xl font-bold text-black border-b-4 min-w-300 whitespace-nowrap md:text-xl'>
                  ABOUT ME</h1>
                <h2 className='w-3/4 sm:w-screen sm:py-10 px-20 sm:px-10  text-
                 text-[#fff] text-justify'>
                  In 2020, I became interested in web development.
                  Currently, I work as a front-end developer at OnlineCEO. We have built many platforms and startups in various fields, such as large-scale platforms, web applications, native applications,
                   robotic automation and IoT, crypto exchanges and blockchain development.
                  

                  
                  
                  <br></br> 
                  The truth lies in one thing: the code</h2>
            </div>
           
           
           
           
            {/* main body */}
            <div className='flex flex-row  sm:flex-col-reverse  '>
              
              
              {/* left col */}
                <div className='bg-gray-800  sm:w-screen justify-start min-w-300  sm:pl-[10%] pl-[4%]' >
                  
                  


                  {/* Skils */}

                  <h1 className=' pr-6 pt-5 font-bold text-white text-left tracking-widest'>SKILLS</h1>
                  <div className='border-b-4  reletive r-0 my-2'></div>
{/* ffff */}
                      {/* Programming Skill */}
                        <div className='flex flex-col  w-[100%] pb-20   '>
                          <div className='flex flex-row py-2  justify-between items-center'>
                        
                            <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'
                              aria-label='Instagram'>
                              <h1 className='text-white pr-2 sm:pl-10 '>Programming </h1>
                            </Link>
                        <div className='border-l-2 pr-10'>
                          <h2 className='text-white text-left pl-4 w-40'>"Java Script"</h2>
                        
                          <h2 className='text-white text-left pl-4 w-40'>"Python"</h2>
                        
                        
                          <h2 className='text-white text-left pl-4 w-40'>"TailwindCss"</h2>
                        
                          <h2 className='text-white text-left pl-4 w-40'>"Html / CSS"</h2>
                        </div>
                        </div>

                    {/* FrameWork */}

                        <div className='flex flex-row py-2  justify-between items-center'>
                       
                            <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'
                              aria-label='Instagram'>
                              <h1 className='text-white  sm:pl-10 w-30'>FrameWork</h1>
                            </Link>
                          <div className='border-l-2 pr-10'>
                            <h2 className='text-white text-left pl-4 w-40'>"React"</h2>
                            
                            <h2 className='text-white text-left pl-4 w-40'>"Next.js"</h2>
                           
                          </div>
                        </div>     
            

                  {/* Other */}

                      <div className='flex flex-row py-2  justify-between items-center'>
                            {/* <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'  
                              aria-label='Instagram'>
                              <FaRegDotCircle className=' w-10 text-sm  text-[#fff] '/> 
                            </Link>   */}
                            <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'>
                              <h1 className='text-white sm:pl-10 w-30'>Other Skill</h1>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        
                        <h2 className='text-white text-left pl-4 w-40'>"Ui,Ux "</h2>
                        <h2 className='text-white text-left pl-4 w-40'>"Figma"</h2>
                        <h2 className='text-white text-left pl-4 w-40'>"Git"</h2>
                        <h2 className='text-white text-left pl-4 w-40'>"Ceo"</h2>
                       </div>
                      </div>

{/* ........................................................................................... */}
                  {/* language */}
                  <h1 className=' pr-6 pt-5 font-bold text-white text-left tracking-widest'>LANGUAGE</h1>
                  <div className='border-b-4  reletive r-0 my-2'></div>


                  <div className='flex flex-row py-2  justify-between items-center'>
                            <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'>
                              <h1 className='text-white sm:pl-10 w-30'>Native</h1>
                            </Link>
                      <div className='border-l-2 pr-10'>
                        <h2 className='text-white text-left pl-4 w-40'>"Turkish"</h2>
                        
                        <h2 className='text-white text-left pl-4 w-40'>"Persian"</h2>
                       </div>
                      </div>


                      <div className='flex flex-row py-2  justify-between items-center'>
                            <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'>
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
                        <Link href='http://t.me/ElReyn01'>
                          <FiPhone className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='http://t.me/ElReyn01'>
                          <h1 className='text-white'>+98 904 426 2926</h1>
                        </Link>
                      </div>

                      {/* office */}
                      <div className='flex flex-row  py-2'>
                      
                      
                      
                        {/* Linkdin */}
                        <div className='flex flex-row  py-2'>
                       <Link href='https://www.linkedin.com/in/ali-moghaddam-974292285' target='_blank'  aria-label='telgram'>
                          <AiOutlineLinkedin className=' w-10 text-2xl text-[#fff] '/> 
                       </Link>  
                       <Link href='https://www.linkedin.com/in/ali-moghaddam-974292285' target='_blank'  aria-label='telgram'>
                          <h1 className='text-white px-2'>Ali Moghaddam</h1>
                       </Link>
                   </div>
                       
                     
                      </div>

                      {/* Github */}
                      <div className='flex flex-row  py-2'>
                        <Link href='https://github.com/AliMoghaddam01' target='_blank'  aria-label='Instagram'>
                          <FaGithub className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='https://github.com/AliMoghaddam01' target='_blank'  aria-label='Instagram'>
                          <h1 className='text-white px-1'>AliMoghaddam01</h1>
                        </Link>
                      </div>

                          {/* instagram */}
                          <div className='flex flex-row  py-2'>
                        <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'  aria-label='Instagram'>
                          <FaInstagram className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='https://instagram.com/_ali__moghaddam?igshid=NTc4MTIwNjQ2YQ==' target='_blank'  aria-label='Instagram'>
                          <h1 className='text-white px-1'>_ali__moghaddam</h1>
                        </Link>
                      </div>
  

                      {/* telegram */}
                      <div className='flex flex-row  py-2'>
                        <Link href='http://t.me/ElReyn01' target='_blank'  aria-label='telgram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href='http://t.me/ElReyn01' target='_blank'  aria-label='telgram'>
                          <h1 className='text-white px-2'>ElReyn01</h1>
                        </Link>
                      </div>
                            {/* mail */}
                      <div className='flex flex-row  py-2'>
                        <Link href="mailto:01.alimoghaddam@gmail.com" target='_blank'  aria-label='mail'>
                          <HiOutlineMail className=' w-10 text-2xl text-[#fff] '/> 
                        </Link>  
                        <Link href="mailto:01.alimoghaddam@gmail.com" target='_blank'  aria-label='mail'>
                          <h1 className='text-white px-2'>01.alimoghaddam@email</h1>
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
                            <h2 className='font-bold pl-2'>Front End Developer [ 2022 - 2023 ]</h2>
                            <p className='ml-10'> Develop front End over the world for different countries with JavaScript & top style methods & languages 
                            on high ranking frameworks such as React, Next, React Native
                            </p>
                      </div>

                      <div className='border-l-2 ml-2 mt-4 pr-2'>
                            <h2 className='font-bold pl-2'>Digital marketing [ 2022 - 2023 ]</h2>
                            <p className='ml-10'>Most of our developed Software & platform are released in production mode with powerful SEO, color Psychology, theme, and typography rules, even we
                             can support product ads & market requirements for our customers
                            
                             </p>
                      </div>

                  



                      {/* EDUCATION or project*/}
                      <div>
                        <h1 className='font-bold border-b-4 pb-2 border-black tracking-widest text-lg
                         pt-10'>PROJECTS</h1>
 

             

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

export default cv_ali_moghadam