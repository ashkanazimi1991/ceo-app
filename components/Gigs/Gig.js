import React from 'react';
import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider , Checkbox, extendTheme  } from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from "next/dynamic";


const Performance = dynamic(() => import('../CChart/Performance'))
const Accessibility = dynamic(() => import('../CChart/Accessibility'))
const BestPractices = dynamic(() => import('../CChart/BestPractices'))
const SEO = dynamic(() => import('../CChart/SEO'))




import img1 from '../../public/images/porfolioP.png'
import img2 from '../../public/images/shopgig.png'
import img3 from '../../public/images/fastfoodp.png'
import img4 from '../../public/images/realstatep.png'
import img5 from '../../public/images/healthp.png'
import img6 from '../../public/images/schoolp.png'


const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})






function Gig() {
  return (
      <div className='flex flex-col min-h-screen w-full bg-[#000000b4]'>
     <ChakraProvider theme={theme}>
    <h1 className='text-white text-xl border-y-2 text-center py-4'>Projects for Sale</h1>
    
    <div className="w-full h-full grid   bg-[#07090a15] px-[5%]  grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-[5%]  gap-8 ">
  
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img1}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
                  <a aria-label='Build Portfolio Webapp or website'>
                     <h2 className='text-white px-5'>Build Portfolio Webapp or Website</h2>
                  </a>
            <p className='text-gray-400 px-5 py-2 mb-2'>Present yourself to the world in the best way </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Basic</Tab>
                    <Tab color='green.400'>Standard</Tab>
                    <Tab color='blue.300'>Premium</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>360$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast and secure Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>contact form, social links, direct call</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Present your Info, CV, Products, or Services</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>4 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                    <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>450$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>contact form, social links, direct call</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>present your info, products, or services</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Connect Web App with your Domain</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Business Email </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>6 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>650$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className=' w-full grid grid-cols-2'>
                        <Performance/>
                        <Accessibility/>
                        <BestPractices/>
                        <SEO/>
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Grade A in analysis </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animated and interactive </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>contact form, social links, direct call</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>present your info, products, or services</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Connect Web App with your Domain</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Business Email </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>10 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>
{/* .....................nextone........................................ */}
<div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img2}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
                 <a aria-label='Build Custom Online Shop'>
                    <h2 className='text-white px-5'>Build Custom Online Shop</h2>
                 </a>
            <p className='text-gray-400 px-5 py-2 mb-2'>Present your products to the world in the best way </p>

            <ChakraProvider theme={theme} >
            <Tabs  isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Basic</Tab>
                    <Tab color='green.400'>Standard</Tab>
                    <Tab color='blue.300'>Premium</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1450$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast and secure Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Smart price calculation for customizable Orders</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Bookmark, like, and comment on all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and  sorting filters</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>3400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className=' w-full grid grid-cols-2'>
                        <Performance/>
                        <Accessibility/>
                        <BestPractices/>
                        <SEO/>
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Grade A in Analyses, Large-scale, and Integrated </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>The full package contains applications for web, android, and ios  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animated,3D UI and interactive </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Custom Dashboard based on your special features with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Scalable for millions of users</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance for all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your applications on the server, web, and markets such as Google Play and apple store </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and sorting filters </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </ChakraProvider >
        </div>

        {/* ............................................ */}

        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img3}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
                  <a aria-label='Build Custom  fast food and restaurant app'>
                    <h2 className='text-white px-5'>Build Custom  fast food and restaurant app</h2>
                  </a>
            <p className='text-gray-400 px-5 py-2 mb-2'>Present your Services in the best way </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Basic</Tab>
                    <Tab color='green.400'>Standard</Tab>
                    <Tab color='blue.300'>Premium</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast and secure Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Smart price calculation for customizable Orders</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Bookmark, like, and comment on all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and  sorting filters</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>3600$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className=' w-full grid grid-cols-2'>
                        <Performance/>
                        <Accessibility/>
                        <BestPractices/>
                        <SEO/>
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Grade A in Analyses, Large-scale, and Integrated </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>The full package contains applications for web, android, and ios  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animated and interactive </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Custom Dashboard based on your special features with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Scalable for millions of users</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance for all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your applications on the server, web, and markets such as Google Play and apple store </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and sorting filters </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
          
        </div>

        {/* ............................................. */}


        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img4}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
                  <a aria-label='Build Custom Real Estate app or website'>
                      <h2 className='text-white px-5'>Build Custom Real Estate app or website </h2>
                  </a>
            <p className='text-gray-400 px-5 py-2 mb-2'>Present your Services in the best way to the world </p>

          
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Basic</Tab>
                    <Tab color='green.400'>Standard</Tab>
                    <Tab color='blue.300'>Premium</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast and secure Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>2800$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Smart price calculation for customizable Orders</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Bookmark, like, and comment on all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and  sorting filters</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>3900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className=' w-full grid grid-cols-2'>
                        <Performance/>
                        <Accessibility/>
                        <BestPractices/>
                        <SEO/>
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Grade A in Analyses, Large-scale, and Integrated </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>The full package contains applications for web, android, and ios  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animated and interactive </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Custom Dashboard based on your special features with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Scalable for millions of users</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance for all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your applications on the server, web, and markets such as Google Play and apple store </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and sorting filters </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
       
        </div>
        {/* ................................................ */}


        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img5}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
                   <a aria-label='Build Custom Doctor and life care app or website'>
                      <h2 className='text-white px-5'>Build Custom Doctor and life care app or website</h2>
                   </a>
            <p className='text-gray-400 px-5 py-2 mb-2'>Present your Services in the best way to the world </p>

           
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Basic</Tab>
                    <Tab color='green.400'>Standard</Tab>
                    <Tab color='blue.300'>Premium</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1500$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast and secure Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Smart price calculation for customizable Orders</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Bookmark, like, and comment on all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and  sorting filters</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>3700$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className=' w-full grid grid-cols-2'>
                        <Performance/>
                        <Accessibility/>
                        <BestPractices/>
                        <SEO/>
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Grade A in Analyses, Large-scale, and Integrated </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>The full package contains applications for web, android, and ios  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animated and interactive </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Custom Dashboard based on your special features with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Scalable for millions of users</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance for all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your applications on the server, web, and markets such as Google Play and apple store </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and sorting filters </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
   
        </div>

        {/* ............................................ */}
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img6}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
                   <a aria-label='Build Custom Education app or website'>
                     <h2 className='text-white px-5'>Build Custom Education app or website</h2>
                   </a>
            <p className='text-gray-400 px-5 py-2 mb-2'>Present your Services in the best way to the world </p>

         
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Basic</Tab>
                    <Tab color='green.400'>Standard</Tab>
                    <Tab color='blue.300'>Premium</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1960$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast and secure Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>3200$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Admin Dashboard with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Smart price calculation for customizable Orders</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your web app on the server</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Bookmark, like, and comment on all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and  sorting filters</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Price: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>4900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Order Now</h3>
                            </Link>    
                        </div>
                        <div className=' w-full grid grid-cols-2'>
                        <Performance/>
                        <Accessibility/>
                        <BestPractices/>
                        <SEO/>
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Grade A in Analyses, Large-scale, and Integrated </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>The full package contains applications for web, android, and ios  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>By Custom JavaScript FrontEnd and Python BackEnd based on your idea or design</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Responsive fast Webapp for all devices and browsers</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animated and interactive </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Admin Custom Dashboard based on your special features with comprehensive reports on different charts</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Scalable for millions of users</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>100% SEO Performance for all products</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Config and run your applications on the server, web, and markets such as Google Play and apple store </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Pay methods and OTP login - verify </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Unlimited categories and sorting filters </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Receive your source code</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 Days</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
         
        </div>

        {/* ...................................... */}


    </div>

    </ChakraProvider>
</div>
  )
}

export default Gig