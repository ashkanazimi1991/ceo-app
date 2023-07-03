import React,{ useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SliderP from '../components/Dr_admin/SliderP';
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import Drawer from '../components/Dr_admin/Drawer';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsGearFill, BsFillPeopleFill, BsFillBarChartFill, BsFillMicFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaYelp } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';
import Performance2 from '../components/DashChart/Performance2';
import Performance3 from '../components/DashChart/Performance3';
import Performance4 from '../components/DashChart/Performance4';
import Performance from '../components/DashChart/Performance';

import { ChakraProvider,  Table,  NumberInput,Input,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Tooltip ,extendTheme, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel     } from '@chakra-ui/react';
    
    const fonts = {
      body:'IRANSansWeb',
      // heading:'IRANSansWeb'.
    }
    const theme= extendTheme({fonts})
    
    
  const Desend = dynamic(() => import('../components/DashChart/Desend'))
  const BenefitChart = dynamic(() => import('../components/Dr_admin/BenefitChart'))
  const Pibenfit = dynamic(() => import('../components/Dr_admin/Pibenfit'))
  const LineChartLike = dynamic(() => import('../components/Dr_admin/LineChartLike'))
  const RadialVisit = dynamic(() => import('../components/Dr_admin/RadialVisit'))



const dr_report = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };



  return (
    <div className='bg-[#072133]'>
        <ChakraProvider theme={theme}> 
        {/* Header............................. */}
            <div className='z-20 px-2 fixed w-full bg-gray-800 shadow-2xl top-0 '> 
            <div className='flex justify-between items-center'>
            <Link href='/drappPersian' >
                <div className='flex items-center'>
                <Image  src='/images/2.png'  alt="logo" width='50' height='50'
                            className=" max-h-16 w-[100%] py-2 object-contain "/>
                <h3 className='text-gray-400 text-xs pl-2  whitespace-nowrap'>CEO Developer <br></br> Community</h3>
                </div>
                </Link>


            <div className='flex items-center'>
            <Link href='/contactUsPersian' >
                <p className='py-2 my-2 text-white hover:text-green-400 cursor-pointer text-xs border-dashed border-2 border-sky-500 rounded-xl  px-2'>ثبت سفارش</p>
            </Link>
            
            
            <div>
                    
                    <button onClick={handleOpen}>
                    <RiMenuUnfoldFill className='text-white text-3xl mx-4'/>
                    </button>
                    <Drawer isOpen={isOpen} onClose={handleClose} />
            </div>

                </div> 
                


            </div>
            </div>

{/* Header............................................... */}

{/* Nav............................. */}
<div className='fixed right-0 top-1/3 px-2 py-4 z-50 bg-gray-700 shadow-xl rounded-l-lg'>
<div className='flex flex-col justify-center  space-y-4 rounded-xl  items-center  '>
    
<Link href='/dr_admin' >
    <Tooltip label='داشبورد' placement='left' fontSize='md'>
      <div className=' border-2 p-2  rounded-md cursor-pointer border-gray-600'>
        <MdOutlineDashboardCustomize className='text-white text-md   hover:text-emerald-500   '/> 
      </div>
    </Tooltip>
</Link>
   
    <Link href='/patient' >
    <Tooltip label='بیماران' placement='left' fontSize='md'>
      <div className=' rounded-md p-2 border-2 border-gray-600  shadow-2xl'>
        <BsFillPeopleFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>

    <Link href='/dr_report' >
    <Tooltip label='گزارش ها' placement='left' fontSize='md'>
      <div className=' p-2 rounded-md cursor-pointer bg-cyan-800  shadow-2xl border-gray-600'>
        <BsFillBarChartFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>


    <Link href='/dr_finance' >
    <Tooltip label='حسابداری' placement='left' fontSize='md'>
      <div className='border-2 p-2 rounded-md hover:bg-cyan-800 cursor-pointer border-gray-600'>
        <FaYelp className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>





    <Tooltip label='همکاران' placement='left' fontSize='md'>
      <div className='border-2 p-2 rounded-md cursor-pointer border-gray-600'>
        <SiHandshake className='text-white text-md  '/> 
      </div>
    </Tooltip>

    <Tooltip label='تنظیمات' placement='left' fontSize='md' >
      <div className='border-2 p-2 rounded-md cursor-pointer border-gray-600'>
        <BsGearFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
  </div>


</div>

{/* Nav/................................. */}
        {/* <SliderP/> */}
{/* ,,,,,,,,,,,,,,hesabdariii............... */}
   
{/* ,,,,,,,,,,,,,,hesabdariii............... */}
    <div className='flex flex-col  justify-center items-center w-full'>





      <div className='flex flex-col w-[80%] sm:w-[98%]'>
       <p className='text-gray-400 pt-24 w-full text-center'>نمودار سود و زیان</p> 
        <BenefitChart/>
      </div>
   
      <div className='w-full pt-20 flex flex-col '>
          <div className='flex md:flex-col  justify-center items-center w-full '>
              <div className=''>
                  <p className='text-gray-400 text-center px-2'>دسته بندی هزینه ها</p>
                  <Pibenfit/>
              </div>

              <div className=''>
                  <p className='text-gray-400 text-center px-2'>دسته بندی درآمدها</p>
                  <Pibenfit/>
              </div>
            
          </div>
      </div>
      
      <div className='w-[80%] flex flex-col sm:w-[98%]'>
       <p className='text-gray-400 pt-14 w-full text-center'>نمودار رضایتمندی</p> 
        <LineChartLike />
      </div>

      <div className='flex md:flex-col w-[80%] sm:w-[98%] justify-center items-center'>
        <div className='w-3/4 md:w-full'>
          <Desend />
        </div>
        
          <div className=' w-1/4 md:w-full'>
          <div className=' '>
            <p className='text-gray-100  text-center py-2 whitespace-nowrap'> درصد ویزیت های حضوری به آنلاین </p>
            <RadialVisit/>
            <div className='flex justify-between w-full '>
            
            <div className='flex justify-center items-center w-1/2 '>
              <p className='text-gray-200  px-4 py-2 m-2  text-md'>حضوری</p>
              <div className='w-4 h-4 bg-green-400 rounded-full'></div>
            </div>
            

            <div className='flex justify-center items-center w-1/2 '>
              <p className='text-gray-200  px-4 py-2 m-2  text-md'> آنلاین</p>
              <div className='w-4 h-4 bg-blue-400 rounded-full'></div>
            </div>

      </div>
    </div>
          </div>
      </div>

    <div className='grid grid-cols-4 md:grid-cols-2 border-t-2 border-gray-400 mx-[10%]'>
    


      <div className=' w-full '>
      <Performance2/>
      <p className='text-gray-400 text-center text-md pb-4'>----راندمان همکار </p>
      </div>

      <div className=' w-full '>
      <Performance3/>
      <p className='text-gray-400 text-center text-md pb-4'>----راندمان همکار </p>
      </div>

      <div className=' w-full'>
      <Performance4/>
      <p className='text-gray-400 text-center text-md pb-4'>----راندمان همکار </p>
      </div>

      <div className=' w-full'>
      <Performance/>
      <p className='text-gray-400 text-center text-md pb-4'>----راندمان همکار </p>
      </div>

    </div>
    </div>

        </ChakraProvider> 
    </div>
  )
}

export default dr_report