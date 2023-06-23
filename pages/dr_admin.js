import React, { useState } from 'react'
import Head from 'next/head'
import PatientChart from '../components/Dr_admin/PatientChart'
import { BsGearFill, BsFillPeopleFill, BsFillBarChartFill, BsFillMicFill, BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiMenuUnfoldFill, RiHome2Line } from 'react-icons/ri';
import { FcOpenedFolder, FcVideoCall,FcComboChart  } from 'react-icons/fc';
import { FaYelp } from 'react-icons/fa';
import { AiOutlineFolderOpen } from 'react-icons/ai';

import { SiHandshake } from 'react-icons/si';
import {GrTest, GrDocumentTest, GrHistory} from 'react-icons/gr'
import ModalPatient from '../components/Dr_admin/ModalPatient';
import { ChakraProvider,  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, Tooltip ,extendTheme, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel     } from '@chakra-ui/react';



import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';



import DrawerEx from '../components/Dr_admin/DrawerEx'
import Drawer from '../components/Dr_admin/Drawer'




const fonts = {
  body:'IRANSansWeb',
  // heading:'IRANSansWeb'.
}


const LineChartLike = dynamic(() => import('../components/Dr_admin/LineChartLike'))
const BenefitChart = dynamic(() => import('../components/Dr_admin/BenefitChart'))
const RadialVisit = dynamic(() => import('../components/Dr_admin/RadialVisit'))
 



const theme= extendTheme({fonts})


const dr_admin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
// ...........................
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
<div className='flex flex-row-reverse lg:flex-col'>
   <Head>
     <title>Dr Panel</title>
     <meta name="description" content="نرم افزار پزشک و بیمار" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
   </Head>
   {/* main div........................ */}
<ChakraProvider theme={theme}> 

{/* header */}
<div className='z-20 px-2 fixed w-full  bg-slate-900 shadow-2xl top-0 '> 
<div className='flex justify-between items-center'>
<Link href='/persian' >
    <div className='flex items-center'>
    <Image  src='/images/2.png'  alt="logo" width='50' height='50'
                 className=" max-h-16 w-[100%] py-2 object-contain "/>
    <h3 className='text-gray-400 text-xs pl-2  whitespace-nowrap'>CEO Developer <br></br> Community</h3>
    </div>
    </Link>


   <div className='flex   items-center'>
   <Link href='/contactUsPersian' >
    <p className='py-2 my-2 text-white hover:text-green-400 cursor-pointer text-xs border-dashed border-2 border-sky-500 rounded-xl  px-2'>ثبت سفارش</p>
   </Link>
   
   
   <div>
         
          <button onClick={handleOpen}>
          <RiMenuUnfoldFill className='text-white text-2xl mx-4'/>
          </button>
          <Drawer isOpen={isOpen} onClose={handleClose} />
   </div>
   
   
    
    </div> 
    

    

</div>
</div>
{/* .........Header.../ */}
{/* nav................. */}
<div className='fixed right-0 top-1/3 px-2 py-4 bg-gray-700 shadow-xl rounded-l-lg'>
<div className='flex flex-col justify-center  space-y-4 rounded-xl  items-center  '>
    
<Link href='/dr_admin' >
    <Tooltip label='داشبورد' placement='left' fontSize='md'>
      <div className=' border-2 p-2  rounded-md cursor-pointer bg-cyan-800 '>
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
      <div className=' p-2 rounded-md border-2 cursor-pointer hover:border-green-400 border-gray-600'>
        <SiHandshake className='text-white text-md  '/> 
      </div>
    </Tooltip>
    </Link>

    <Tooltip label='تنظیمات' placement='left' fontSize='md' >
      <div className=' p-2 rounded-md cursor-pointer border hover:border-green-400 border-gray-600'>
        <BsGearFill className='text-white text-md  '/> 
      </div>
    </Tooltip>
  </div>


</div>
{/* nav.................. */}

 <div className='flex flex-row-reverse xl:flex-col  pr-10  w-full min-h-screen bg-[#072133] rounded-l-2 '>


{/* table................. */}
<div className=' flex flex-col justify-center  items-center w-full'>



  <div className='h-2/3 mt-24 w-full '>

<div className='flex justify-around'>
    <p className='text-white text-center pb-4 border-b-2 md:text-xs border-gray-400 text-md mb-4'>کل بیماران در انتظار: 410 نفر</p>
    <p className='text-white text-center pb-4 border-b-2 md:text-xs border-gray-400 text-md mb-4'>  ویزیت های امروز</p>
</div>

