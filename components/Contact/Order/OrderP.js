import React from 'react';
import { ChakraProvider, CircularProgress, Progress, Tabs, TabList,Tab,TabPanels, TabPanel, extendTheme } from '@chakra-ui/react'


const fonts = {
    body:'IRANSansWeb',
    // heading:'IRANSansWeb'.

}
const theme= extendTheme({fonts})

function OrderP() {
  return (
    <div className='bg-[#000000cb] px-[20%] md:px-[10%] sm:px-[2%] space-y-4 py-6'>
         <ChakraProvider theme={theme}>
                {/* <Progress size='xs' isIndeterminate /> */}
            <div className='flex w-full justify-center space-x-2 items-center'>
                <h2 className='text-white text-left text-lg  '>فقط چهار گام از ابتدا تا تحویل پروژه </h2>
                {/* <CircularProgress isIndeterminate color='green.300' /> */}
            </div>
            <div className=''>
                <Tabs isFitted dir='rtl'  >
                    <TabList color="gray.500">
                        <Tab>گام اول</Tab>
                        <Tab>گام دوم</Tab>
                        <Tab >گام سوم</Tab>
                        <Tab>گام چهارم</Tab>

                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <div className='space-y-4'>
                                <Progress hasStripe isAnimated value={5} />
                                <p className='text-white leading-8 text-right'>
                                برای شروع فرآیند ابتدا فرم زیر را پر کنید، تیم ما در اسرع وقت برای مشاوره رایگان و دریافت جزئیات پروژه با شما تماس میگیرد                                </p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='space-y-4'>
                                <Progress hasStripe isAnimated value={15} />
                                <p className='text-white leading-8 text-right'>
                                بعد از اینکه جزئیات پروژه شما را دریافت کردیم، هزینه پروژه شما را محاسبه می کنیم و اگر آن را قبول کردید، برای شما قراردادی برای امضا ارسال می کنیم. پس از امضای قرارداد، اولین فاکتور را به عنوان 1/3 قیمت کل دریافت می کنید، پس از اولین پرداخت، پروژه شما شروع می شود                               </p>
                            </div>
                        </TabPanel>

                        <TabPanel>
                          <div className='space-y-4'>
                                <Progress hasStripe isAnimated value={50} />
                                <p className='text-white leading-8 text-right'>
                                در مرحله سوم با توجه با اطلاعات دریافتی, رابط کاربری پروژه  طراحی می شود, شما بارها میتوانید  رابط کاربری را تغییر دهید بعد از رضایت کاملتان, پروژه به فاز توسعه می رسد و فاکتور دوم شما معادل یک سوم کل مبلغ پروژه برای شما ارسال میگردد تا بقیه فرآیند طی شود  
                                      </p>
                            </div>
                        </TabPanel>

                        <TabPanel>
                          <div className='space-y-4'>
                                <Progress  value={100} />
                                <p className='text-white leading-8 text-right'>
                                مرحله نهایی شامل اجرا و استقرار پروژه شما در بازار، اینترنت یا هر دو است. پس از تست پروژه و کاملاً کاربردی بودن آن، آخرین فاکتور را پرداخت می کنید و ما کد پلتفرم شما را تحویل می دهیم    
                               </p>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </ChakraProvider>
    </div>
  )
}

export default OrderP