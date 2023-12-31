import React from 'react'
import { FiPhone} from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineProfile } from "react-icons/ai";
import { HiOutlineMail} from "react-icons/hi";


const Team = () => {
  return (
    <div className=' w-full  mt-20 '>
       {/* <!-- component --> */}
<div>
            <div className="container px-10  py-10 ">
                <h1 className="text-2xl font-semibold text-center 
                capitalize lg:text-xl whitespace-nowrap text-teal-400">تیم اجرایی مجموعه   </h1>
                              
                <div className="grid grid-cols-4  gap-8  px-[5%] mt-8 xl:mt-16 xl:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 ">
                    
               {/* <div className=' grid grid-cols-3 sm:grid-cols-1'> */}

                    {/* ashkan......................................... */}
                    <div className="flex flex-col   justify-center items-center transition-colors
                     duration-200 py-10
                     transform  group hover:border  rounded-xl">
                        <Image width='100' height='100'
                         src="/images/ashkanprofile.png" alt="اشکان عظیمی " 
                         className="object-cover w-32 h-32 rounded-full   brightness-95 ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md   font-semibold text-gray-700 
                         dark:text-white
                         group-hover:text-white"> اشکان عظیمی</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">مدیرعامل و توسعه دهنده</h2>
                        
                        <div className="flex mt-3 px-2">
                            <Link href='https://www.instagram.com/ashkanazimi.info' target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telegram'>
                              <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>  

                           <Link href='/ceo_cv' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>  
                        </div>
                    </div>
                    
                          {/* sajjad......................................... */}
                        <div className="flex flex-col  justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">
                          <Image width='100' height='100'
                         src="/images/sajjad.png" alt="اشکان عظیمی " 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize
                         dark:text-white text-center     group-hover:text-white">سجاد آباجالی</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300 text-center" >   مدیر فروش </h2>
                        
                        <div className="flex mt-3 -mx-2">
                            <Link href='tel:+905528258841'>
                              <FiPhone className='text-xl text-[#f7f7f7] mx-2 mt-1 transition hover:text-teal-700/75 '/> 
                            </Link> 
                            <Link href='https://www.instagram.com/Sajjad.abajali' target='_blank'  aria-label='Instagram'>
                              <FaInstagram className=' w-10 text-2xl text-[#fff] cursor-pointer'/> 
                            </Link>  
                            <Link href='https://t.me/Sajjadabajali' target='_blank'  aria-label='telegram'>
                              <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                            </Link>  

                        </div>
                    </div>

                                        {/* jaleh......................................... */}
                                        <div className="flex flex-col  justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">
                        <Image width='100' height='100'
                         src="/images/jaleh.png" alt="" 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white"> ژاله بیرقی</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300">توسعه دهنده رابط کاربری  </h2>
                        
                        <div className="flex mt-3 -mx-2">
                           <Link href='tel:+0989146232212'>
                              <FiPhone className='text-xl text-[#f7f7f7] mx-2 mt-1 transition hover:text-teal-700/75 '/> 
                            </Link> 


                              <Link href="mailto:Beiraghyjaleh@gmail.com" target='_blank'  aria-label='mail'>
                                  <HiOutlineMail className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                              </Link>  

                              <Link href='/cv_Jaleh_Beiraghy' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>
                        </div>
                    </div>
       {/* sara......................................... */}
       <div className="flex flex-col  justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">
                        <Image width='100' height='100'
                         src="/images/sara.jpg" alt="اشکان عظیمی " 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white">سارا کیان</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize text-center dark:text-gray-300
                         group-hover:text-gray-300">طراح رابط کاربری و توسعه دهنده</h2>
                        
                        <div className="flex mt-3 -mx-2">
                           <Link href='tel:'>
                              <FiPhone className='text-xl text-[#f7f7f7] mx-2 mt-1 transition hover:text-teal-700/75 '/> 
                            </Link> 


                              <Link href="mailto:" target='_blank'  aria-label='mail'>
                                  <HiOutlineMail className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                              </Link>  

                              <Link href='/' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>
                        </div>
                    </div>


             {/* salar......................................... */}
             <div className="flex flex-col  justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">
                        <Image width='200' height='100'
                         src="/images/salar.jpg" alt="برنامه نویسی" 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white">سالار فرزانه </h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300"> توسعه دهنده فول استک</h2>
                          <div className="flex mt-3 -mx-2">
                           <Link href='tel:'>
                              <FiPhone className='text-xl text-[#f7f7f7] mx-2 mt-1 transition hover:text-teal-700/75 '/> 
                            </Link> 


                              <Link href="mailto:" target='_blank'  aria-label='mail'>
                                  <HiOutlineMail className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                              </Link>  

                              <Link href='/' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>
                        </div>
              
                    </div>

                      
                

                           {/* amir......................................... */}
                           <div className="flex flex-col  justify-center items-center transition-colors duration-200
                          transform  group hover:border py-10 rounded-xl">
                         <Image width='200' height='100'
                         src="/images/amir.jpg" alt="amir salmani " 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white"> امیر سلمانی</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300"> توسعه دهنده بک اند</h2>

                        <div className="flex mt-3 -mx-2">
                        <Link href="mailto:amirsalmanidev@gmail.com" target='_blank'  aria-label='mail'>
                            <HiOutlineMail className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                         </Link>  
                            <Link href='https://t.me/amir_devlpr' target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  

                        <Link href='/amir-salmani' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>
                        </div>
                        
              
                    </div>

       

              

                 
                    <div className="flex flex-col  justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">
                          <Image width='100' height='100'
                         src="/images/bita3.jpg" alt="بیتا میسوری " 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white"> بیتا میسوری</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300"> توسعه دهنده رابط کاربری</h2>
                        
                        <div className="flex mt-3 -mx-2">
                        <Link href="https://www.instagram.com/bitmay"  target="_blank"   
                         aria-label="Instagram"  >
                         <FaInstagram className=" w-10 text-2xl text-[#fff] cursor-pointer " />
                        </Link> 
                            <Link href='https://t.me/bitmay' target='_blank'  aria-label='telegram'>
                          <TbBrandTelegram className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                        </Link>  

                        <Link href='/bitmay' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>
                        </div>
                    </div>




                        {/* ashkan......................................... */}
                  

                        <div className="flex flex-col  justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">
                          <Image width='100' height='100'
                         src="/images/ramin.jpg" alt="اشکان عظیمی " 
                         className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                        />
                        <h1 className="mt-4 text-md font-semibold text-gray-700 capitalize dark:text-white
                         group-hover:text-white"> رامین فرزین</h1>
                        
                        <h2 className="mt-2 text-gray-500 capitalize dark:text-gray-300
                         group-hover:text-gray-300"> توسعه دهنده بک اند</h2>
                        
                        <div className="flex mt-3 -mx-2">
                           <Link href='tel:'>
                              <FiPhone className='text-xl text-[#f7f7f7] mx-2 mt-1 transition hover:text-teal-700/75 '/> 
                            </Link> 


                              <Link href="mailto:" target='_blank'  aria-label='mail'>
                                  <HiOutlineMail className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                              </Link>  

                              <Link href='/' target='_blank'  aria-label='telegram'>
                              <AiOutlineProfile className=' w-10 text-2xl text-[#fff] cursor-pointer '/> 
                           </Link>
                        </div>
                    </div>



     




          




                        {/* ashkan......................................... */}
                       
                        


                        <div className="flex flex-col   justify-center items-center transition-colors duration-200
                     transform  group hover:border py-10 rounded-xl">

                          <div className="flex -space-x-4">
                          <Image width='50' height='50'
                         src="/images/x1.jpg" alt="ashkan" 
                         className="object-cover w-20 h-20 rounded-full ring-2 ring-gray-300"
                        />
                         <Image width='50' height='50'
                         src="/images/x2.jpg" alt="ashkan" 
                         className="object-cover w-20 h-20 rounded-full ring-2 ring-gray-300"
                        />
                        <Image width='50' height='50'
                        src="/images/x3.jpg" alt="ashkan" 
                         className="object-cover w-20 h-20 rounded-full ring-2 ring-gray-300"
                        />
                              <h1 className="flex justify-center items-center w-10 h-10 text-xs font-medium 
                              text-white bg-gray-700 rounded-full border-2 border-white
                               hover:bg-gray-600 dark:border-gray-800" > +10</h1>
                          </div>

                          <p className='text-gray-200 py-5 text-md '>
                         سایر توسعه دهنده ها
                          </p>
                    </div>



                  

             
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team