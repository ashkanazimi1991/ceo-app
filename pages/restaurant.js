import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider , Checkbox, extendTheme  } from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from "next/dynamic";





const fonts = {
  body:'IRANSansWeb',
  // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})


const Performance = dynamic(() => import('../components/CChart/Performance'))
const Accessibility = dynamic(() => import('../components/CChart/Accessibility'))
const BestPractices = dynamic(() => import('../components/CChart/BestPractices'))
const SEO = dynamic(() => import('../components/CChart/SEO'))


import img3 from '../public/images/fastfoodp.png'

const restaurant = () => {
  return (
    <div className='min-h-screen' >
     <Head>
     <title> CEO Restaurant</title>
     <meta name="description" content="نرم افزار رستوران" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
     </Head>
     <ChakraProvider theme={theme}>
{/* ................header.................. */}
<div className='z-40 px-2 fixed w-full  bg-slate-900 shadow-2xl top-0 '> 
    <div className='flex justify-between items-center'>
    <Link href='/galleryP' >
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
          
        </div> 
    </div>
</div>

{/* ................/header.................. */}

    <div className='fixed top-0 -z-10 right-0 '>
    <Image  src='/images/food100.jpg'  alt="ceo" width='1200' height='800'
                 className=" w-full min-h-screen object-cover "/>
    </div>


    <div className='flex justify-center mt-24 items-center p-8'>
     <div className='border-gray-800 w-1/2 md:w-3/4 sm:w-full border rounded-xl py-5  h-full bg-[#0c223adc]'>
      <p className='text-gray-100 text-center'>مشاهده دمو</p>
        
        <div className='flex justify-around py-4 w-full '>
        <Link href='/restaurant_front' >
        <p className='text-gray-100 bg-[#1296ad] rounded-lg px-4 py-2'> بخش مدیریت</p>
        </Link>
        <Link href='/restaurant_front' >
        <p className='text-gray-100 bg-[#12ad53] rounded-lg px-4 py-2'> بخش مشتریان</p>
        </Link>


        </div>
        
        
        
          <Image  src={img3}  alt="logo" width='800' height='800'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white text-right px-5'>وبسایت, وب اپلیکیشن و نرم افزارهای خدماتی </h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>یک پلتفرم اختصاصی, یکپارچه و همیشگی </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>  بسته جامع</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className=' text-green-500 px-2 pb-2'>75</h3>
                            <h3 className='text-blue-300 pb-2'>:قیمت (میلیون) </h3>
                            </div>
                            <Link href='/contactUsPersian' >
                                <h3 className='text-green-300 pb-2'>ثبت سفارش</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-right w-full text-sm text-gray-400'>کدنویسی اختصاصی رابط کاربری با زبان جاوا اسکریپت و بک اند پایتون متناسب با طرح و ایده شما</p>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>رسپانسیو شده برای تمام مرورگرها و دستگاه ها</p>
                                        </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>داشبورد مدیریت جامع و تخصصی با نمودار های شماتیک و گزارش گیری لحظه ای برای مدیریت دقیق کسب و کار </p>
                                        </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'> امنیت بسیار بالا به همراه انواع درگاه های پرداختی و سیستم های ورود و خروج با رمز های یکبارمصرف  </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-1/4'>
                                      <h3 className='text-white '>35 </h3>
                                    </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                       <p className='text-right w-full text-sm text-gray-400'>زمان تحویل سورس کد و اپلیکیشن (روز کاری)</p>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className=' text-green-500 px-2 pb-2'>95</h3>
                            <h3 className='text-blue-300 pb-2'>:قیمت (میلیون) </h3>
                            </div>
                            <Link href='/contactUsPersian' >
                                <h3 className='text-green-300 pb-2'>ثبت سفارش</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                          <div className='flex justify-center items-center w-1/4'>
                              <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                          </div>
                          <div className='flex justify-center items-center w-3/4'>
                              <p className='text-right w-full text-sm text-gray-400'>کدنویسی اختصاصی رابط کاربری با زبان جاوا اسکریپت و بک اند پایتون متناسب با طرح و ایده شما</p>
                          </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>رسپانسیو شده برای تمام مرورگرها و دستگاه ها</p>
                                  </div>
                      </div>


                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>داشبورد مدیریت جامع و تخصصی با نمودار های شماتیک و گزارش گیری لحظه ای برای مدیریت دقیق کسب و کار </p>
                                  </div>
                      </div>
                     
                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> امنیت بسیار بالا به همراه انواع درگاه های پرداختی و سیستم های ورود و خروج با رمز های یکبارمصرف  </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> محاسبه هوشمد قیمت برای فروش های چند مرحله ای یا اعمال اختصاصی سازی های قبل از خرید  </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> راندمان 100 درصدی سئو برای تمامی مروگرها  </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>کانفیگ سرور اختصاصی, بارگذاری و اجرا اپلیکیشن    </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>اتصال انواع درگاه های پرداختی و رمز های یک بار مصرف    </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>دسته بندی ها و زیر مجموعه های بدون محدودیت برای گسترش کسب و کار در زمینه های جدید    </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                              <div className='flex justify-center items-center w-1/4'>
                                <h3 className='text-white '>50 </h3>
                              </div>
                              <div className='flex justify-center items-center w-3/4'>
                                 <p className='text-right w-full text-sm text-gray-400'>زمان تحویل سورس کد و اپلیکیشن (روز کاری)</p>
                              </div>
                      </div>

                      


                  </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                    <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className=' text-green-500 px-2 pb-2'>165</h3>
                            <h3 className='text-blue-300 pb-2'>:قیمت (میلیون) </h3>
                            </div>
                            <Link href='/contactUsPersian' >
                                <h3 className='text-green-300 pb-2'>ثبت سفارش</h3>
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
                          <div className='flex justify-center items-center w-1/4'>
                              <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                          </div>
                          <div className='flex justify-center items-center w-3/4'>
                              <p className='text-right w-full text-sm text-gray-400'></p>
                          </div>
                      </div>

                      
                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                          <div className='flex justify-center items-center w-1/4'>
                              <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                          </div>
                          <div className='flex justify-center items-center w-3/4'>
                              <p className='text-right w-full text-sm text-gray-400'> کدنویسی اختصاصی رابط کاربری با زبان جاوا اسکریپت و بک اند پایتون متناسب با طرح و ایده شما با بالاترین رتبه در آنالیزها</p>
                          </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>نرم افزارهای اختصاصی اندروید و ای او اس و بارگذاری در مارکت های های ارائه دهنده اپلیکیشن ها</p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>رسپانسیو شده برای تمام مرورگرها و دستگاه ها</p>
                                  </div>
                      </div>


                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>داشبورد مدیریت جامع و تخصصی با نمودار های شماتیک و گزارش گیری لحظه ای برای مدیریت دقیق کسب و کار </p>
                                  </div>
                      </div>
                     
                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> امنیت بسیار بالا به همراه انواع درگاه های پرداختی و سیستم های ورود و خروج با رمز های یکبارمصرف  </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> محاسبه هوشمد قیمت برای فروش های چند مرحله ای یا اعمال اختصاصی سازی های قبل از خرید  </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> راندمان 100 درصدی سئو برای تمامی مروگرها  </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> کانفیگ سرور اختصاصی, بارگذاری و اجرا اپلیکیشن ها    </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>اتصال انواع درگاه های پرداختی و رمز های یک بار مصرف    </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>دسته بندی ها و زیر مجموعه های بدون محدودیت برای گسترش کسب و کار در زمینه های جدید    </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                              <div className='flex justify-center items-center w-1/4'>
                                <h3 className='text-white '>72 </h3>
                              </div>
                              <div className='flex justify-center items-center w-3/4'>
                                 <p className='text-right w-full text-sm text-gray-400'>زمان تحویل سورس کد و اپلیکیشن (روز کاری)</p>
                              </div>
                      </div>

                      


                  </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>

    </div>
</ChakraProvider>

    </div>
  )
}

export default restaurant