import React, {useState} from 'react';
import Head from 'next/head';
import Link from "next/link"
import TeamP from '../components/Member/TeamP';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineMail, HiArrowNarrowLeft} from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import Image from 'next/image';
import {Container, FormControl, FormLabel,Textarea, FormHelperText, Text,
   FormErrorMessage, Input, Heading, Button, useToast, extendTheme} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { sendContactForm } from '../components/lib/api';
import dynamic from "next/dynamic";

const OrderP = dynamic(() => import('../components/Contact/Order/OrderP'))
const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})


const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };




const contactUsPersian = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;
  const onBlur = ({ target }) =>
  setTouched((prev) => ({ ...prev, [target.name]: true }));

const handleChange = ({ target }) =>
  setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "We received your message successfully.",
        status: "success",
        duration: 6000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
    return (
        <div className='[#07090aec]'>
          <Head>
                <meta name="description" content="CEO" />
                <link rel="icon" href="/images/2.png" />
                <title>ارتباط با ما </title>
                <meta name="description" content="CEO Contact" />
                <meta name="theme-color" content="#000"/>
                <link rel='manifest' href='/manifest.json' />
         </Head>

         <Image
             className=" fixed -z-20 o  object-cover h-screen "
             src="/images/HeroSpace.webp"
             width='4377'
             height='2043'
             alt="onlineceo"
            />
      <Image
             className=" fixed -z-10  animate-pulse bottom-0 object-contain  "
             src="/images/spaceStart.webp"
             width='4377'
             height='2043'
             alt="onlineceo"
            />

         <div className="bg-gradient-to-r from-black to-[#14141475] 
          flex justify-center ">
                    
                <div className='relative  w-full'>              
            
                    <Link href='/persian'>
                    <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-2 ring-white ring-2 
                      rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
                       cursor-pointer'/>
                    </Link>
{/* ................................................................................................................... */}
                    <div className="flex flex-row px-[15%]  lg:px-[5%] md:flex-col justify-around ">
                        <div className="flex flex-col  justify-around py-[25%] pl-[4%] 
                         text-left">
                       <div className='flex justify-center pb-2'>
                            <h1 className="text-2xl  text-center border-b-2 border-[#994dac3f] left-14  sm:text-sm
                             text-white  py-4  w-full  ">
                                     برنامه نویسی نرم افزارهای یکپارچه تحت وب و موبایل
                                                                 </h1>
                       </div>
                            <h1 className=" text-center text-xl  sm:pt-4 
                             text-[#61B0D1] sm:text-lg">
                            قابل توسعه و مقیاس پذیر
                                                        </h1>
                            <p className=" mt-3 sm:leading-relaxed  
                            text-center text-sm text-white 
                            ">
                          با داشبورد های مدیریت پروژه مجموعه مدیریت آنلاین به صورت لحظه ای از پیشرفت پروژه های خود با خبر شوید
                            </p>

                            <div className='flex flex-row   mt-4 border-y-2 border-[#994dac3f]'>

                                    <div className='flex flex-row md:flex-col  justify-around items-center
                                     w-3/4'>
                                       <div className=' py-5'>
                                        <h1 className='text-white text-center py-2'> ایران - ارومیه</h1>
                                         <Link href='tel:+984433384232'>
                                            <h1 className='text-white '>+9844 3338 4232</h1>
                                         </Link> 
                                         {/* <Link href='tel:+989141472686'>
                                            <h1 className='text-white '>+98 914 147 2686</h1>
                                         </Link> */}
                                       </div>
                                       <div className='py-5'>
                                        <h1 className='text-white text-center py-2 '>ترکیه - استانبول</h1>
                                         <Link href='tel:+905528258841'>
                                            <h1 className='text-white '>+90 552 825 8841</h1>
                                         </Link> 
                                       </div>
                                       <div className='py-5'>
                                        <h1 className='text-white text-center py-2 '>انگلیس - لندن </h1>
                                         <Link href='tel:+447418354868'>
                                            <h1 className='text-white '>+44 7418 354868</h1>
                                         </Link> 
                                       </div>

                                      
                                    </div>

                              

                                <div className='grid grid-cols-2 sm:grid-cols-1 border-l-2 border-[#994dac3f] pl-5 place-content-center   w-1/4'>
                                
                                    <div>
                                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telegram'>
                                        <TbBrandTelegram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                        </Link>

                                    </div>
                                    <div>
                                    <Link href='https://www.instagram.com/onlineceoofficial' target='_blank'  aria-label='Instagram'>
                                    <FaInstagram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer'/> 
                                    </Link>
                                    </div>
                                    <div>
                                    <Link href='https://github.com/ashkanazimi1991' target='_blank'  aria-label='Instagram'>
                                    <FiGithub className='my-4 w-10 text-2xl text-[#fff] cursor-pointer'/> 
                                    </Link>
                                    </div>
                                    <div>
                                    <Link href="mailto:info@onlineceo.org" target='_blank'  aria-label='mail'>
                                      <HiOutlineMail className=' my-4 w-10 text-2xl text-[#fff] cursor-pointer '/> 
                                   </Link>  
                                    </div>

                                </div>
                            </div>



{/* ......................................... */}
                        </div>
                    

                        {/* <div className=' shadow-2xl shadow-[#994dacbe] bg-[#3e1a6e44] mr-2 rounded-lg'>
                      <h3 className='text-gray-100 animate-bounce    shadow-slate-100 px-5 py-2  '>                  
                         Contact US
                           </h3> */}



                    </div>
                    <Link href='/whyP'>
                      <div className=' shadow-xl shadow-[#994dac2f]  animate-pulse  flex justify-center items-center '>
                        <HiArrowNarrowLeft className=' my-4 w-10 animate-pulse text-2xl text-[#fff] cursor-pointer '/> 
                        <h2 className='text-white   py-2 text-center  '>سوالات متداول و نمونه های همسان </h2>

                      </div>
                    </Link>
                                
{/* ..................................order........................ */}
                
                    <div className=' w-full '>
                      <OrderP/>
                    </div>
{/* .....................................form......................................... */}
                    <div className='py-4 '>
                    <ChakraProvider theme={theme}>
                        <Container maxW="600px" mt={2}>
                            <Heading></Heading>
                            {error && (
                            <Text color="red.300" my={4} fontSize="xl">
                            {error}
                             </Text>
                             )}
                            <FormControl  isRequired mb={2} isInvalid={touched.name && !values.name}>
                                <FormLabel color='gray.300' dir='rtl' >نام</FormLabel>
                                <Input type='text' dir='rtl' name='name' color='gray.300' errorBorderColor='red.300' 
                                value={values.name} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired mb={2} isInvalid={touched.email && !values.email}>
                                <FormLabel color='gray.300' dir='rtl'  >شماره تماس یا ایمیل</FormLabel>
                                <Input type='email' name='email' color='gray.300'  value={values.email} onChange={handleChange} onBlur={onBlur}/>
                                <FormHelperText>اطلاعات شما به هیچ وجه به اشتراک گذاشته نمی شود</FormHelperText>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>


                            <FormControl isRequired mb={2} isInvalid={touched.subject && !values.subject}>
                                <FormLabel color='gray.300' dir='rtl' >عنوان </FormLabel>
                                <Input type='text'  dir='rtl' name='subject' color='gray.300' value={values.subject} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired mb={2} isInvalid={touched.message && !values.message}>
                                <FormLabel color='gray.300' dir='rtl' > پیام  </FormLabel>
                                <Textarea type='text'  dir='rtl' color='gray.300' name='message' rows={6} value={values.message} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                           <Button variant='outline'  my={4} px={10} colorScheme='blue' isLoading={isLoading}
                              disabled={
                                !values.name || !values.email || !values.subject || !values.message
                              } onClick={onSubmit}>
                            ارسال</Button>     

                        </Container>

                        </ChakraProvider>

                    </div>
           
                   <TeamP />
{/* .......................................................... */}
                </div>
         </div>
                
        </div>
    );
}

export default contactUsPersian;

