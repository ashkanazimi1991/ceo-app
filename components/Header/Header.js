import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import Link from 'next/link'

import img2 from '../../public/images/2.png';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 bg-gradient-to-b from-black to-transparent  w-full px-2'>
        <div className='h-24 flex flex-row-reverse justify-between items-center'>

            <div className=' ' >
            <Navbar/>
            </div>
            <Link href="/">
                <div className='  '>
                    <Image  src={img2}  alt="logo" width='50' height='50'
                className=" max-h-32 lg:max-h-20 md:max-h-32  object-contain "/>
                </div>
           </Link>
        </div>

    </div>
  )
}

export default Header