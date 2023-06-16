import React from 'react';
import Link from "next/link";
import { FiPhone} from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className='flex flex-col z-20 md:flex-col  justify-center py-2 bg-[#0f1a20f6]'>
            <div className="flex justify-center md:w-full  ">
                <ul className="flex items-center justify-center gap-4  ">
                    <li>
                        <Link href='tel:+989141472686'>
                            <FiPhone className='text-xl text-[#f7f7f7] transition hover:text-teal-700/75 '/> 
                        </Link> 
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/onlineceo_' target='_blank'  aria-label='Instagram'>
                            <FaInstagram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-teal-700/75'/> 
                        </Link>
                    </li>
                
                    <li>
                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telegram'>
                            <TbBrandTelegram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-teal-700/75 '/> 
                        </Link>  
                    </li>
                    <li>
                        <Link href="mailto:info@onlineceo.org" target='_blank'  aria-label='mail'>
                            <HiOutlineMail className=' my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-teal-700/75 '/> 
                        </Link>  
                    </li>
            
                </ul>
            </div>
            <div className='flex justify-center items-center '>
                <p className="text-sm text-center  text-gray-500 ">
                Copyright &copy; 2023. All rights reserved for CEO Company
                </p>
            </div>

        </footer>
    );
}

export default Footer;

             