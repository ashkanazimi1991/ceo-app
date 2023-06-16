import React from 'react';
import { BiChevronsDown } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import ChartSection from '../chart/ChartSection';

const WhyE = () => {
  return (

    <div className="group px-[10%] md:px-[2%] sm:px-0 min-h-screen flex flex-col justify-around    bg-[#07090aec] p-3" >
        <div className="flex items-center py-2 border-b-2  justify-between px-[5%] ">
            <h2 className="text-xl  md:text-lg text-center  text-gray-400 ">
               WHY YOU SHOULD CHOOSE  US ?
            </h2>
            <AiOutlineInfoCircle className="text-white text-2xl" />
        </div>

        <div className='w-full pt-5  flex flex-col px-[5%] sm:px-5  justify-center'>
            <p className="my-4 px-2 text-lg w-full text-gray-400">
                Before answering the question please pay attention to the world framework ranking chart
            </p>
            <ChartSection/>
            <p className="my-4 px-2 w-full text-lg text-gray-400">
            if you explore our projects you will see all of our platforms made by the world's number one framework React and coded with powerful javascript and python programming language, not the second one
            </p>
            <h3 className='text-blue-400 text-lg'>World's top businesses use the same technology that we offer to you</h3>
            <div className='grid p-[5%] grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                <p className='text-gray-400 text-center whitespace-nowrap  px-4 py-2 border rounded border-gray-500'>Twitter</p>    
                <p className='text-gray-400 text-center  whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Instagram</p>       
                <p className='text-gray-400 text-center  whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Whatsapp</p> 
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Netflix</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Trello</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Apple</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Binance</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Discord</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Pinterest</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Wix</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Skype</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Airbnb</p>       


            </div>
        </div>  
    <div>

    
{/* ..................................................................
..................................................................
........................timeline..................................
..................................................................
.................................................................. */}
<h2 className="text-2xl sm:text-lg text-left  font-medium text-[#67d2f3] px-5">
Also, we have the following:
</h2>
<div className=' overflow-x-scroll scrollbar-hide px-[5%]  pb-16'>



<ol className="items-center pl-5 py-5 flex w-full ">


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
              A Grade</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             In google analyze</h3>
        </div>
    </li>
   
<li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  whitespace-nowrap text-[#67d2f3]">
            Progress Live Report</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Project management Dashboard</h3>
        </div>
    </li>

    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
              7/24 Support</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             99.99% Uptime </h3>
        </div>
    </li>



    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Database Guaranty</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Routine backup in clouds</h3>
        </div>
    </li>




    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Free Prototype</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Figma UI Design</h3>
        </div>
    </li>


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Fair Price</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             10% Discount for full package</h3>
        </div>
    </li>


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3] whitespace-nowrap pr-10">
            Countdown Contract</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Finish in timeline</h3>
        </div>
    </li>


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Deploy on Market</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             publish after 100% Satisfaction</h3>
        </div>
    </li>

    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            SEO </h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             100% support for all browsers</h3>
        </div>
    </li>


    

   

</ol>


            

                      

         

                  </div>
                </div>    
    </div>
  )
}

export default WhyE