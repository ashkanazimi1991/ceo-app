import React from 'react';
import { BiChevronsDown } from 'react-icons/bi';
import ChartSection from '../chart/ChartSection';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const WhyT = () => {
  return (
    
    <div className="group px-[10%] md:px-[2%] sm:px-0 min-h-screen flex flex-col justify-around    bg-[#07090aec] p-3" >
        <div className="flex items-center py-2 border-b-2  justify-between px-[5%] ">
             <h2 className="text-xl  md:text-lg text-center  text-gray-400 ">
             NEDEN BİZ ?
             </h2>
             <AiOutlineInfoCircle className="text-white text-2xl" />
        </div>

        <div className='w-full pt-5  flex flex-col px-40 2xl:px-20 sm:px-5  justify-center'>

            <p className="my-4 px-5 w-full text-gray-400">
                    Soruyu cevaplamadan önce lütfen dünya çerçeve sıralama tablosuna dikkat edin. 
            </p>
                  
            <ChartSection/>

            <p className="my-4 px-5 w-full  text-gray-400">
            projelerimizi incelerseniz, tüm platformlarımızın dünyanın bir numaralı framework React tarafından yapıldığını ve ikinci değil, güçlü javascript ve python programlama dili ile kodlandığını göreceksiniz.
             </p>
             <h3 className='text-blue-400 px-5 text-lg'>Dünyanın en iyi işletmeleri, size sunduğumuz teknolojinin aynısını kullanıyor</h3>
            <div className='grid p-[5%] grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                <p className='text-gray-400 text-center whitespace-nowrap  px-4 py-2 border rounded border-gray-500'>Twitter</p>    
                <p className='text-gray-400 text-center  whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Instagram</p>       
                <p className='text-gray-400 text-center  whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Whatsapp</p> 
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Netflix</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Trello</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Apple</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Binance</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Discord</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Pinterest</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Wix</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Skype</p>       
                <p className='text-gray-400 text-center whitespace-nowrap px-4 py-2 border rounded border-gray-500'>Airbnb</p>       


            </div>
                 
        </div>  

                 

{/* ..................................................................
..................................................................
........................timeline..................................
..................................................................
.................................................................. */}
<h2 className="text-2xl sm:text-lg text-left  font-medium text-[#67d2f3] px-5">
Ayrıca, aşağıdakilere sahibiz:
</h2>
<div className=' overflow-x-scroll scrollbar-hide px-[5%]  pb-16'>

<ol className="items-center pl-5 py-5 flex w-full ">

    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            A sınıf</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             google analizde</h3>
        </div>
    </li>
   
<li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  whitespace-nowrap text-[#67d2f3]">
            İlerleme Canlı Raporu</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Proje yönetimi Panosu</h3>
        </div>
    </li>

    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            7/24 Destek</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             %99,99 Çalışma Süresi </h3>
        </div>
    </li>



    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Veritabanı garantisi</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Bulutlarda rutin yedekleme</h3>
        </div>
    </li>




    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Ücretsiz Prototip</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Figma UI Design</h3>
        </div>
    </li>


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Uygun fiyat</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Piyasa fiyatı üzerinden %10 indirim</h3>
        </div>
    </li>


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3] whitespace-nowrap pr-10">
            Geri Sayım Sözleşmesi</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             Zaman çizelgesinde bitir</h3>
        </div>
    </li>


    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            Market'te Dağıtın</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             %100 Memnuniyet sonrası yayınlayın</h3>
        </div>
    </li>

    <li className="relative  ">
        <div className="flex items-center ">
            <div className="flex z-10 justify-center items-center w-6 h-6 
             rounded-full ring-20 ring-white
              ring-4 shrink-0">
                <BiChevronsDown className="text-white text-2xl" />
            </div>
            <div className=" w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pr-8">
            <h3 className="text-lg  text-[#67d2f3]">
            SEO desteği</h3>
             <h3 className="pr-10 whitespace-nowrap font-normal text-gray-500 dark:text-gray-400">
             tüm tarayıcılar için</h3>
        </div>
    </li>

</ol>

         

                  </div>
                </div> 
  
  )
}

export default WhyT