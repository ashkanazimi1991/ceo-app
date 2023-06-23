import React,{ useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import Drawer from '../components/Dr_admin/Drawer';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsGearFill,BsFolder2, BsFillPeopleFill, BsFillBarChartFill, BsFillMicFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaYelp } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';
import CategoriesPage from '../components/Dr_admin/CategoriesPage';
import ItemList from '../components/Dr_admin/ItemList';


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
    
    
 



const dr_team = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };



  return (
    <div className='bg-[#072133] min-h-screen pt-24'>
        <ChakraProvider theme={theme}> 
        {/* Header............................. */}
            <div className='z-20 px-2 fixed w-full bg-gray-800 shadow-2xl top-0 '> 
            <div className='flex justify-between items-center'>
            <Link href='/persian' >
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
<div className='fixed right-0 top-1/3 px-2 py-4 bg-gray-700 shadow-xl rounded-l-lg'>
<div className='flex flex-col justify-center  space-y-4 rounded-xl  items-center  '>
    
<Link href='/dr_admin' >
    <Tooltip label='داشبورد' placement='left' fontSize='md'>
      <div className=' border-2 p-2  rounded-md cursor-pointer hover:border-green-400 border-gray-600'>
        <MdOutlineDashboardCustomize className='text-white text-md   hover:text-emerald-500   '/> 
      </div>
    </Tooltip>
</Link>
   
    <Link href='/patient' >
    <Tooltip label='بیماران' placement='left' fontSize='md'>
      <div className=' rounded-md p-2 border-2 border-gray-600 hover:border-green-400 shadow-2xl'>
        <BsFillPeopleFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>

    <Link href='/dr_report' >
    <Tooltip label='گزارش ها' placement='left' fontSize='md'>
      <div className=' p-2 rounded-md cursor-pointer border-2  shadow-2xl hover:border-green-400 border-gray-600'>
        <BsFillBarChartFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>

    <Link href='/dr_finance' >
    <Tooltip label='حسابداری' placement='left' fontSize='md'>
      <div className=' p-2 rounded-md border-2  cursor-pointer hover:border-green-400 border-gray-600'>
        <FaYelp className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>




    <Link href='/dr_team' >
    <Tooltip label='همکاران' placement='left' fontSize='md'>
      <div className=' p-2 rounded-md  cursor-pointer bg-cyan-800'>
        <SiHandshake className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>

    <Tooltip label='تنظیمات' placement='left' fontSize='md' >
      <div className=' p-2 rounded-md cursor-pointer border shadow-2xl  border-gray-600'>
        <BsGearFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
  </div>


</div>

{/* Nav/................................. */}
      
{/* ,,,,,,,,,,,,,,team............... */}

<div className='flex justify-center items-center py-[5%] w-full'>
  <div className='grid grid-cols-2 gap-4 w-full px-[10%] md:grid-cols-1'>
  
    <div className=' flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl bg-gray-800'>
      <div className='border-2 rounded-full m-4 ' >
      <Image  src='/images/sara.jpg'  alt="logo" width='450' height='450'
                            className=" h-32 w-32 rounded-full    object-cover "/>
      </div>

      <div className='grid grid-cols-3 items-center w-full pl-[15%] '>
        <BsFolder2 className='text-gray-100 w-full cursor-pointer hover:text-green-500 text-xl  text-center'/>
        <h3 className=' text-right  w-full text-gray-200 py-2 col-span-2 border-b-2 border-gray-800 '>سارا کیان</h3>
        <h3 className=' text-center  text-blue-200 text-xs '>پذیرش</h3>
        <h3 className='w-full text-right text-gray-400 py-2 col-span-2 whitespace-nowrap'>سطح دسترسی: 2</h3>


      </div>
    </div>


    <div className=' flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl bg-gray-800'>
      <div className='border-2 rounded-full m-4 ' >
      <Image  src='/images/x2.jpg'  alt="logo" width='450' height='450'
                            className=" h-32 w-32 rounded-full    object-cover "/>
      </div>

      <div className='grid grid-cols-3 items-center w-full pl-[15%] '>
        <BsFolder2 className='text-gray-100 w-full cursor-pointer text-xl hover:text-green-500  text-center'/>
        <h3 className=' text-right  w-full text-gray-200 py-2 col-span-2 border-b-2 border-gray-800 '>سالار فرزانه</h3>
        <h3 className=' text-center  text-blue-200 text-xs '>---</h3>
        <h3 className='w-full text-right text-gray-400 py-2 col-span-2 whitespace-nowrap'>سطح دسترسی: 1</h3>


      </div>
    </div>

    {/* .............................................. */}

    <div className=' flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl bg-gray-800'>
      <div className='border-2 rounded-full m-4 ' >
      <Image  src='/images/x3.jpg'  alt="logo" width='450' height='450'
                            className=" h-32 w-32 rounded-full    object-cover "/>
      </div>

      <div className='grid grid-cols-3 items-center w-full pl-[15%] '>
        <BsFolder2 className='text-gray-100 text-xl w-full cursor-pointer hover:text-green-500  text-center'/>
        <h3 className=' text-right  w-full text-gray-200 py-2 col-span-2 border-b-2 border-gray-800 '>ژیلا مرادی</h3>
        <h3 className=' text-center  text-blue-200 text-xs '>پذیرش</h3>
        <h3 className='w-full text-right text-gray-400 py-2 col-span-2 whitespace-nowrap'>سطح دسترسی: 2</h3>


      </div>
    </div>
    {/* ..............................*/}

    <div className=' flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl bg-gray-800'>
      <div className='border-2 rounded-full m-4 ' >
      <Image  src='/images/ramin.jpg'  alt="logo" width='450' height='450'
                            className=" h-32 w-32 rounded-full    object-cover "/>
      </div>

      <div className='grid grid-cols-3 items-center w-full pl-[15%] '>
        <BsFolder2 className='text-gray-100 text-xl w-full cursor-pointer hover:text-green-500  text-center'/>
        <h3 className=' text-right  w-full text-gray-200 py-2 col-span-2 border-b-2 border-gray-800 '>رامین خجسته</h3>
        <h3 className=' text-center  text-blue-200 text-xs '>---</h3>
        <h3 className='w-full text-right text-gray-400 py-2 col-span-2 whitespace-nowrap'>سطح دسترسی: 1</h3>


      </div>
    </div>

    {/* ..............................*/}

    <div className=' flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl bg-gray-800'>
      <div className='border-2 rounded-full m-4 ' >
      <Image  src='/images/salar.jpg'  alt="logo" width='450' height='450'
                            className=" h-32 w-32 rounded-full    object-cover "/>
      </div>

      <div className='grid grid-cols-3 items-center w-full pl-[15%] '>
        <BsFolder2 className='text-gray-100 w-full text-xl cursor-pointer hover:text-green-500  text-center'/>
        <h3 className=' text-right  w-full text-gray-200 py-2 col-span-2 border-b-2 border-gray-800 '>سجاد رازی</h3>
        <h3 className=' text-center  text-blue-200 text-xs '>---</h3>
        <h3 className='w-full text-right text-gray-400 py-2 col-span-2 whitespace-nowrap'>سطح دسترسی: 2</h3>


      </div>
    </div>


        {/* ..............................*/}

        <div className=' flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl bg-gray-800'>
      <div className='border-2 rounded-full m-4 ' >
      <Image  src='/images/neda.jpg'  alt="logo" width='450' height='450'
                            className=" h-32 w-32 rounded-full    object-cover "/>
      </div>

      <div className='grid grid-cols-3 items-center w-full pl-[15%] '>
        <BsFolder2 className='text-gray-100 w-full text-xl cursor-pointer hover:text-green-500  text-center'/>
        <h3 className=' text-right  w-full text-gray-200 py-2 col-span-2 border-b-2 border-gray-800 '>ندا رادمهر</h3>
        <h3 className=' text-center  text-blue-200 text-xs '>---</h3>
        <h3 className='w-full text-right text-gray-400 py-2 col-span-2 whitespace-nowrap'>سطح دسترسی: 2</h3>


      </div>
    </div>




  </div>
</div> 
   





{/* ,,,,,,,,,,,,,,team............... */}
  





    
   
   
      
      

        </ChakraProvider> 
    </div>
  )
}

export default dr_team