import React,{ useState } from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import Drawer from '../components/Dr_admin/Drawer';
import { ChakraProvider, Tooltip ,extendTheme  } from '@chakra-ui/react';
import { BsGearFill, BsFillPeopleFill, BsFillBarChartFill } from 'react-icons/bs';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import { FcOpenedFolder } from 'react-icons/fc';
import { FaYelp } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';






const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.
  }
  const theme= extendTheme({fonts})


const patient = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };



  return (
    <div className='min-h-screen flex flex-col bg-[#072133]'>
       <ChakraProvider theme={theme}> 
{/* Header............................. */}
<div className='z-20 px-2 fixed w-full bg-gray-00 shadow-2xl top-0 '> 
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
{/* Header............................................... */}





   
   
    
    </div> 
    

    

</div>
</div>

{/* Header/................................................... */}

{/* Nav............................. */}
<div className='fixed right-0 top-1/3 px-2 py-4 bg-gray-700 shadow-xl rounded-l-lg'>
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
      <div className=' rounded-md p-2 bg-cyan-800  shadow-2xl'>
        <BsFillPeopleFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>


    <Tooltip label='گزارش ها' placement='left' fontSize='md'>
      <div className='border-2 p-2 rounded-md cursor-pointer border-gray-600'>
        <BsFillBarChartFill className='text-white text-md  '/> 
      </div>
    </Tooltip>


    <Tooltip label='حسابداری' placement='left' fontSize='md'>
      <div className='border-2 p-2 rounded-md cursor-pointer border-gray-600'>
        <FaYelp className='text-white text-md  '/> 
      </div>
    </Tooltip>





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

<div className='grid grid-cols-3'>
    <div>
        <div></div>
    </div>
    <div>1</div>
    <div>1</div>

</div>








 </ChakraProvider> 
 </div>
  )
}

export default patient