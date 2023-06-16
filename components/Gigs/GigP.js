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






function GigP() {
  return (
      <div className='flex flex-col min-h-screen w-full bg-[#000000b4]'>
     <ChakraProvider theme={theme}>
    <h1 className='text-white text-ئی border-y-2 text-center py-4'>سایر پروژه ها</h1>
    
    <div className="w-full h-full grid   bg-[#07090a15] px-[5%]  grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-[5%]  gap-8 ">
  
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img1}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white text-right px-5'>وبسایت و وب اپ  اپلیکیشن های معرفی</h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>خود و کسب و کارتان را به بهترین شکل به دنیا معرفی کنید </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>ویژه</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className=' text-green-500 px-2 pb-2'>18</h3>
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
                                    <p className='text-right w-full text-sm text-gray-400'>کدنویسی اختصاصی با زبان جاوا اسکریپت متناسب با طرح و ایده شما</p>
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
                                        <p className='text-right w-full text-sm text-gray-400'>درگاه های ارتباطی, شبکه های اجتماعی, تماس های مستقیم</p>
                                        </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>معرفی حرفه ای رزومه, کسب و کار یا خدمات شما به مرورکرها با طراحی اختصاصی و استاندارد </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-1/4'>
                                      <h3 className='text-white'>پنج روز کاری</h3>
                                    </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                       <p className='text-right w-full text-sm text-gray-400'>زمان تحویل سورس کد و اپلیکیشن</p>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
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
                                    <p className='text-right w-full text-sm text-gray-400'>کدنویسی اختصاصی با زبان جاوا اسکریپت و پایتون متناسب با طرح و ایده شما</p>
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
                                        <p className='text-right w-full text-sm text-gray-400'>ثبت نام, فرم های ارتباطی, ایمیل تجاری, شبکه های اجتماعی, تماس های مستقیم</p>
                                        </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>معرفی حرفه ای رزومه, کسب و کار یا خدمات شما به مرورکرها با طراحی اختصاصی طبق خواسته کارفرما </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>عملکرد سئو 100 درصدی در آنالیزهای گوگل و سایر موتورهای جستجو </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>کانفیگ و راه اندازی سرور اختصاصی و اتصال و انتشار پلتفرم یا وبسایت با دامنه اختصاصی شما </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                      </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-right w-full text-sm text-gray-400'>دو زبانه یا چند زبانه با توجه به خواسته کارفرما </p>
                                        </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-1/4'>
                                      <h3 className='text-white'>ده روز کاری</h3>
                                    </div>
                                    <div className='flex justify-center items-center w-3/4'>
                                       <p className='text-right w-full text-sm text-gray-400'>زمان تحویل سورس کد و اپلیکیشن</p>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                    <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className=' text-green-500 px-2 pb-2'>30</h3>
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
                              <p className='text-right w-full text-sm text-gray-400'>کدنویسی اختصاصی با زبان جاوا اسکریپت و پایتون با بالاترین رتبه در آنالیزها </p>
                          </div>
                      </div>


                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> اپلیکیشن قابل نصب بر روی دستگاه های کاربران PWA</p>
                                  </div>
                      </div>



                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'> انیمیت و پویا با ارائه های روز دنیا و رسپانسیو شده برای تمام مرورگرها و دستگاه ها</p>
                                  </div>
                      </div>


                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>ثبت نام, فرم های ارتباطی, ایمیل تجاری, شبکه های اجتماعی, تماس های مستقیم</p>
                                  </div>
                      </div>
                     
                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>معرفی حرفه ای رزومه, کسب و کار یا خدمات شما به مرورکرها با طراحی اختصاصی طبق خواسته کارفرما </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>عملکرد سئو 100 درصدی در آنالیزهای گوگل و سایر موتورهای جستجو </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>کانفیگ و راه اندازی سرور اختصاصی و اتصال و انتشار پلتفرم یا وبسایت با دامنه اختصاصی شما </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                  <div className='flex justify-center items-center w-1/4'>
                                  <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                              <div className='flex justify-center items-center w-3/4'>
                                  <p className='text-right w-full text-sm text-gray-400'>دو زبانه یا چند زبانه با توجه به خواسته کارفرما </p>
                                  </div>
                      </div>

                      <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                              <div className='flex justify-center items-center w-1/4'>
                                <h3 className='text-white'>پانزده روز کاری</h3>
                              </div>
                              <div className='flex justify-center items-center w-3/4'>
                                 <p className='text-right w-full text-sm text-gray-400'>زمان تحویل سورس کد و اپلیکیشن</p>
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
            <h2 className='text-white text-right px-5'>وبسایت و نرم افزارهای فروشگاهی</h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>یک پلتفرم اختصاصی, یکپارچه و همیشگی </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>ویژه</Tab>
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

        {/* ............................................ */}

        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img3}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white text-right px-5'>وبسایت, وب اپلیکیشن و نرم افزارهای خدماتی </h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>یک پلتفرم اختصاصی, یکپارچه و همیشگی </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>ویژه</Tab>
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

        {/* ............................................. */}


        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img4}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white text-right px-5'>وبسایت و نرم افزارهای املاک </h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>یک پلتفرم اختصاصی, یکپارچه و همیشگی </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>ویژه</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
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
                            <h3 className=' text-green-500 px-2 pb-2'>140</h3>
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
                            <h3 className=' text-green-500 px-2 pb-2'>195</h3>
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
        {/* ................................................ */}


        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img5}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white text-right px-5'>وبسایت و نرم افزارهای پزشکی, درمانی و سلامتی</h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>یک پلتفرم اختصاصی, یکپارچه و همیشگی </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>ویژه</Tab>
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
                            <h3 className=' text-green-500 px-2 pb-2'>185</h3>
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
        {/* ............................................ */}
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-[#000000c4]'>
                  <Image  src={img6}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white text-right px-5'>وبسایت و نرم افزارهای آموزشی و چند منظوره</h2>
            <p className='text-gray-400 text-right text-sm px-5 py-2 mb-2'>یک پلتفرم اختصاصی, یکپارچه و همیشگی </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >پایه</Tab>
                    <Tab color='green.400'>استاندارد</Tab>
                    <Tab color='blue.300'>ویژه</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className=' text-green-500 px-2 pb-2'>98</h3>
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
                            <h3 className=' text-green-500 px-2 pb-2'>160</h3>
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
                            <h3 className=' text-green-500 px-2 pb-2'>245</h3>
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

        {/* ...................................... */}


    </div>

    </ChakraProvider>
</div>
  )
}

export default GigP