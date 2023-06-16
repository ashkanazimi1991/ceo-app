import React from 'react';
import ActiveLink from "../ActiveLink/ActiveLink";
import Image from 'next/image';


import flagE from '../../public/images/english.png'
import flagT from '../../public/images/turkey.png'
import flagP from '../../public/images/iran.png'



function Navbar() {
  return (
    <div>
        <ul className="list-reset flex flex-row z-20 text-center md:text-center">
                        <ActiveLink href='/'>
                            <li  className=" flex-1  ">
                            <div className=" py-2 md:py-3 flex flex-row justify-center
                               items-center no-underline  ">
                                 <Image  src={flagE} height='50' width='50'   alt="onlin ceo" 
                                 className='w-14 md:w-10 p-1 '/>
                                 <h2 className=" text-center  text-sm tracking-wide"> 
                                 English</h2>
                                </div>
                            </li>
                        </ActiveLink>

                        <ActiveLink href='/turkish'>
                            <li className=" flex-1 justify-center">
                            <div className=" py-2 md:py-3 flex flex-row justify-center
                               items-center no-underline  ">
                                  <Image  src={flagT} height='50' width='50'   alt="onlin ceo" 
                                 className='w-14 md:w-10 p-1 '/>
                                   <h2 className=" text-center  text-sm tracking-wide"> 
                                    Türkçe</h2>
                                </div>
                            </li>
                        </ActiveLink>

                  

                        <ActiveLink href='/persian'>
                            <li className=" flex-1 items-center">
                            <div className=" py-2 md:py-3 flex flex-row justify-center
                               items-center no-underline  ">
                                  <Image  src={flagP} height='50' width='50'  alt="onlin ceo" 
                                 className='w-14 p-1 md:w-10 '/>
                                  <h2 className=" text-center  text-sm tracking-wide"> 
                                   فارسی</h2>
                                </div>
                            </li>
                        </ActiveLink>
                </ul>
    </div>
  )
}

export default Navbar