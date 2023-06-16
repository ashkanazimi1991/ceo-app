import React from 'react';
import {Collapse} from 'react-collapse';
import Image from 'next/image';
import Link from 'next/link';
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi';

const AcordionT = ({open, toggle, img, alt, title, desc}) => {
  return (
    <div className=' container h-[100%] ' >
        <div className=' border-2 border-gray-700 
         bg-[#000000b4] py-6 px-[5%]  flex mb-3 rounded justify-between 
         items-center  crusor-pointer'
        onClick={toggle}>
            <h1 className=' text-white'> {title} </h1>
            <div className='text-2xl'>
                {open ?  <BiChevronsUp className='text-white'/> : <BiChevronsDown className='text-white'/> }

            </div>
        </div>
        <Collapse isOpened={open} className='h-full'>
            <div className='flex flex-row border-x-2 bg-[#000000c2]  
             w-full justify-around 
            py-10 items-center lg:flex-col-reverse'>
                <div className='w-1/2 lg:w-full flex flex-col justify-center px-10 pb-10'>
                    <p className="my-4 px-5 md:px-0 text-left text-gray-500  leading-8">{desc}</p>

                    <div className='flex flex-row justify-center pb-10 w-full'>
                      <Link href="/gallery">
                        <h1 className='text-gray-400 border px-5 py-2 rounded-md
                        whitespace-nowrap mr-5'>Daha fazla bilgi</h1>
                      </Link>
                      <Link href="/contactUs">
                        <div className='flex  flex-row-reverse  border justify-center 
                        whitespace-nowrap rounded-md px-5 py-2'>
                            <h1 className='text-[#147FAA] pl-2   '>sipariş ver</h1>
                            <h1 className='text-white '> Şimdi</h1>
                        </div>
                      </Link>
                    </div>

                </div>
                <div className='w-1/2  sm:w-full  flex justify-center items-center'>
                    <Image src={img} alt={alt} width='650' height='600'  
                    className='sm:px-4 w-[60%] md:w-[80%] h-[70%]  object-contain '/> 

                </div>

            

            </div>
        </Collapse>
    </div>
  )
}

export default AcordionT