<div className='overflow-x-auto w-full '>
  <table className="table-auto w-full overflow-x-scroll ">
    <thead>
      <tr className=''>
        <th className='text-gray-400 text-xs border-l-2 border-gray-600  whitespace-nowrap px-2'>وضعیت </th>
        <th className='text-gray-400 text-xs border-l-2 border-gray-600  whitespace-nowrap px-2'>تاریخ ویزیت </th>
        <th className='text-gray-400 text-xs border-l-2 border-gray-600  whitespace-nowrap px-2'>زمان ویزیت</th>
        <th className='text-gray-400 text-xs border-l-2 border-gray-600  whitespace-nowrap px-2'>پرونده بیمار</th>
        <th className='text-gray-400 text-xs border-l-2 border-gray-600  whitespace-nowrap px-20'>نام بیمار</th>
        <th className='text-gray-400 text-xs border-l-2 border-gray-600 pb-4 px-2'>ردیف</th>

      </tr>
    </thead>
    <tbody>
      
      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-green-400 text-xs border-l-2 text-center border-gray-600'>انجام شد</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>11:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
         <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  مینا راد  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1</td>
      </tr>
    
      <tr className='border-y-2 border-gray-700 py-4'>
      <td className='text-green-400 text-xs border-l-2 text-center border-gray-600'>انجام شد</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>11:30</td>
       
       
  
       
       
       
       
       
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <div className="container mx-auto ">
      <button
        className=""
        onClick={openModal}
      >
         <AiOutlineFolderOpen className='text-green-400  text-xl text-cernter mx-4 cursor-pointer'/>
      </button>
      <ModalPatient isOpen={isModalOpen} onClose={closeModal}>
        <div className='w-full flex flex-col justify-around '>
          <p>اطلاعات کلی بیمار</p>
        <div className='grid grid-cols-2 gap-4 border-t-2 border-gray-500 my-4 pt-4'>



        <div className='flex justify-between  col-span-2 items-center border py-2 rounded-lg bg-white shadow-xl'>
             <div className='flex justify-around'>
             <BsFillMicFill className='text-black text-xl text-cernter mx-4 cursor-pointer'/>
             <BsFillTelephoneOutboundFill className='text-black text-md text-cernter mx-4 cursor-pointer'/>
             <FcVideoCall className='text-xl text-cernter mx-4 cursor-pointer'/>
             </div>

             <p className='text-sm text-center pr-4'> ابزارها</p>
          </div>




          <div className='flex justify-between items-center w-full px-2 border py-4 rounded-lg bg-white shadow-xl'>
             
             

             
         
                <button onClick={handleOpen} className='flex justify-between px-2 w-full'>
                <p className='text-sm text-center '> آزمایشات</p>
                <GrTest className='text-xl text-cernter mx-4 cursor-pointer'/>
                </button>
                <DrawerEx isOpen={isOpen} onClose={handleClose} />
            
          </div>

          <div className='flex justify-between items-center border py-4 px-2  rounded-lg bg-white shadow-xl'>
             <p className='text-sm text-center '> تجویزها </p>
             <GrDocumentTest className='text-white text-xl text-cernter mx-4 cursor-pointer'/>
          </div>

          <div className='flex justify-between px-2 items-center border py-4 rounded-lg bg-white shadow-xl'>
             <p className='text-sm text-center '> تاریخچه </p>
             <GrHistory className='text-xl text-cernter mx-4 cursor-pointer'/>
          </div>

          <div className='flex justify-between px-2 items-center border py-4 rounded-lg bg-white shadow-xl'>
             <p className='text-sm text-center '> گزارش ها</p>
             <FcComboChart className='text-white text-xl text-cernter mx-4 cursor-pointer'/>
          </div>

          
         



          <div className='flex justify-between  col-span-2 items-center rounded-lg bg-white shadow-xl'>
            
          <Accordion dir='rtl' allowToggle  width="100%" >
                    <AccordionItem color='blue.300'  >
                        <h2>
                        <AccordionButton   >
                            <Box as="span" flex='1' textAlign='right' fontSize='sm'>
                            پرداختی های بیمار
                            </Box>
                            <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        </AccordionButton>
                        </h2>
                        <AccordionPanel color='gray.500' pb={4}>
                        <TableContainer>
                            <Table size='sm'>
                              <Thead>
                                <Tr>
                                  <Th>ردیف</Th>
                                  <Th>تاریخ</Th>
                                  <Th isNumeric>مبلغ</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>1</Td>
                                  <Td>1402/01/23</Td>
                                  <Td isNumeric>125.000</Td>
                                </Tr>
                                <Tr>
                                  <Td>2</Td>
                                  <Td>1402/02/23</Td>
                                  <Td isNumeric>125.000</Td>
                                </Tr>
                                <Tr>
                                  <Td>3</Td>
                                  <Td>1402/03/23</Td>
                                  <Td isNumeric>2.400.000</Td>
                                </Tr>
                              </Tbody>
                              <Tfoot>
                                <Tr>
                                  <Th>-</Th>
                                  <Th>-</Th>
                                  <Th isNumeric>2.650.000</Th>
                                </Tr>
                              </Tfoot>
                            </Table>
                          </TableContainer>
                        </AccordionPanel>
                    </AccordionItem>

 





                </Accordion>







             
          
          </div>

        </div>
        </div>
        {/* <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={closeModal}
        >
          انجام شد
        </button> */}
      </ModalPatient>
    </div>
      
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  سارا میلان  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>2</td>
      </tr>

      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-green-400 text-xs border-l-2 text-center border-gray-600'>انجام شد</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>12:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  شیوا مردای  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>3</td>
      </tr>


      <tr className='border-y-2 border-gray-700 py-4'>
       <td className='text-green-400 text-xs border-l-2 text-center border-gray-600'>انجام شد</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>12:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>آقای -  سالار محمدی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>4</td>
      </tr>




      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-red-400 text-xs border-l-2 text-center border-gray-600'>انجام نشد</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>13:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>آقای -  توحید حضرتی   </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>5</td>
      </tr>




      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-green-400 text-xs border-l-2 text-center border-gray-600'>انجام شد</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>13:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  ژاله دلدار  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>6</td>
      </tr>





      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>14:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>آقای  -  کامران قاسمی   </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>7</td>
      </tr>




      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>14:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  سوزان فرهمند  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>8</td>
      </tr>




      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>15:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  زهرا تیموری   </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>9</td>
      </tr>




      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>15:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  سوزان رادمنش  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>10</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>16:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  نرگس محمدزاده  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>11</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>16:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>آقای -  کیوان عظیمی   </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>12</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>17:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  سودابه مرندی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>13</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>17:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  مینا راد  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>18:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  ارغوان بانی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>14</td>
      </tr>


      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>18:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  آیسان رضایی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>15</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>19:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  نادیا حاجی زاده راد  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>16</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>19:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  نادیا شیرازی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>17</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>20:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  زهرا ملک پور  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>18</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>20:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  ژیلا محمودی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>19</td>
      </tr>


      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>21:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  ساناز عسگری  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>21:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  مینا محمودی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>20</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>22:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>آقا -  رامین محمودی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>21</td>
      </tr>



      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>22:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>آقا -  سجاد آباجالی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>22</td>
      </tr>


      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>23:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  مهسا فریدونی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>23</td>
      </tr>


      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>23:30</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  ژاله راد  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>24</td>
      </tr>


      <tr className='border-y-2 border-gray-700 py-4'>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>در انتظار</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>1402/03/21</td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>00:00</td>
        <td className=' border-l-2 flex justify-center text-center border-gray-600'>
        <AiOutlineFolderOpen className='text-gray-500 text-xl text-cernter mx-4 cursor-pointer'/>
        </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>خانم -  شیوا مرادی  </td>
        <td className='text-gray-400 text-xs border-l-2 text-center border-gray-600'>25</td>
      </tr>


      

 
    </tbody>
  </table>
