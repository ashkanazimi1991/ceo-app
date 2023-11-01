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






function GigT() {
  return (
      <div className='flex flex-col min-h-screen w-full bg-gradient-to-b from-transparent to-[#07090aec]'>
     <ChakraProvider theme={theme}>
    <h1 className='text-white text-xl border-y-2 text-center py-4'>Satılık Projeler</h1>
    
    <div className="w-full h-full grid   bg-[#07090a15] px-[5%]  grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-[5%]  gap-8 ">
  
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-gradient-to-b from-transparent to-[#07090aec]'>
                  <Image  src={img1}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white px-5'>Kişisel Portföy Webapp (Web Sitesi)</h2>
            <p className='text-gray-400 px-5 py-2 mb-2'>Kendinizi dünyaya en iyi şekilde tanıtın </p>

            
            <Tabs isLazy isFitted  >
                <TabList mb='1em' >
                    <Tab color='red.500' >Temel</Tab>
                    <Tab color='green.400'>Standart</Tab>
                    <Tab color='blue.300'>özel</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>250$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı, hızlı ve güvenli Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>İletişim formu, sosyal bağlantılar, doğrudan arama</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Bilgilerinizi, Özgeçmişinizi, Ürünlerinizi veya Hizmetlerinizi Sunun</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>4 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                    <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>450$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>iletişim formu, sosyal bağlantılar, doğrudan arama</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>bilgilerinizi, ürünlerinizi veya hizmetlerinizi sunun</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web Uygulamasını Etki Alanınıza Bağlayın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>İş E-postası </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>6 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                        <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>650$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
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
                                        <p className='text-gray-400 w-full'>Analizde A notu </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript Ön Uç ve python arka ucu ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animasyonlu ve etkileşimli </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>iletişim formu, sosyal bağlantılar, doğrudan arama</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>bilgilerinizi, ürünlerinizi veya hizmetlerinizi sunun</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web Uygulamasını Etki Alanınıza Bağlayın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>İş E-postası </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>10 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
           
        </div>
{/* .....................nextone........................................ */}
<div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-gradient-to-b from-transparent to-[#07090aec]'>
                  <Image  src={img2}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white px-5'>Özel Çevrimiçi Mağaza</h2>
            <p className='text-gray-400 px-5 py-2 mb-2'>Ürünlerinizi dünyaya en iyi şekilde sunun </p>

            <ChakraProvider theme={theme} >
            <Tabs  isFitted  >
                <TabList mb='1em' >
                <Tab color='red.500' >Temel</Tab>
                    <Tab color='green.400'>Standart</Tab>
                    <Tab color='blue.300'>özel</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>850$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı, hızlı ve güvenli Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Özelleştirilebilir Siparişler için akıllı fiyat hesaplaması</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünlere yer işareti koyun, beğenin ve yorum yapın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>2900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
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
                                        <p className='text-gray-400 w-full'>Analizlerde A Derecesi, Büyük Ölçekli ve Entegre </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tam paket web, android ve ios için uygulamalar içerir  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animasyonlu, 3D UI ve etkileşimli </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren özel özelliklerinize dayalı Yönetici Özel Panosu</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Milyonlarca kullanıcı için ölçeklenebilir</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünler için %100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Uygulamalarınızı sunucuda, web'de ve Google Play ve apple store gibi pazarlarda yapılandırın ve çalıştırın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </ChakraProvider >
        </div>

        {/* ............................................ */}

        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-gradient-to-b from-transparent to-[#07090aec]'>
                  <Image  src={img3}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white px-5'>Özel fast food ve restoran uygulaması</h2>
            <p className='text-gray-400 px-5 py-2 mb-2'>Ürünlerinizi dünyaya en iyi şekilde sunun </p>

            <ChakraProvider theme={theme} >
            <Tabs  isFitted  >
                <TabList mb='1em' >
                <Tab color='red.500' >Temel</Tab>
                    <Tab color='green.400'>Standart</Tab>
                    <Tab color='blue.300'>özel</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>850$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı, hızlı ve güvenli Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Özelleştirilebilir Siparişler için akıllı fiyat hesaplaması</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünlere yer işareti koyun, beğenin ve yorum yapın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>2900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
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
                                        <p className='text-gray-400 w-full'>Analizlerde A Derecesi, Büyük Ölçekli ve Entegre </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tam paket web, android ve ios için uygulamalar içerir  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animasyonlu, 3D UI ve etkileşimli </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren özel özelliklerinize dayalı Yönetici Özel Panosu</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Milyonlarca kullanıcı için ölçeklenebilir</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünler için %100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Uygulamalarınızı sunucuda, web'de ve Google Play ve apple store gibi pazarlarda yapılandırın ve çalıştırın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </ChakraProvider >
        </div>

        {/* ............................................. */}


        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-gradient-to-b from-transparent to-[#07090aec]'>
                  <Image  src={img4}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white px-5'>Özel emlak uygulaması (web sitesi)</h2>
            <p className='text-gray-400 px-5 py-2 mb-2'>Ürünlerinizi dünyaya en iyi şekilde sunun </p>

            <ChakraProvider theme={theme} >
            <Tabs  isFitted  >
                <TabList mb='1em' >
                <Tab color='red.500' >Temel</Tab>
                    <Tab color='green.400'>Standart</Tab>
                    <Tab color='blue.300'>özel</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>850$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı, hızlı ve güvenli Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Özelleştirilebilir Siparişler için akıllı fiyat hesaplaması</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünlere yer işareti koyun, beğenin ve yorum yapın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>2900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
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
                                        <p className='text-gray-400 w-full'>Analizlerde A Derecesi, Büyük Ölçekli ve Entegre </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tam paket web, android ve ios için uygulamalar içerir  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animasyonlu, 3D UI ve etkileşimli </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren özel özelliklerinize dayalı Yönetici Özel Panosu</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Milyonlarca kullanıcı için ölçeklenebilir</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünler için %100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Uygulamalarınızı sunucuda, web'de ve Google Play ve apple store gibi pazarlarda yapılandırın ve çalıştırın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </ChakraProvider >
        </div>
        {/* ................................................ */}


        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-gradient-to-b from-transparent to-[#07090aec]'>
                  <Image  src={img5}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white px-5'>Özel Doktor ve yaşam bakımı uygulaması (web sitesi)</h2>
            <p className='text-gray-400 px-5 py-2 mb-2'>Ürünlerinizi dünyaya en iyi şekilde sunun </p>

            <ChakraProvider theme={theme} >
            <Tabs  isFitted  >
                <TabList mb='1em' >
                <Tab color='red.500' >Temel</Tab>
                    <Tab color='green.400'>Standart</Tab>
                    <Tab color='blue.300'>özel</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>850$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı, hızlı ve güvenli Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Özelleştirilebilir Siparişler için akıllı fiyat hesaplaması</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünlere yer işareti koyun, beğenin ve yorum yapın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>2900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
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
                                        <p className='text-gray-400 w-full'>Analizlerde A Derecesi, Büyük Ölçekli ve Entegre </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tam paket web, android ve ios için uygulamalar içerir  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animasyonlu, 3D UI ve etkileşimli </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren özel özelliklerinize dayalı Yönetici Özel Panosu</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Milyonlarca kullanıcı için ölçeklenebilir</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünler için %100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Uygulamalarınızı sunucuda, web'de ve Google Play ve apple store gibi pazarlarda yapılandırın ve çalıştırın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </ChakraProvider >
        </div>

        {/* ............................................ */}
        <div className='border-gray-800 border rounded-xl py-5 w-full h-full bg-gradient-to-b from-transparent to-[#07090aec]'>
                  <Image  src={img6}  alt="logo" width='600' height='600'
                 className=" w-[100%] object-contain "/>
            <h2 className='text-white px-5'>Özel Eğitim uygulaması (web sitesi)</h2>
            <p className='text-gray-400 px-5 py-2 mb-2'>Ürünlerinizi dünyaya en iyi şekilde sunun </p>

            <ChakraProvider theme={theme} >
            <Tabs  isFitted  >
                <TabList mb='1em' >
                <Tab color='red.500' >Temel</Tab>
                    <Tab color='green.400'>Standart</Tab>
                    <Tab color='blue.300'>özel</Tab>
                </TabList>
                
                <TabPanels>
                    {/* ...................................................basic................................................... */}
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>850$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı, hızlı ve güvenli Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>


                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                  



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>25 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................standard........................................................... */}
                    <TabPanel>
                    <div className='flex justify-between'>
                               <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>1400$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
                            </Link>    
                        </div>
                        <div className='flex flex-col  justify-between py-2  items-center w-full'>
                      
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                              <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren Yönetici Kontrol Paneli</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Özelleştirilebilir Siparişler için akıllı fiyat hesaplaması</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>%100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Web uygulamanızı sunucuda yapılandırın ve çalıştırın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünlere yer işareti koyun, beğenin ve yorum yapın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-gray-400 w-full'> Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>35 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
{/* ............................................................premium........................................................... */}

                    <TabPanel>
                        <div className='flex justify-between'>
                            <div className='flex flex-row justify-center items-center'>
                            <h3 className='text-blue-300 pb-2'>Fiyat: </h3>
                            <h3 className=' text-green-500 px-2 pb-2'>2900$</h3>
                            </div>
                            <Link href='/contactUs' >
                                <h3 className='text-green-300 pb-2'>Şimdi sipariş ver</h3>
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
                                        <p className='text-gray-400 w-full'>Analizlerde A Derecesi, Büyük Ölçekli ve Entegre </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tam paket web, android ve ios için uygulamalar içerir  </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                <div className='flex justify-center items-center w-3/4'>
                                    <p className='text-left w-full text-gray-400'>Fikrinize veya tasarımınıza dayalı Özel JavaScript FrontEnd ve Python BackEnd ile</p>
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm cihazlar ve tarayıcılar için duyarlı hızlı Webapp</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>



                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Animasyonlu, 3D UI ve etkileşimli </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Farklı grafikler üzerinde kapsamlı raporlar içeren özel özelliklerinize dayalı Yönetici Özel Panosu</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                           
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Milyonlarca kullanıcı için ölçeklenebilir</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Tüm ürünler için %100 SEO Performansı</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>

                                    </div>
                            </div>
                     

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Uygulamalarınızı sunucuda, web'de ve Google Play ve apple store gibi pazarlarda yapılandırın ve çalıştırın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Ödeme yöntemleri ve OTP girişi - doğrulayın </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>

                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Sınırsız kategori ve sıralama filtresi </p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <Checkbox defaultChecked isDisabled  colorScheme='green'></Checkbox>
                                    </div>
                            </div>
                            
                            <div className='flex flex-row border-t-2 border-gray-600 py-2 w-full'>
                                    <div className='flex justify-center items-center w-3/4'>
                                        <p className='text-gray-400 w-full'>Kaynak kodunuzu alın</p>
                                        </div>
                                        <div className='flex justify-center items-center w-1/4'>
                                        <h3 className='text-white'>55 gün</h3>
                                    </div>
                            </div>

                            


                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </ChakraProvider >
        </div>

        {/* ...................................... */}


    </div>

    </ChakraProvider>
</div>
  )
}

export default GigT