import Head from "next/head";
import Link from "next/link";

import Image from "next/image";
import { FaInstagram, FaGithub } from "react-icons/fa";
import {
  HiOutlineLibrary,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FiPhone, FiPlayCircle } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const AmirSalmani = () => {
    return (
        <div className="max-w-[1400px] container bg-[#000]   ">
        <Head>
          <title>Amir Salmani</title>
          <meta name="description" content="amir salmani" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className=" bg-white flex flex-row h-70 ">
          <img
            src="./images/amir.jpg"
            alt="Bita Maysoori"
            className="w-1/4 max-h-80 object-center  object-cover "
          />
          <div className="w-3/4 flex flex-col justify-center">
            <h1 className="text-black tracking-widest text-6xl font-bold md:text-3xl sm:text-2xl text-center">
              Amir Salmani{" "}
            </h1>
            <h2
              className="text-[#000] text-3xl py-5 tracking-wider font-semibold text-center 
                sm:text-xl md:text-2xl "
            >
              Back-End Developer
            </h2>
          </div>
        </div>
        <div className="bg-gray-600   py-10 flex flex-row sm:flex-col  items-center ">
          <h1
            className="w-1/4 sm:w-screen py-2 tracking-widest text-right sm:text-center 
                  text-2xl font-bold text-black border-b-4 min-w-300 whitespace-nowrap md:text-xl"
          >
            ABOUT ME
          </h1>
          <h2
            className="w-3/4 sm:w-screen sm:py-10 px-20 sm:px-10 font-semibold text-
                   text-[#fff] text-justify"
          >
        Talented backend developer adept at contributing to a highly collaborative work environment, finding solutions and determining customer satisfaction. Designed and developed web applications across multiple APIs, third-party integrations and databases. Passionate and hardworking with penchant for developing customized interfaces that factor in unique demands for accessibility, reachability and security.
          </h2>
        </div>
  
        {/* MAIN BODY */}
  
        <div className="flex flex-row  sm:flex-col-reverse  ">
          {/* LEFT COL */}
          <div className="bg-gray-800  sm:w-screen justify-start min-w-300  sm:pl-0 pl-[4%]">
            {/* ---------------------------------------------------------------------- */}
            {/* ------------------------------- SKILLS ------------------------------- */}
            {/* ---------------------------------------------------------------------- */}
  
            <h1 className=" pl-6 pt-6 font-bold text-white text-left tracking-widest">
              SKILLS
            </h1>
            <div className="border-b-4  reletive r-0 my-2"></div>
  
            {/* PROGRAMMING SKILLS */}
  
            <div className="flex flex-col  w-[100%] pb-20   ">
              <div className="flex flex-row py-2  justify-between items-center">
                <Link href="" target="_blank" aria-label="">
                  <h1 className="text-white px-4 w-28">P-Language </h1>
                </Link>
                <div className="border-l-2 pr-10">
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"Python"</h2>
                </div>
              </div>
  
              {/* FRAMEWORK SKILLS */}
  
              <div className="flex flex-row py-2  justify-between items-center">
                <Link href="" target="_blank" aria-label="">
                  <h1 className="text-white px-4 w-28">FrameWork</h1>
                </Link>
                <div className="border-l-2 pr-10">           
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">" Django Rest Framework"</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"FastApi"</h2>
                </div>
              </div>
  
              {/* OTHER SKILLS */}
  
              <div className="flex flex-row py-2  justify-between items-center">
                {/* <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  
                                aria-label='Instagram'>
                                <FaRegDotCircle className=' w-10 text-sm  text-[#fff] '/> 
                              </Link>   */}
                <Link href="" target="_blank">
                  <h1 className="text-white px-4 w-28">Other Skill</h1>
                </Link>
                <div className="border-l-2 pr-10">
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"my-sql "</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"postgresql"</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"redis"</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"celery"</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"linux"</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"docker"</h2>
                  <h2 className="text-white text-left px-2 w-40 sm:w-32">"nginx"</h2>




                </div>
              </div>
  
              {/* ---------------------------------------------------------------------- */}
              {/* ------------------------------ LANGUAGE ------------------------------ */}
              {/* ---------------------------------------------------------------------- */}
  
              <h1 className="pl-6 pt-16 font-bold text-white text-left tracking-widest">
                LANGUAGE
              </h1>
              <div className="border-b-4  reletive r-0 my-2"></div>
              <div className="flex flex-row py-2  justify-between items-center">
                <Link href="" target="_blank">
                  <h1 className="text-white sm:pl-10 w-30">Persian (Native) </h1>
                </Link>
              </div>
              <div className="flex flex-row py-2  justify-between items-center">
                <Link href="" target="_blank">
                  <h1
                    className="text-white sm:pl-10 w-30">
                    English (Advance)
                  </h1>
                </Link>
              </div>
  
              {/* ---------------------------------------------------------------------- */}
              {/* ------------------------------ CONTACTS ------------------------------ */}
              {/* ---------------------------------------------------------------------- */}
  
              <h1 className="  pl-6 pt-6 font-bold text-white text-left tracking-widest ">
                CONTACTS
              </h1>
              <div className="border-b-4  reletive r-0 my-2"></div>
              <div className="flex flex-col   ">
                {/* PHONE */}
  
                <div className="flex flex-row py-2 sm:pl-8">
                  <Link href="tel:+989914342975">
                    <FiPhone className=" w-10 text-2xl text-[#fff] " />
                  </Link>
                  <Link href="tel:+989353138518">
                    <h1 className="text-white">+98 991 434 2975</h1>
                  </Link>
                </div>
  
         
  
                {/* INSTAGRAM */}
  

  
                {/* TELEGRAM */}
  
        
  
                {/* MAIL */}
  
                <div className="flex flex-row sm:pl-8  py-2">
                  <Link
                    href="mailto: bita.maysoori@gmail.com"
                    target="_blank"
                    aria-label="Email"
                  >
                    <HiOutlineMail className=" w-10 text-2xl text-[#fff] " />
                  </Link>
                  <Link
                    href="mailto: amirsalmanidev@gmail.com"
                    target="_blank"
                    aria-label="Email"
                  >
                    <h1 className="text-white px-2">amirsalmanidev@gmail.com</h1>
                  </Link>
                </div>
  
                {/* LOCATION */}
  
                <div className="flex flex-row sm:pl-8 py-2">
                  <Link
                    href="https://www.google.com/maps/place/%D8%B3%D9%87%D8%A7+%D9%BE%DB%8C%D9%85%D8%A7%D9%86%E2%80%AD/@35.7076289,51.4280297,15.82z/data=!4m13!1m7!3m6!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!3b1!8m2!3d35.7218583!4d51.3346954!3m4!1s0x0:0x485784e4ad4d1be2!8m2!3d35.7076662!4d51.4271927?hl=fa"
                    target="_blank"
                    aria-label="map"
                  >
                    <HiOutlineLocationMarker className=" w-10 text-2xl text-[#fff] " />
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/%D8%B3%D9%87%D8%A7+%D9%BE%DB%8C%D9%85%D8%A7%D9%86%E2%80%AD/@35.7076289,51.4280297,15.82z/data=!4m13!1m7!3m6!1s0x3f8e00491ff3dcd9:0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!3b1!8m2!3d35.7218583!4d51.3346954!3m4!1s0x0:0x485784e4ad4d1be2!8m2!3d35.7076662!4d51.4271927?hl=fa"
                    target="_blank"
                    aria-label="map"
                  >
                    <h1 className="text-white px-2">Urmia, Iran</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex flex-row bg-white w-3/4 sm:w-screen p-10 pl-10">
            {/* WORK EXPERIENCE */}
  
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold tracking-widest text-lg">
                  WORK EXPERIENCE
                </h1>
                <div className="border-l-2 ml-2 mt-4 pr-2"></div>
              </div>
  
              <div className="border-l-2 ml-2 mt-4 pr-2">
                <h2 className="font-bold pl-2">
                online-ceo company [2021 – 2023]:
                </h2>
                <p className="ml-10">
                Python Backend Developer                </p>
              </div>
  
              <div className="border-l-2 ml-2 mt-4 pr-2">
                <h2 className="font-bold pl-2">
                soluzy company [2022 – 2023]:
                </h2>
                <p className="ml-10">
                Python Backend Developer
                </p>
              </div>
  
              {/* PROJECTS AND EDUCATION */}
  
              <div>
                <h1
                  className="font-bold border-b-4 pb-2 border-black tracking-widest text-lg
                           pt-10"
                >
                  PROJECTS
                </h1>
                <div className="border-l-2 ml-2 mt-4 pr-2">
                  <h2 className="font-bold pl-2">CEO App</h2>
                  <p className='ml-10'>
                  Web app for the ONLINE CEO Company
summery = In this project, in the backend team, we used Python language and Django framework for the system, in addition to Django, REST system was also used, and we also benefited from token authentication, and MySQL was used in the database layer.
                                </p>
                </div>
  
                <div className="border-l-2 ml-2 mt-4 pr-2">
                  <h2 className="font-bold pl-2">VetNow App</h2>
                  <p className="ml-10">
                  Web app for the vetnow  Company:
summery = In this project, in the backend team, we used Python language and Django framework for the system, in addition to Django, REST system was also used, and we also benefited from token authentication, and MySQL was used in the database layer.
                  </p>
                </div>
  
                <div className="border-l-2 ml-2 mt-4 pr-2">
                  <h2 className="font-bold pl-2">evara app</h2>
                  <p className='ml-10'>
                  Web app for the evara  Company:
techs: Django - Django Rest Framework - jwt auth - celery - redis - docker
summery = In this project, in the backend team, we used Python language and Django framework for the system, in addition to Django, REST system was also used, and we also benefited from jwt authentication, and Postgresql was used in the database layer.For Caching used redis and also for production we used docker containers
                                 </p>
                </div>
  
                <div className="border-l-2 ml-2 mt-4 pr-2">
                  <h2 className="font-bold pl-2">CarNet Platform</h2>
                  <p className='ml-10'>Web app and native app for the Carnet large scale startup, Support Live map and GPS, Professional check list, 
                              professional admin dashboard <br></br>FrameWorks: React,ReactNative NextJs, Django <br></br>
                               programming language: JavaScript, Python, tailwindcss  </p>
                </div>
  
                <div className="border-l-2 ml-2 mt-4 pr-2">
                  <h2 className="font-bold pl-2">Pasteur Health Care platform</h2>
                  <p className='ml-10'>Web app and native app, to be terminal between patient and doctor with online visit and patients care requirements with visual diagrams,... &
                              professional admin app <br></br>FrameWorks: React,ReactNative, NextJs, Django <br></br>
                               programming language: JavaScript, Python, tailwindcss  </p>
                </div>
  
          
  
         
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AmirSalmani;
