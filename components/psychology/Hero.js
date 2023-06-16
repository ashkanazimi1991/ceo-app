import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const psychology = () => {
  return (
    <div  className= 'bg-blue-50 min-h-screen'>
        {/* menu */}
        <div className=' flex justify-between '>
            <div>
                <p className=' text-purple-500 font-bold p-4'>SHINSY</p>
            </div>
         <div className=' flex '>
            <div>
                <Link href='/index'>
                    <p className=' text-black p-4 '>Home</p>
                </Link>
            </div>
            <div>
                <Link href='/index'>
                    <p className=' text-black p-4'>Self Test</p>
                </Link>
            </div>
            <div>
                <Link href='/index'>
                    <p className=' text-black p-4'>Diagnostic</p>
                </Link>
            </div>
            <div>
                <Link href='/index'>
                    <p className=' text-black p-4'>Article</p>
                </Link>
            </div>
            <div>
                <Link href='/index'>
                    <p className=' text-black p-4'>About Us</p>
                </Link>
            </div>
         </div>
         <div className=' flex p-4 '>
         <div>
                <Link href='/index'>
                    <p className=' text-purple-500 font-bold px-4 rounded-md p-2 border'>Contact Us</p>
                </Link>
         </div>
         <div>
                <Link href='/index'>
                    <p className=' bg-black text-white font-bold rounded px-4 p-2'>Sign In</p>
                </Link>
            </div>
         </div>
            
        </div>
        {/* /menu */}
        <div className='flex p-10'>
        <div className=' w-1/2 px-20 '>
          <p className='flex justify-center bg-blue-100 rounded-lg text-purple-500 '>
            best psychology consultant in the country
          </p>
          <p className=' font-extrabold flex justify-center text-3xl py-4'>
            assisting your mental health
          </p>
          <p className=' font-extrabold flex justify-center text-3xl py-4'>
             with our best services
          </p>
          <p className=' flex justify-center py-4'>
            we were experienced in psycologhy consultant for a couple of decades with our services we believe we can achive better of your mental. 
          </p>
        </div>
        <div>
        <Image src='/images/s2.jpg' width='500' height='500'/>
        </div>
        </div>
    </div>
  )
}
export default psychology