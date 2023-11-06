import React, {useState} from 'react';
import Head from 'next/head';
import Link from "next/link"
import Team from '../components/Member/Team';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineMail, HiArrowNarrowRight } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import Image from 'next/image';
import {Container, FormControl, FormLabel,Textarea, FormHelperText, Text,
   FormErrorMessage, Input, Heading, Button, useToast} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import { sendContactForm } from '../components/lib/api';
import dynamic from "next/dynamic";



const Order = dynamic(() => import('../components/Contact/Order/Order'))


const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };




const contactUs = () => {
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
        <div>
          <Head>
                <meta name="description" content="CEO" />
                <link rel="icon" href="/images/2.png" />
                <title>Contact CEO</title>
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
              
                    <Link href='/'>
                    <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-2 ring-white ring-2 
                      rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
                       cursor-pointer'/>
                    </Link>
{/* ................................................................................................................... */}
                    <div className="flex flex-row px-[15%]  lg:px-[5%] md:flex-col justify-around ">
                        <div className="flex flex-col  justify-around py-[25%] pl-[4%] 
                         text-left">
                       <div className='flex justify-center pb-2'>
                            <h1 className="text-6xl border-b-2 border-[#994dac3f] left-14  sm:text-3xl
                             text-white 
                               font-extrabold py-4  w-full whitespace-nowrap  ">
                                     Build to Last  
                            </h1>
                       </div>
                            <h1 className="font-extrabold text-2xl  sm:pt-4 
                             text-[#61B0D1] sm:block">
                            DEVELOP & PUBLISH YOUR OWN CREATIVE IDEAS
                            </h1>
                            <p className=" mt-3 sm:leading-relaxed  
                            text-left text-xl text-white sm:text-xl 
                             max-w-[80%]">
                            With CEOs DashBoard watch your project from the start until deployment,
                              and see  how it grows  daily.
                            </p>

                            <div className='flex flex-row   mt-4 border-y-2 border-[#994dac3f]'>

                                    <div className='flex flex-row md:flex-col  justify-around items-center
                                     w-3/4'>
                                       <div className=' py-5'>
                                        <h1 className='text-white '>Iran - Urmia</h1>
                                         <Link href='tel:+984433384232'>
                                            <h1 className='text-white '>+9844 3338 4232</h1>
                                         </Link> 
                                         {/* <Link href='tel:+989141472686'>
                                            <h1 className='text-white '>+98 914 147 2686</h1>
                                         </Link> */}
                                       </div>
                                       <div className='py-5'>
                                        <h1 className='text-white '>Türkiye - Istanbul</h1>
                                         <Link href='tel:+905528258841'>
                                            <h1 className='text-white '>+90 552 825 8841</h1>
                                         </Link> 
                                       </div>
                                       <div className='py-5'>
                                        <h1 className='text-white '>UK - London </h1>
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
                                    <Link href='https://www.instagram.com/onlineceo_' target='_blank'  aria-label='Instagram'>
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
                    
                    </div>
                    <Link href='/whyE'>
                    <div className=' shadow-xl shadow-[#994dac2f]  animate-pulse  flex justify-center items-center '>
                        <h2 className='text-white   py-2 text-center  '>WHY ONLINE CEO ? </h2>
                        <HiArrowNarrowRight className=' my-4 w-10 animate-pulse text-2xl text-[#fff] cursor-pointer '/> 

                      </div>
                    </Link>
                                
{/* .......................................................... */}
                
                    <div className=' w-full'>
                      <Order/>
                    </div>
{/* .....................................form......................................... */}
                    <div className='py-4 ]'>
                   <ChakraProvider>
                        <Container maxW="600px" mt={2}>
                            <Heading></Heading>
                            {error && (
                            <Text color="red.300" my={4} fontSize="xl">
                            {error}
                             </Text>
                             )}
                            <FormControl isRequired mb={2} isInvalid={touched.name && !values.name}>
                                <FormLabel color='gray.300'>Name</FormLabel>
                                <Input type='text' name='name' color='gray.300' errorBorderColor='red.300' 
                                value={values.name} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired mb={2} isInvalid={touched.email && !values.email}>
                                <FormLabel color='gray.300'>Email or Phone Number</FormLabel>
                                <Input type='email' name='email' color='gray.300'  value={values.email} onChange={handleChange} onBlur={onBlur}/>
                                <FormHelperText>We'll never share your info.</FormHelperText>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>


                            <FormControl isRequired mb={2} isInvalid={touched.subject && !values.subject}>
                                <FormLabel color='gray.300'>Title of your project</FormLabel>
                                <Input type='text' name='subject' color='gray.300' value={values.subject} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                            <FormControl isRequired mb={2} isInvalid={touched.message && !values.message}>
                                <FormLabel color='gray.300'>Tell us about your project</FormLabel>
                                <Textarea type='text' color='gray.300' name='message' rows={6} value={values.message} onChange={handleChange} onBlur={onBlur}/>
                                <FormErrorMessage>Required</FormErrorMessage>
                            </FormControl>

                           <Button variant='outline'  my={4} px={10} colorScheme='blue' isLoading={isLoading}
                              disabled={
                                !values.name || !values.email || !values.subject || !values.message
                              } onClick={onSubmit}>
                            Send</Button>     

                        </Container>

                        </ChakraProvider>

                    </div>
           
                   <Team />
          
{/* .......................................................... */}
                </div>
         </div>
                
        </div>
    );
}

export default contactUs;

