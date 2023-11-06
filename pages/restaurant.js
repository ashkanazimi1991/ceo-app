
import Head from 'next/head';
import Image from 'next/image';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider , Checkbox, extendTheme  } from '@chakra-ui/react';
import Link from 'next/link';
import dynamic from "next/dynamic";
import React, { useRef } from 'react';




const fonts = {
  body:'IRANSansWeb',
  // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})


const Performance = dynamic(() => import('../components/CChart/Performance'))
const Accessibility = dynamic(() => import('../components/CChart/Accessibility'))
const BestPractices = dynamic(() => import('../components/CChart/BestPractices'))
const SEO = dynamic(() => import('../components/CChart/SEO'))


import img3 from '../public/images/res03.png'

const restaurant = () => {


  // const videoRef = useRef(null);

  // const handleMouseOver = () => {
  //    const video = videoRef.current;
  //    if (video.paused) {
  //      video.play();
  //    }
  // };
 
  // const handleMouseOut = () => {
  //    const video = videoRef.current;
  //    if (!video.paused) {
  //      video.pause();
  //    }
  // };

  return (
    <div className='' >
     <Head>
     <title> CEO Restaurant</title>
     <meta name="description" content="مدیریت آنلاین نرم افزار رستوران" />
     <meta name="theme-color" content="#142028"/>
     <link rel="icon" href="/images/1.png" />
     <link rel='manifest' href='/manifest.json' />
     </Head>
     <ChakraProvider theme={theme}>


     <Image
             className=" fixed -z-20 top-0 left-0  object-cover h-screen "
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

{/* <div className='fixed top-0 left-0 w-full -z-10  h-full'>
<video  
      className=" w-full h-full  object-cover  " video autoPlay muted loop  >
                    <source   src="/video/resturant.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
</div> */}
   
{/* ................header.................. */}
<div className='z-40 px-2 fixed w-full  bg-[#0000003a] shadow-2xl top-0 '> 
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
        <p className='py-2 my-2 text-white bg-[#113a3b75] hover:text-green-400 cursor-pointer text-xs border-dashed border-2 border-sky-500 rounded-xl  px-2'>ثبت سفارش</p>
      </Link>
          
        </div> 
    </div>
</div>

{/* ................/header.................. */}

    {/* <div className='fixed w-full min-h-screen top-0 -z-10 right-0 '>
    <Image  src='/images/food100.jpg'  alt="ceo" width='1200' height='800'
                 className="w-full h-full object-cover "/>
    </div> */}


    <div className='flex justify-center mt-24 items-center p-8'>
     <div className='border-gray-800 w-full border rounded-xl py-5  h-full  bg-gradient-to-b from-transparent to-[#07090aec]'>
     
        
        <div className='flex justify-around py-4 w-full '>
        {/* <Link href='/restaurant_front' > */}
        <p className='text-gray-100 bg-[#1296ad] rounded-lg px-4 py-2'> بخش مدیریت</p>
        {/* </Link> */}
        <Link href='/restaurant_front' >
        <p className='text-gray-100 bg-[#12ad53] rounded-lg px-4 py-2'>  نمونه دمو</p>
        </Link>


        </div>
        
        <div className='flex justify-center items-center w-full'>
          <Image  src={img3}  alt="logo" width='800' height='800'
                 className=" w-1/2 sm:w-full md:w-2/3 object-contain "/>

        </div>
            <h2 className='text-white text-right px-5'> وبسایت, وب اپلیکیشن و نرم افزارهای رستوران و فست فود  </h2>
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
                            <h3 className=' text-green-500 px-2 pb-2'>20</h3>
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
                                        <p className='text-right w-full text-sm text-gray-400'>قابل توسعه و مقیاس پذیر</p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>قابلیت نصب   PWA</p>
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
                                        <p className='text-right w-full text-sm text-gray-400'>  منو جامع رستوران با طراحی اختصاصی </p>
                                        </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'> معرفی در گوگل و نقشه های جغرافیایی  </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-1/4'>
                                      <h3 className='text-white '>25 </h3>
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
                            <h3 className=' text-green-500 px-2 pb-2'>65</h3>
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
                            <h3 className=' text-green-500 px-2 pb-2'>120</h3>
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


    <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-8 bg-gradient-to-b from-transparent to-[#07090aec] '>
   
      <div
      className="w-full h-full object-cover rounded-md bg-gradient-to-b from-transparent to-[#07090aec] p-1  "

    >
      <video
        className=" w-full h-full object-cover md:object-contain "
        // ref={videoRef}
        muted
        loop
        controls
      >
        <source src="/video/res05.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
     

    <div
      className="w-full h-full object-cover rounded-md bg-gradient-to-b from-transparent to-[#07090aec] p-1  "
    
    >
      <video
        className=" w-full h-full object-cover md:object-contain"
        // ref={videoRef}
        muted
        loop
        controls
      >
        <source src="/video/res06.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>



    <div
      className="w-full h-full object-cover rounded-md bg-gradient-to-b from-transparent to-[#07090aec] p-1  "
    
    >
      <video
        className=" w-full h-full object-cover md:object-contain "
        // ref={videoRef}
        muted
        loop
        controls
      >
        <source src="/video/re.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* <div
      className="w-full h-full object-cover rounded-md bg-gradient-to-b from-transparent to-[#07090aec] p-1  "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <video
        className=" w-full h-full object-cover "
        // ref={videoRef}
        muted
        loop
        controls
      >
        <source src="/video/resturant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> */}



 










   






    </div>
</ChakraProvider>

    </div>
  )
}

export default restaurant