</div>

  </div>


  <div className='h-1/3 flex flex-col justify-center items-center  w-full'>
    <p className='text-gray-200 pt-10'>میزان سود و زیان کل</p>
    <BenefitChart/>
  </div>









</div>
{/* table/................. */}


{/* chart................. */}
<div className='flex-col justify-around    w-full'>

  <div className=' pt-24 w-full'>
    <p className='text-gray-200 text-center'>تعداد ویزیت بیماران سابق و جدید</p>
    <PatientChart/>
    <p className='text-gray-200 pb-4 text-center'>رضایتمندی بیماران</p>
    <LineChartLike/>

  </div>

  <div className=' flex justify-around item-row-center  w-full'>
    <div className=' '>
      <p className='text-gray-100 text-center py-2 whitespace-nowrap'> درصد ویزیت های حضوری به آنلاین </p>
      <RadialVisit/>
      <div className='flex justify-between w-full '>
       
       <div className='flex justify-center items-center w-1/2 mx-[6%]'>
        <p className='text-gray-200  px-4 py-2 m-2  whitespace-nowrap  text-md'>حضوری</p>
        <div className='w-4 h-4 bg-green-400 rounded-full'></div>
       </div>
       

       <div className='flex justify-center items-center w-1/2 mx-[6%]'>
        <p className='text-gray-200  px-4 py-2 m-2  whitespace-nowrap  text-md'> آنلاین</p>
        <div className='w-4 h-4 bg-blue-400 rounded-full'></div>
       </div>





      </div>
    </div>
    



  </div>



</div>
{/* chart................. */}






    </div>
 
    {/* main div .................. */}

    </ChakraProvider> 

    </div>
  )
}

export default dr_admin;