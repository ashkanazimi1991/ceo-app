import React from 'react'
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

// import DrBooking from '../../components/Dr/DrBooking'

const drBooking = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-800'>

      <p className='text-center px-[5%] text-gray-300'>کاربر گرامی بدون ثبت نام امکان دسترسی به این صفحه وجود ندارد</p>
        {/* <DrBooking/> */}
        <Link href="/drappPersian">
          <div className="flex justify-around items-center border mt-6 rounded-md">
            <h3 className="text-white text-sm px-2 py-4">Come Back to Home</h3>
            <AiOutlineHome className="text-white mx-2" />
          </div>
        </Link>
    </div>
  )
}

export default drBooking
