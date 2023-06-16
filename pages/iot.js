import React ,{useState}from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";
import LineChart from '../components/chart/LineChart';

import { TiLightbulb } from 'react-icons/ti';
import { CiTempHigh } from 'react-icons/ci';
import { AiOutlineSetting, AiOutlineVideoCameraAdd, AiOutlineLeft, AiOutlineRight, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import Lux from '../components/ChartOther/Lux';
import Ventilation from '../components/ChartOther/Ventilation';
import HeatMap from '../components/ChartOther/HeatMap';


const iot = () => {

return (
<div>
       
        <Image  className=" fixed -z-20  w-[100%]  object-cover h-screen" src="/images/greentomato.jpg"  width='1200'  height='800'  alt="onlıneceo ıot"/>

        <Link href='/gallery' >
        <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-1 ring-white ring-2 
            rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
            cursor-pointer'/>
        </Link>

    <div className='flex flex-col  justify-center min-h-screen bg-[#000000b5]'>                  
           
        <h1 className='text-center border-b-2 py-20 text-white px-5'>Monitor and Control your Business easily and accurately With CEO IoT Dashboards </h1>
        <div className='pr-5 py-2'>
            <LineChart/>
        </div>

        <div className='flex w-full justify-center space-x-4'>
        <div className='flex justify-center items-center my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-8   h-8 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                </div>
                <div className='my-2 flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <TiLightbulb className='text-white text-xl ' />
                </div>

                <div className='my-2  flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-red-600 rounded-full'>
                <CiTempHigh className=' animate-pulse text-red-600 text-2xl ' />
                </div>

                <div className='my-2 flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <AiOutlineVideoCameraAdd className='text-white text-xl ' />
                </div>

                <div className='my-2 flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <AiOutlineSetting className='text-white text-xl ' />
                </div>
        </div>

   {/* ..................ligt.............. */}
        <div className='flex px-[5%] pt-4 '>
             
            <div className='flex  justify-around bg-[#272626d3] items-center border-2 border-gray-500 border-b-0 rounded-t-lg  w-screen'>
                <h2 className='text-gray-400 text-center text-lg'>Control farm Lights</h2>          
                <div className='my-2  flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <TiLightbulb className='text-white text-xl ' />
                </div>   
            </div>

        </div>
            <div className='flex md:flex-col justify-around mx-[5%] py-4 bg-[#000000ce] items-center'>
                <div className='md:w-full w-1/2'>
                    <div className='flex justify-center items-center'>
                        <div className='w-full'>
                            <Lux/>
                            <h2 className='text-white pb-2 text-center'>Brightness</h2>
                            <h2 className='text-gray-500 pb-10 text-center'>Farm: 01</h2>
                        </div>
                        <div className='w-full'>
                            <Lux/>
                            <h2 className='text-white pb-2 text-center'>Brightness</h2>
                            <h2 className='text-gray-500 pb-10 text-center'>Farm: 02</h2>
                        </div>
                    </div>

                </div>

                <div className='w-1/2 md:w-full'>
                    <div className='flex w-full justify-center  items-center'>
                        <div className='w-full'>
                            <div className='flex flex-col justify-center'>
                                <div className='flex justify-center py-2 items-center '>
                                    <h2 className='text-white px-4'>Light 1 :</h2>
                                    <label class="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer "/>
                                        <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>

                                <div className='flex justify-center py-2 items-center '>
                                    <h2 className='text-white px-4'>Light 2 :</h2>
                                    <label class="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer "/>
                                        <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>

                                <div className='flex justify-center py-2  items-center '>
                                    <h2 className='text-white px-4'>Light 3 :</h2>
                                    <label class="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer "/>
                                        <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>

                                <div className='flex justify-center py-2  items-center '>
                                    <h2 className='text-white px-4'>Light 4 :</h2>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked/>
                                    <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                    </label>
                                </div>

                                <div className='flex justify-center py-2  items-center '>
                                    <h2 className='text-white px-4'>Light 5 :</h2>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked/>
                                    <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col justify-center'>
                                <div className='flex justify-center py-2 items-center '>
                                    <h2 className='text-white px-4'>Light 1 :</h2>
                                    <label class="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer "/>
                                        <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>

                                <div className='flex justify-center py-2 items-center '>
                                    <h2 className='text-white px-4'>Light 2 :</h2>
                                    <label class="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer "/>
                                        <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>

                                <div className='flex justify-center py-2  items-center '>
                                    <h2 className='text-white px-4'>Light 3 :</h2>
                                    <label class="relative inline-flex items-center  cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer "/>
                                        <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>

                                <div className='flex justify-center py-2  items-center '>
                                    <h2 className='text-white px-4'>Light 4 :</h2>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked/>
                                    <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                    </label>
                                </div>

                                <div className='flex justify-center py-2  items-center '>
                                    <h2 className='text-white px-4'>Light 5 :</h2>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" checked/>
                                    <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


{/* ...............................................ventilation,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
<div className='flex px-[5%] pt-4 '>
             
             <div className='flex  justify-around bg-[#272626d3] items-center border-2 border-gray-500 border-b-0 rounded-t-lg  w-screen'>
                 <h2 className='text-gray-400 text-center text-lg'>Control farm ventilation</h2>          
                 {/* <div className='my-2  flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'> */}
                 <div className='flex justify-center items-center my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <Image
                    className=" z-20 w-8   h-8 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    
                 </div>   
             </div>
 
         </div>
             <div className='flex md:flex-col justify-around mx-[5%] bg-[#000000ce] items-center'>
                 <div className='w-1/2 md:w-full'>
                     <Ventilation/>
                     {/* <h2 className='text-white pb-10 text-center'>Brightness</h2> */}
                 </div>
 
                 <div className='flex justify-around w-1/2  md:w-full items-center'>

                    {/* ....................line heater............... */}
                    <div className='sm:hidden'>
                            <div className='flex justify-center py-4 items-center '>
                               <h2 className='text-red-400 px-4 '>Heater 1 :</h2>
                                <label class="relative inline-flex items-center  cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer "/>
                                    <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                </label>
                            </div>   

                            <div className='flex justify-center py-4 items-center '>
                               <h2 className='text-red-400 px-4 '>Heater 2 :</h2>
                                <label class="relative inline-flex items-center  cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer "/>
                                    <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                                </label>
                            </div>   


                            <div className='flex justify-center py-4 items-center '>
                               <h2 className='text-red-400 px-4 '>Heater 3 :</h2>
                               <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked/>
                                  <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                </label>
                            </div>   


                            <div className='flex justify-center py-4 items-center '>
                               <h2 className='text-red-400 px-4 '>Heater 4 :</h2>
                               <label className="relative inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" class="sr-only peer" checked/>
                                <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                         </label>
                            </div>  


                            <div className='flex justify-center py-4 items-center '>
                               <h2 className='text-red-400 px-4 '>Heater 5 :</h2>
                               <label className="relative inline-flex items-center cursor-pointer">
                                 <input type="checkbox" value="" class="sr-only peer" checked/>
                                   <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                </label>
                            </div>  


                            <div className='flex justify-center py-4 items-center '>
                               <h2 className='text-red-400 px-4 '>Heater 6 :</h2>
                               <label className="relative inline-flex items-center cursor-pointer">
                                 <input type="checkbox" value="" class="sr-only peer" checked/>
                                   <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                                </label>
                            </div>  




                    
                    </div>
                    {/* ............................................................. */}
                 <div>
                    <div className='flex flex-col justify-center'>
                     <div className='flex justify-center py-2 items-center '>
                         <h2 className='text-white px-4'>Fan 1 :</h2>
                     <div className='flex justify-center items-center mx-4 my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                         <Image
                    className=" z-20 w-8   h-8  object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    </div>
                         <label class="relative inline-flex items-center  cursor-pointer">
                             <input type="checkbox" value="" class="sr-only peer "/>
                             <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                         </label>
                     </div>
 
                     <div className='flex justify-center py-2 items-center '>
                     <h2 className='text-white px-4'>Fan 2 :</h2>

                     <div className='flex justify-center items-center mx-4 my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                         <Image
                    className=" z-20 w-8   h-8  object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    </div>
                         <label class="relative inline-flex items-center  cursor-pointer">
                             <input type="checkbox" value="" class="sr-only peer "/>
                             <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                         </label>
                     </div>
 
                     <div className='flex justify-center py-2  items-center '>
                     <h2 className='text-white px-4'>Fan 3 :</h2>

                     <div className='flex justify-center items-center mx-4 my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                         <Image
                    className=" z-20 w-8   h-8  object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    </div>
                         <label class="relative inline-flex items-center  cursor-pointer">
                             <input type="checkbox" value="" class="sr-only peer "/>
                             <div class="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>
                         </label>
                     </div>
 
                     <div className='flex justify-center py-2  items-center '>
                     <h2 className='text-white px-4'>Fan 4 :</h2>
                     <div className='flex justify-center items-center mx-4 my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                         <Image
                    className=" z-20 w-8   h-8 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    </div>
                         <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" value="" class="sr-only peer" checked/>
                         <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                         </label>
                     </div>
 
                     <div className='flex justify-center py-2  items-center '>
                     <h2 className='text-white px-4'>Fan 5 :</h2>

                     <div className='flex justify-center items-center mx-4 my-2 bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                         <Image
                    className=" z-20 w-8   h-8 animate-spin object-contain "
                    src="/images/fan04.png"
                    width='100'
                    height='100'
                    alt="vetnow"
                    />
                    </div>
                         <label className="relative inline-flex items-center cursor-pointer">
                         <input type="checkbox" value="" class="sr-only peer" checked/>
                         <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 0 peer-checked:bg-green-600"></div>                    
                         </label>
                     </div>
                    </div>
                 </div>
                    </div>
 
             </div>






{/* ...............................................Camera,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
<div className='flex px-[5%] pt-4 '>
                <div className='flex  justify-around  bg-[#272626d3] items-center border-2 border-gray-500 border-b-0 rounded-t-lg  w-screen'>
                 <h2 className='text-gray-400 text-center text-lg'>Camera Monitoring</h2>          
                 <div className='my-2  flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                <AiOutlineVideoCameraAdd className='text-white text-xl ' />
                </div>      
                
             </div>
 
         </div>
             <div className='flex md:flex-col justify-around mx-[5%] bg-[#000000ce] items-center'>
                 <div className='flex justify-center w-1/2 md:w-full'>
                 <video   className="w-3/4 h-1/2" autoPlay loop  controls >
                    <source   src="/video/green2.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
                 </div>
 
                 <div className='w-1/2 flex justify-around items-center sm:flex-col md:w-full'>
                    {/* ................ */}

                    <div className='flex justify-center items-center m-10 w-28 h-28 rounded-full border border-gray-700 hover:border-green-400   '>
                        <div className='grid grid-cols-2 gap-3 '>
                            <div className='cursor-pointer flex justify-center col-span-2'>
                            <AiOutlineUp className='text-white text-xl hover:text-green-400' />
                            </div>
                            <div className='  cursor-pointer '>
                            <AiOutlineLeft className='text-white hover:text-green-400 text-xl mx-3 ' />
                            </div>
                            <div className=' cursor-pointer '>
                            <AiOutlineRight className='text-white text-xl mx-3 hover:text-green-400' />
                            </div>
                            <div className='flex cursor-pointer justify-center col-span-2'>
                            <AiOutlineDown className='text-white text-xl hover:text-green-400' />
                            </div>
                        </div>
                    </div>

{/* ...............................Line2.......... */}
                 <div className='flex justify-center mr-4 sm:mr-0  '>
                        <div className='grid py-4 gap-4 grid-cols-2'>
                       
                            <div>
                             <div className='flex cursor-pointer border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>1</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400  justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>2</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>3</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>4</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>


                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>5</h2>
                                <div className='w-5 h-5 bg-gray-500 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>6</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>7</h2>
                                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
                             </div>
                            </div>

                            <div>
                             <div className='flex cursor-pointer border-gray-700 hover:border-green-400 justify-center py-2 px-4 border rounded-md items-center '>
                                <AiOutlineVideoCameraAdd className='text-white text-3xl mr-2 ' />
                                <h2 className='text-white text-xl px-2'>8</h2>
                                <div className='w-5 h-5 bg-gray-500  rounded-full'></div>
                             </div>
                            </div>

                        </div>
                    </div>



                 </div>
 
             </div>

{/* 



{/* ...............................................Temp,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}
<div className='flex px-[5%] pt-4 '>
                <div className='flex  justify-around  bg-[#272626d3] items-center border-2 border-gray-500 border-b-0 rounded-t-lg  w-screen'>
                  <h2 className='text-gray-400 text-center text-lg'>Online Temperature Sensor</h2>          
                  <div className='my-2  flex justify-center items-center bg-[#00000009] w-10 h-10 p-2 ring-2 ring-white rounded-full'>
                     <CiTempHigh className='text-white text-xl ' />
                  </div>                      
                </div>                
</div>
<div className='mx-[5%] bg-[#000000ce] items-center'>
<HeatMap/>
</div>



{/* 





{/* 
..............................................................................................................................
.............................................................................................................................. */}
    </div>
</div>

    )
}

export default iot;