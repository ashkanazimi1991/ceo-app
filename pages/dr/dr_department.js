import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Dr_Hero from '../../components/Dr/Dr_Hero';




const Header = dynamic(() => import('../../components/Dr/Header'))
const Body = dynamic(() => import('../../components/Dr/Body'))


export default function Home() {
  return (

   <div className='h-full flex flex-col'>
   
   <Header/>
   <Dr_Hero/>
   <Body/>
   <div className='z-10'>

   </div>

   </div>









        
   
  )
}
