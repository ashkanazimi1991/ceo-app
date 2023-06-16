import React from 'react';
import { ChakraProvider, CircularProgress, Progress, Tabs, TabList,Tab,TabPanels, TabPanel } from '@chakra-ui/react'


function Order() {
  return (
    <div className='bg-[#000000cb] px-[20%] md:px-[10%] sm:px-[2%] space-y-4 py-6'>
        <ChakraProvider>
                {/* <Progress size='xs' isIndeterminate /> */}
            <div className='flex w-full justify-center space-x-2 items-center'>
                {/* <CircularProgress isIndeterminate color='green.300' /> */}
                <h2 className='text-blue-400 text-left text-lg  '> 4 steps of  your project from the start to the end </h2>
            </div>
            <div className=''>
                <Tabs isFitted>
                    <TabList  color="gray.500">
                        <Tab>Step A</Tab>
                        <Tab >Step B</Tab>
                        <Tab>Step C</Tab>
                        <Tab>Step D</Tab>

                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <div className='space-y-4'>
                                <Progress isAnimated hasStripe value={5} />
                                <p className='text-white text-left'>To start the progress fill out the form below, as soon as possible our team contact you for free consulting and receive your project details
                                </p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='space-y-4'>
                                <Progress isAnimated hasStripe value={15} />
                                <p className='text-white text-left'>
                                    After we receive your project details we calculate your project cost and if you accept it we send you a contract to sign. after signing the contract, you receive the first invoice as 1/3 of the total price, after the first payment our progress going to start.
                                </p>
                            </div>
                        </TabPanel>

                        <TabPanel>
                          <div className='space-y-4'>
                                <Progress isAnimated hasStripe value={50} />
                                <p className='text-white text-left'>
                                In the third step based on the received info, our team designs the first UI of your project, of course, it can be edited several times to reach your full satisfaction. After Demo is accepted by you, we send the second 1/3 invoice to start the next phase of your project.                                 </p>
                            </div>
                        </TabPanel>

                        <TabPanel>
                          <div className='space-y-4'>
                                <Progress   value={100} />
                                <p className='text-white text-left'>
                                The final phase contains the running and deploying of your project on the market, network, or both.
                                after testing your project and it's completely functional you pay the last invoice and we deliver your source code.     
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

export default Order