import React from 'react'
import Image from 'next/image'
import Hero from '../components/Dr_admin/Hero'
import Link from 'next/link'
import Head from 'next/head'
import { BsArrowRightShort, BsFillTelephoneFill,BsCameraVideoFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import Faq from '../components/Dr_admin/Faq';


const dr_front = () => {
  return (
    <div>
    <Head>
      <title>
        نرم افزار کلینیک روانشناسی
      </title>
      <meta name="description" content='نرم افزارهای مدیریت روانشناسان'/>
      <meta name="theme-color" content="#142028"/>
                <link rel="icon" href="/images/2.png" />
                <link rel='manifest' href='/manifest.json' />
      
    </Head>
       <Hero/> 

  <div>
    <div className='flex bg-gray-100 flex-col justify-center'>
      <p className='   text-lg bg-blue-100 md:text-sm px-[22%] md:px-[4%] py-16 text-center'>
        سرشت برساد با تجربه کاری و اکادمیک خود  در زمینه روان شناسی در بهمود مراجعه کنندگان زیادی سهیم بوده است
      </p>


{/* number */}
      <div className='flex md:flex-col md:space-y-6 justify-center my-10'>

      <div className='flex flex-col md:flex-row px-[4%] border-x-2 justify-around items-center w-full'>
          <div className='flex justify-center items-center '>
            <p className=' text-4xl md:text-2xl text-purple-500 font-bold '>670000+</p>
            <p className=' text-gray-500 pl-2 '>نفر</p>
          </div>
          <p className=' text-center px-4'> مراجعه کننده </p>
        </div>
        
        <div className='flex flex-col md:flex-row px-[4%] border-x-2 justify-around items-center w-full'>
          <div className='flex justify-center items-center '>
            <p className=' text-4xl md:text-2xl text-purple-500 font-bold '>600000+</p>
            <p className=' text-gray-500 pl-2 '>نفر</p>
          </div>
          <p className=' text-center px-4'> بهبودیافته </p>
        </div>
        
        <div className='flex flex-col md:flex-row px-[4%] border-x-2  justify-around items-center w-full'>
            <div className='flex justify-center items-center '>
            <p className=' text-4xl md:text-2xl text-purple-500 font-bold '>10+</p>
            <p className=' text-gray-500 pl-2 '>سال</p>
          </div>
          <p className=' text-center px-4'> سابقه </p>
        </div>

       



      </div>

{/* /number */}









    </div>
    <div className=' flex-col bg-gray-200  py-4'>
    <Link href='/index' className=' flex justify-center'>
                  <p className='  bg-green-100 text-green-600 text-sm rounded-2xl px-4 py-2'> زمینه های روانشناسی</p>
    </Link>
       
    </div>
    
    <div className=' flex justify-center bg-gray-200 items-center'>
      <div className=' grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 justify-center px-[15%]'>
        
       
        <div className='relative inline-block  max-h-96 transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/p1.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره خانواده
                     {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>



            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره ازدواج
                     {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f3.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  زوج درمانی
                     {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f7.jpg' width='400' height='600' alt='نرم افزار کلینیک'   className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره فردی
                                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f5.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  روانپزشک
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f8.jpg' width='400' height='600' alt='نرم افزار کلینیک'   className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره ارتباطی
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f8.jpg' width='400' height='600'  alt='نرم افزار کلینیک' className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره ارتباطی
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative max-h-96  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f8.jpg' width='400' height='600'  alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره ارتباطی
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>
      

        </div> 

    </div>
    <div className='bg-gray-200'>
      
      <div className=' pt-10'>
      <Link href='/' className=' flex justify-center'>
                  <p className='bg-green-100 text-green-600 text-sm  px-4 py-2 rounded-2xl '>ما برای کمک </p>
    </Link>
      <p className=' flex justify-center  text-md px-5 py-3 text-center'>
      برترین روانشناسان کشور را دور هم گرد آوردیم
     
    </p>
    </div>

    <div className=' flex md:flex-col w-full px-[12%] justify-center items-center space-x-2  '>
    <div className=' flex w-1/2 md:w-full  justify-center items-center '>

    <div className='relative inline-block transition delay-150 border-4 m-6 duration-300  ease-in-out rounded-xl scale-100 hover:scale-110 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/psy10.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 flex justify-around items-center 
                 -translate-y-1/4 bg-gray-400 text-balck hover:text-green-200 whitespace-nowrap  text-xs px-4 py-2  rounded'>
                همیشه در ارتباط
                       <div className='flex justify-around mx-2 items-center w-full'>
                        <BsFillChatLeftTextFill className='text-green-200 ml-2 text-md   ' />
                        <BsCameraVideoFill className='text-green-200 ml-2 text-md    ' />
                        <BsFillTelephoneFill className='text-green-200 ml-2 text-md   ' />

                    </div>
                  </button>
            </div>
    </div>
        <div className=' flex flex-col space-y-4 w-1/2 md:w-full h-full'>
          <div className=' flex flex-col space-y-2  bg-purple-100 hover:bg-purple-200 shadow-lg hover:shadow-2xl transition delay-150 border-4  duration-300  ease-in-out rounded-xl scale-100 hover:scale-110'>
            <h3 className=' text-md text-right border-b-2 border-gray-600 mx-2 py-2'>جلسات حضوری </h3>
            <p className =' text-gray-600 p-2 text-right text-xs'> نوبت دهی آنلاین و دریافت نزدیکترین نوبت یا انتخاب زمان مناسب توسط مراحعه کننده  </p>
          </div>
          
          <div className=' flex flex-col space-y-2  bg-purple-100 hover:bg-purple-200 shadow-lg hover:shadow-2xl transition delay-150 border-4  duration-300  ease-in-out rounded-xl scale-100 hover:scale-110'>
            <h3 className=' text-md text-right border-b-2 border-gray-600 mx-2 py-2'>جلسات آنلاین </h3>
            <p className =' text-gray-600 p-2 text-right text-xs'> ارتباط ویدیوکال و نوبت گیری آنلاین  </p>
          </div>
         
          <div className=' flex flex-col space-y-2  bg-purple-100 hover:bg-purple-200 shadow-lg hover:shadow-2xl transition delay-150 border-4  duration-300  ease-in-out rounded-xl scale-100 hover:scale-110'>
            <h3 className=' text-md text-right border-b-2 border-gray-600 mx-2 py-2'>جلسات متنی یا صوتی </h3>
            <p className =' text-gray-600 p-2 text-right text-xs'> برای راحتتر بودن هرچه بیشتر, مراجعه کنندگان می توانند از راه های مختلف ارتباطی با مشاور خود در ارتباط باشند </p>
          </div>

        </div>
    </div>
    <div className=' pt-10 flex-col'>
    <Link href='/index' className=' flex justify-center'>
                  <p className=' bg-green-100 text-green-600 text-sm  px-4 py-2 rounded-2xl  '> گلچینی از برترین های ایران</p>
    </Link>
    <p className='text-md  p-8 text-center '>
   کلینیک سرشت برساد همیشه همراه شماست
    </p>         
    </div>

    <div className=' grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center px-[15%] md:px-4'>
        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr20.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>
   
        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr21.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr23.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr21.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr23.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr20.jpg' width='200' height='400' alt='نرم افزار کلینیک'   className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr21.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>
      
        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/dr23.jpg' width='200' height='400' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'> نام روانشناس</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300'>بیوگرافی </p>  
        </div>
     
      

        </div> 
     
       <p className='  py-4 text-center whitespace-nowrap text-xs'>
      و بسیاری دیگر 
       </p>
 
{/* Faq */}

<Faq/>
{/* Faq/ */}
      </div>

 
    </div>    


</div>
  )
}

export default dr_front