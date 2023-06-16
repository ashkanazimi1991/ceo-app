import React from 'react';
import { useState } from 'react';
import CoinList from '../components/Crypto/Coins/CoinList'
import SearchBar from '../components/Crypto/Coins/SearchBar';
import Layout from '../components/Crypto/Coins/Layout';
import Head from 'next/head';


import ChartSection from '../components/Crypto/ChartTrade/ChartSection';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const crypto = ({ filteredCoins }) => {


  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };




  return (
    <div className='bg-[#000000d7]'>
        <Head>
          <title>CEO Project</title>
          <meta name="description" content="برنامه نویسی" />
         <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/2.png" />
         <link rel='manifest' href='/manifest.json' />
        </Head>
        <Link href='/galleryT' >
         <BsArrowLeft className='fixed z-20 bg-[#1E9F93] p-1 ring-white ring-2 
        rounded-full  my-4 ml-6  sm:text-3xl text-5xl text-[#fff]
        cursor-pointer'/>
        </Link>
    <Image
            className=" fixed -z-20  w-[100%] md:w-screen object-cover h-full 
            opacity-100 sm:opacity-100"
            src="/images/bb.webp"
            width='1200'
            height='800'
            alt="CEO"/>
            <div>

        <div className='min-h-screen flex flex-col  justify-center w-full'>
        
          <div className='flex justify-center pt-14 sm:flex-col px-[5%] items-center w-full'>
          
          <div className='w-1/2 sm:w-full'>
            <h1 className='text-gray-500 md:text-2xl text-4xl '>
            350'den fazla kripto para birimi satın alın, ticaret yapın ve tutun
                </h1>
            <p className='text-[#0c80ad] text-lg'>
            Tıpkı Binance gibi React çerçevesiyle borsa platformları oluşturuyoruz
                </p>
            <h2 className='text-white py-5 '>Ücretsiz Bitcoin ticareti yapın</h2>
              {/* ................signin........................... */}
              <div className='bg-yellow-400 rounded-md py-2 w-full'>
                <h2 className='text-center'>E-posta veya Telefon ile kaydolun</h2>
              </div>
              <h2 className='text-center text-white py-2'>veya ile devam et</h2>
              <div className='grid grid-cols-2 gap-4'>
              <div className='flex justify-around items-center border py-2  rounded-md'>
                <Image
                className="  w-6 object-contain "
                src="/images/apple-icon.png"
                width='1200'
                height='800'
                alt="CEO"/>
                <h2 className='text-white'>Apple</h2>
               </div>
       
       
               <div className='flex justify-around items-center border py-2  rounded-md'>
                <Image
                className="  w-6 object-contain "
                src="/images/google-icon.png"
                width='1200'
                height='800'
                alt="CEO"/>
                <h2 className='text-white'>Google</h2>

               </div>

              </div>

          </div>
              {/* ................/signin........................... */}



          <div className='w-1/2 sm:w-full'>
            <Image
              className="  w-full object-contain  
              opacity-100 sm:opacity-100"
              src="/images/binanceC.webp"
              width='1200'
              height='800'
              alt="CEO"/>
            
          </div>

          </div>

          {/* ..............................priceList........................... */}

      
       {/* .......................................................................... */}
          <div className='border overflow-x-scroll  bg-[#000000af] border-gray-800 rounded-t-lg mx-16 md:mx-10 sm:mx-2'>
            <h2 className='text-gray-200 py-4 text-2xl pl-4'>
            Popüler kripto para birimleri
                </h2>
         
            <Layout>
          <div className='coin_app'>
          <SearchBar type='text' placeholder='Search' onChange={handleChange} />
          <CoinList filteredCoins={allCoins} />
          </div>
          </Layout>
       
         </div>
          {/* ............................../priceList........................... */}
          



            <ChartSection />


            <div className='flex items-center px-[5%] md:flex-col w-full justify-around '>
              <div className='w-1/2 md:w-full'>
                <h2 className='text-[#0c80ad]  text-3xl'> Kendi Kriptonuzu Oluşturun</h2>
                <p className='text-gray-400 text-xl pr-[10%] py-6'>
                OnlineCEO topluluğu, belirtecinizi, Teknik İncelemenizi ve web uygulamanızı, doğrulanmış bir akıllı sözleşmeyle istediğiniz herhangi bir blok zincirinde sıfırdan oluşturur ve başlamaya hazır takas platformlarında konuşlandırın.               </p>
               <Link href="/contactUs">
                      <div className='flex w-1/2 justify-around border  rounded-md items-center'>
                        <h1 className='text-gray-400 my-2 px-5 py-2 
                        mr-5'>Bize Ulaşın</h1>
                        <BsArrowRight className='text-white text-2xl animate-pulse'/>

                      </div>
              </Link>
              </div>

              <div className='w-1/2 md:w-full'>
                <Image
                className="  w-full object-contain  max-h-screen p-[10%] "
              
                src="/images/portfolio-section.webp"
                width='1200'
                height='800'
                alt="CEO"/>

              </div>


            </div>

            </div>
        </div>
    </div>
  )
}

export default crypto


export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  };
};