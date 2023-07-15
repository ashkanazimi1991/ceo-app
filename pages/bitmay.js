import React from 'react';
import Head from 'next/head'
import Link from 'next/link';

import Image from 'next/image'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import {BiWorld } from 'react-icons/bi';

import { HiOutlineLibrary, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiPlayCircle } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";


const bitmay = () => {
  return (
    <div className="max-w-[1400px] container bg-[#000]   ">
    <Head>
      <title>Bita Maysoori</title>
      <meta name="description" content="Bitmay" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className=" bg-white flex flex-row h-70 ">
      <img
        src="./images/bita01.jpg"
        alt="Bita Maysoori"
        className="w-1/4 max-h-80 object-center  object-contain "
      />
      <div className="w-3/4 flex flex-col justify-center">
        <h1 className="text-black tracking-widest text-6xl font-bold md:text-3xl sm:text-2xl text-center">
          Bita Maysoori{" "}
        </h1>
        <h2
          className="text-[#000] text-3xl py-5 tracking-wider font-semibold text-center 
            sm:text-xl md:text-2xl "
        >
          Front-End Developer
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
        I got interested in web development in 2018. Right after finishing my
        education as a master's student in marine biology, I started to learn
        and code.<br></br>
        Currently, I'm working as a front-end developer at OnlineCEO company.
        We built many platforms and startups in different fields, such as
        large-scale platforms, Web apps, Native apps, Robotic & IoT
        automation, crypto exchange, and blockchain development.<br></br>These
        days, our primary focus is on building new and more creative products.
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
              <h1 className="text-white px-4 w-28">Programming </h1>
            </Link>
            <div className="border-l-2 pr-10">
              <h2 className="text-white text-left px-2 w-40 sm:w-32">
                "Java Script"
              </h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">
                "TailwindCSS"
              </h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Html/CSS"</h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Python"</h2>
            </div>
          </div>

          {/* FRAMEWORK SKILLS */}

          <div className="flex flex-row py-2  justify-between items-center">
            <Link href="" target="_blank" aria-label="">
              <h1 className="text-white px-4 w-28">FrameWork</h1>
            </Link>
            <div className="border-l-2 pr-10">
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"React"</h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">
                "React Native"
              </h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Expo"</h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Next.js"</h2>
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
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Ui, Ux "</h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Figma"</h2>
              <h2 className="text-white text-left px-2 w-40 sm:w-32">"Git"</h2>
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
              <Link href="tel:+989353138518">
                <FiPhone className=" w-10 text-2xl text-[#fff] " />
              </Link>
              <Link href="tel:+989353138518">
                <h1 className="text-white">+98 935 313 8518</h1>
              </Link>
            </div>

            {/* OFFICE */}

            <div className="flex flex-row  py-2 sm:pl-8">
              <Link href="tel:+982188862141">
                <HiOutlineLibrary className=" w-10 text-2xl text-[#fff] " />
              </Link>
              <Link href="tel:+982188862141">
                <h1 className="text-white">+9821 8886 2141</h1>
              </Link>
            </div>

            {/* INSTAGRAM */}

            <div className="flex flex-row  py-2 sm:pl-8">
              <Link
                href="https://www.instagram.com/bitmay"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className=" w-10 text-2xl text-[#fff] " />
              </Link>
              <Link
                href="https://www.instagram.com/bitmay"
                target="_blank"
                aria-label="Instagram"
              >
                <h1 className="text-white px-1">bitmay</h1>
              </Link>
            </div>

            {/* TELEGRAM */}

            <div className="flex flex-row  py-2 sm:pl-8">
              <Link
                href="https://t.me/bitmay"
                target="_blank"
                aria-label="Telegram"
              >
                <TbBrandTelegram className=" w-10 text-2xl text-[#fff] " />
              </Link>
              <Link
                href="https://t.me/bitmay"
                target="_blank"
                aria-label="Telegram"
              >
                <h1 className="text-white px-2">bitmay</h1>
              </Link>
            </div>

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
                href="mailto: bita.maysoori@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <h1 className="text-white px-2">mail@bitmay.info</h1>
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
                <h1 className="text-white px-2">Tehran, Iran</h1>
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
              Front End Developer [ 2019 - 2022 ]
            </h2>
            <p className="ml-10">
              Develop front End over the world for different countries with
              JavaScript & top style methods & languages on high ranking
              frameworks such as React, Next, React Native
            </p>
          </div>

          <div className="border-l-2 ml-2 mt-4 pr-2">
            <h2 className="font-bold pl-2">
              Digital marketing [ 2018 - 2022 ]
            </h2>
            <p className="ml-10">
              Most of our developed Software & platform are released in
              production mode with powerful SEO, color Psychology, theme, and
              typography rules, even we can support product ads & market
              requirements for our customers
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
              <p className='ml-10'>Web app for the ONLINE CEO developer community Support 3D View, Virtual Reality, 
                          professional admin dashboard <br></br>FrameWorks: React, NextJs, Django <br></br>
                           programming language: JavaScript, Python, tailwindcss  </p>
            </div>

            <div className="border-l-2 ml-2 mt-4 pr-2">
              <h2 className="font-bold pl-2">VetNow App</h2>
              <p className="ml-10">
                Web app & Native App for the VetNow Company Support Shops,
                Live News, video call , live Chat, ..., with professional
                admin dashboard <br></br>
                FrameWorks: React, NextJs, ReactNative, Django <br></br>
                programming language: JavaScript, Python, tailwindcss{" "}
              </p>
            </div>

            <div className="border-l-2 ml-2 mt-4 pr-2">
              <h2 className="font-bold pl-2">ODA App</h2>
              <p className='ml-10'>Web app for ODA architect company that Support 3D View, Virtual Reality, 
                          professional admin dashboard <br></br>FrameWorks: React, NextJs, Django <br></br>
                           programming language: JavaScript, Python, tailwindcss  </p>
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

            <div className="border-l-2 ml-2 mt-4 pr-2">
              <h2 className="font-bold pl-2">MyPet app</h2>
              <p className='ml-10'>Web app and native app for the pet shops, with online visit, live pet shop and product shop, Health Care checklist and
                          professional admin dashboard <br></br>FrameWorks: React, ReactNative, NextJs, Django <br></br>
                           programming language: JavaScript, Python, tailwindcss  </p>
            </div>

            <div className="border-l-2 ml-2 mt-4 pr-2">
              <h2 className="font-bold pl-2">Fast School platforms</h2>
              <p className='ml-10'>Web app and native app for the FastSchool startup, Its educational base supports virtual reality, 
                          3D view, Online whiteboard, live chat, conference video room, to-do app, auto exam, and practice, copyright watermark 
                          professional dashboard for admin, students, parents  <br></br>FrameWorks: React, Reactnative, NextJs, Django <br></br>
                           programming language: JavaScript, Python,C++, tailwindcss  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default bitmay