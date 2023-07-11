import React from 'react'
import Image from 'next/image'
import HeroDrOffice from '../components/Dr_front/HeroDrOffice'
import Link from 'next/link'
import Head from 'next/head'
import { BsArrowDown, BsFillTelephoneFill,BsCameraVideoFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import Faq from '../components/Dr_admin/Faq';
import dynamic from 'next/dynamic'


const DesendHeart = dynamic(() => import('../components/Dr_front/DesendHeart'))


const dr_front = () => {
  return (
    <div>
    <Head>
      <title>
         پلتفرم اختصاصی مطب پزشک
      </title>
      <meta name="description" content='نرم افزار مدیریت مطب '/>
      <meta name="theme-color" content="#142028"/>
                <link rel="icon" href="/images/2.png" />
                <link rel='manifest' href='/manifest.json' />
      
    </Head>
       <HeroDrOffice/> 

  <div>
    <div className='flex bg-gray-100 flex-col justify-center'>
      <p className='   text-lg bg-blue-100 md:text-sm px-[22%] md:px-[4%] py-16 text-center'>
      فلوشیپ اقدامات مداخله ای قلب و عروق
متخصص قلب و عروق
      </p>


{/* number */}
      <div className='flex  md:flex-col md:space-y-6 justify-center my-10'>

      <div className='flex flex-col md:flex-row px-[4%] border-x-2 justify-around items-center w-full'>
          <div className='flex justify-center items-center '>
            <p className=' text-4xl md:text-2xl text-purple-500 font-bold '>6700+</p>
            <p className=' text-gray-500 pl-2 '>نفر</p>
          </div>
          <p className=' text-center px-4'> مراجعه کننده </p>
        </div>
        
        <div className='flex flex-col md:flex-row px-[4%] border-x-2 justify-around items-center w-full'>
          <div className='flex justify-center items-center '>
            <p className=' text-4xl md:text-2xl text-purple-500 font-bold '>6000+</p>
            <p className=' text-gray-500 pl-2 '>نفر</p>
          </div>
          <p className=' text-center px-4'> بهبودیافته </p>
        </div>
        
        <div className='flex flex-col md:flex-row px-[4%] border-x-2  justify-around items-center w-full'>
            <div className='flex justify-center items-center '>
            <p className=' text-4xl md:text-2xl text-purple-500 font-bold '>5+</p>
            <p className=' text-gray-500 pl-2 '>سال</p>
          </div>
          <p className=' text-center px-4'> سابقه </p>
        </div>

       



      </div>

{/* /number */}









    </div>
    <div className=' flex-col justify-center items-center bg-gray-200  py-4'>
      <div className='flex bg-blue-100 mx-[15%] justify-around rounded-2xl my-4 items-center'>
         <BsArrowDown className=' animate-bounce'/>
         <p className='  text-center text-blue-600 text-sm  px-4 py-4'>  درمان و بهبود بیماری های از قبیل</p>
      </div>
   
       
    </div>
    
    <div className=' flex justify-center bg-gray-200 items-center'>
      <div className=' grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 justify-center px-[15%]'>
        
       
        <div className='relative inline-block  max-h-96 min-h-72transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100  ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/disease1.webp' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                آترواسکلروز
                     {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>



            <div className='relative inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/disease2.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  فشار خون بالا             
                {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative  inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/disease3.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  کلسترول بالا     
                                  {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/disease4.jpg' width='400' height='600' alt='نرم افزار کلینیک'   className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                آنژین صدری   
                                                    {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f5.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  روانپزشک
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f8.jpg' width='400' height='600' alt='نرم افزار کلینیک'   className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره ارتباطی
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/f8.jpg' width='400' height='600'  alt='نرم افزار کلینیک' className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
                <button className='z-20 absolute top-3/4 left-1/2 group -translate-x-1/2 -translate-y-1/4 bg-white text-balck whitespace-nowrap  text-xs px-4 py-2 rounded'>
                  مشاوره ارتباطی
                       {/* <div className='group w-full'>
                        <BsArrowRightShort className='text-green-400 ml-2 text-2xl hidden group-hover:block  ' />
                    </div> */}
                  </button>
            </div>

            <div className='relative inline-block transition delay-150 border-4 duration-300 brightness-50 hover:brightness-100 ease-in-out rounded-xl scale-100 hover:scale-125 shadow-2xl z-0 hover:z-10'>
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
      <Link href='' className=' flex justify-center'>
                  <p className='bg-green-100 text-green-600 text-sm  px-4 py-2 rounded-2xl '>بهبودی خود را احساس کنید </p>
    </Link>
    <div className='px-[15%] sm:px-4 py-6 '>
      <DesendHeart/>

      </div>



      <p className=' flex justify-center  text-md px-5 py-6 text-center'>
      بصورت آنلاین به پرونده بیماری خود دسترسی داشته باشید     
    </p>
    </div>

    <div className=' flex md:flex-col w-full px-[12%] justify-center py-6 items-center space-x-2  '>
    <div className=' flex w-1/2 md:w-full  justify-center items-center '>

    <div className='relative inline-block transition delay-150 border-4 m-6 duration-300  ease-in-out rounded-xl scale-100 hover:scale-110 shadow-2xl z-0 hover:z-10'>
               <Image src='/images/diseas5.jpg' width='400' height='600' alt='نرم افزار کلینیک'  className='rounded-xl   w-full h-full drop-shadow-2xl  object-cover'/>
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
 

    <div className=' grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center px-[15%] md:px-4 my-6'>
       
    <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>

        <div className='flex flex-col  bg-blue-100 shadow-xl rounded-xl '>
          <Image src='/images/disease6.jpg' width='700' height='600' alt='نرم افزار کلینیک'  className='md:h-36 h-72  w-full object-top object-cover rounded-xl'/>
          <p className='text-sm text-center py-2 px-4 whitespace-nowrap'>  نمونه کار</p>  
          <p className='text-sm text-center py-2 px-4 border-t-2 border-gray-300 hover:border-green-500 hover:text-green-800  cursor-pointer'>مشاهده </p>  
        </div>
   
      
      

        </div> 
     
       <p className=' w-30 py-6  rounded border-y-4 my-8 border-gray-300 cursor-pointer text-center whitespace-nowrap text-xs'>
      مشاهده همه
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