import React ,{useState}from 'react';
import Link from 'next/link';

import dynamic from "next/dynamic";

const Slider2 = dynamic(() => import('../cardslider/cardSlider2/Slider2'))
const AcordionT = dynamic(() => import('../Acordion/AcordianT'))





// import { useTypewriter } from 'react-simple-typewriter'


export default function SoftwareDevTurkish() {

  const [open, setOpen ] = useState(false);
  const toggle = ( id) => {
    if(open === id) {
      return setOpen(null)
    }
    setOpen(id)
  }
  
  const acodionData =[
    {
      id:'1',
      img: '/images/ss.png',
      title:"Başlangıç Platformları",
      desc:" Aklınızda dünyaya sunmak istediğiniz bir şey varsa bize katılın. Herhangi bir başlangıç fikri, işi veya hizmetleri yürütmek için kendi platformuna ihtiyaç duyar. dünyanın En İyi çerçeveleri ve programlama dilleri ile tam gereksinimlerinize göre bununla ilgileniriz.",
      alt:"online ceo",
    },
    {
      id:'2',
      img: '/images/cat.png',
      title:"Çevrimiçi Mağazalar",
      desc:"CEOlar kendi özellikleri ve profesyonel yönetici panoları ile hızlı ve güvenli platformlara sahip olabilir amacıyla, dünyanın en iyi programlama dilleri olan python ve JavaScript tarafından mükemmel UI ve UX ile binlerce veya milyonlarca kullanıcı için geliştirilmiş yüksek ölçekli çevrimiçi mağazalar ve sonsuza kadar büyümek",
      alt:"online ceo",     
    },
    {
      id:'3',
      img: '/images/fas1t.png',
      title:"Akıllı Eğitim Platformları",
      desc:"Öğretmenler için yüksek güvenlikli filigran ve telif hakkı, enstitünün kendi sohbet odası, verimlilik tablosu, beceri tablosu, 3 boyutlu sınıf, çevrimiçi öğretim panosu, Mağazalar, öğretmen, öğrenci ve yönetici profesyoneli gibi özelliklerle farklı alanlarda eğitim için hızlı ve güvenli platformlar gösterge paneli vb. hepsi tek bir platformda",
      alt:"online ceo",
    },
    {
      id:'4',
      img: '/images/drapp.png',
      title:"Sağlık Platformları",
      desc:"Online ziyaret, akıllı randevu sistemi, kapsamlı hasta dosyası, medikal ve sağlık hizmetlerinin sunulması gibi olanaklarla hasta ve doktor arasında hızlı ve kolay iletişim için klinikler, hastaneler, doktorlar ve sağlık ve tedavi hizmetleri için entegre ve özel platformlar. hasta konumu ve Diğer Özellikler",
      alt:"online ceo",
    },
    {
      id:'5',
      img: '/images/fibex2.png',
      title:"Blockchain ve Kripto platformları",
      desc:"React çerçevesindeki (Binance) kripto para borsası platformlarının tasarlanması ve programlanması, kripto para birimini satın almak, satmak ve sürdürmek, borsa, cüzdan ve Ethereum blok zincirinde ve diğer blok zincirlerinde para birimi oluşturmak için Android ve iOS uygulamaları oluşturmak için tüm ticaret çizelgelerini içerir.",
      alt:"online ceo",
    },
    {
      id:'6',
      img: '/images/company.png',
      title:"Şirket ve Fabrika Platformları",
      desc:" Şirketinizin ihtiyaçlarına göre yönetim panoları ile tüm elektronik cihazlar ve web için dünyanın en hızlı çerçeveleri bazında şirket tanıtımı ve ürün ve hizmetlerin profesyonelce ve özel olarak satılması için entegre platformlar tasarlamak ve uygulamak.",
      alt:"online ceo",
    },
    {
      id:'7',
      img: '/images/food.png',
      title:"Hizmet Tabanlı Platformlar",
      desc:"Yerinde hizmetler için coğrafi haritalar ve çevrimiçi konumlar, çok aşamalı satışlar, akıllı fiyat hesaplama ve dünya çapındaki popüler pazarlara yükleme olasılığı olan özel yönetim panoları gibi olanaklarla ölçeklenebilir hizmet platformları sağlıyoruz.",
      alt:"online ceo",
    },
    {
      id:'8',
      img: '/images/robotic.png',
      title:" Robotik Otomasyon Platformları",
      desc:"dahili robot donanımı ve kullanıcı tarafı kontrol ve yönetim uygulamaları için kolay ve doğru bir kullanıcı arayüzü ile hızlı ve esnek programlama dilleri ile robotik kol ve robotik otomasyon için sıfırdan programlama.",
      alt:"online ceo",
    },
    {
      id:'9',
      img: '/images/iot.png',
      title:"IoT Platformları",
      desc:"Sensörlerden gelen bilgilerin görüntülenmesi, elektronik sistemlerin kontrolü, makinelerin veya operatörlerin çıktılarının görüntülenmesi vb. platformu. Şematik diyagramlarda gerçek zamanlı raporlama gibi özelliklere sahip özel bir yönetim panosu ile",
      alt:"online ceo",
    },
    {
      id:'10',
      img: '/images/chair.png',
      title:"Sanal Gerçeklik ve 3D ",
      desc:"Sanal gerçeklik ve 3D gözlemler gibi farklı sunumlarla mağaza ve hizmet platformlarının tasarımı ve uygulaması, hizmetleri kolaylaştırmak ve daha yüksek satın alma doğruluğu için sanal turlar tüm CEO'ların kullanımına açıktır.",
      alt:"online ceo",
    }
    
  ]


  // const [text] = useTypewriter({
  //   words: ['Geliştiriyoruz','Büyük Ölçekli', 'Son inşa', 'Hızlı ve Güvenli', 'Platformlar'],
  //   loop: 0
  // })


  return (
    <div className='min-h-screen flex flex-row md:flex-col max-h-screen md:max-h-full  sm:flex-col w-full'>
        {/* left............................... */}
        <div className='flex flex-col justify-between container w-2/6 
        md:w-full bg-[#000000b4] '>     
          <h1 className= 'pt-16 text-white text-center text-2xl py-2 '>
            Yazılım geliştirme
          </h1>
            
           
          {/* ................................................................ */}
          <div className='flex h-3/4 min-h-[450px] flex-col justify-center'>
            <Slider2   
           img1='/images/1.png' img2='/images/cat.png' 
           img3='/images/3.png' img4='/images/fibex2.png'
            img5='/images/5.png' img6='/images/robotic.png'
          title1='Başlangıç Fikirleri' title2='Büyük ölçekli çevrimiçi Mağazalar'
           title3='Sağlık ve Yaşam Tarzı'
           title4='Blockchain ve Kripto' title5='Hizmet Tabanlı Platformlar'
            title6='Robotik ve IoT' 
          />
          </div>

          {/* .......................................................................... */}
        <div>
          <Link href="/galleryT">
          <h1 className='cursor-pointer text-center py-4 bg-[#0f1a20f6] text-white border-y-2'>
            Projelerde Keşfet
            </h1>
          </Link>
        </div>

          <div className='grid py-4 grid-cols-4 divide-x'>
            <h1 className= ' text-white text-center '>
              Android
            </h1>
            <h1 className= ' text-white text-center '>
              IOS
            </h1>
            <h1 className= ' text-white text-center '>
              Windows
            </h1>           
            <h1 className= ' text-white text-center '>
              Web
            </h1>
          </div>

       </div>
   {/* right............................. */}
       {/* acordion................................................. */}     
       <div className="w-4/6 md:w-full bg-[#000000c5]">
            <div className='flex justify-around w-full py-6 flex-row'>
                <h1 className='text-left w-1/2  text-gray-400 tracking-widest  text-xl md:text-lg '>  
                  {/* <span>{text}</span> */}
                  Deneyimlerimiz
                </h1>
                <Link href="/whyT">        
                <h2 className='animate-pulse  text-xl text-white  md:text-lg text-center'>
                  Neden biz ?
                </h2>
                </Link>

            </div>

            <div className='overflow-y-auto  max-h-[90%] md:max-h-full md:overflow-hidden  scrollbar-hide '>
             <section  className="group flex justify-center border-r-4  p-3 ">
                      <div className="flex flex-col items-center  justify-center px-[5%]  cursor-pointer">
                      {acodionData.map((data,id) => {
                        return <AcordionT key={id} open={id === open} title={data.title} 
                        desc={data.desc} img={data.img} alt={data.alt} toggle={ () => toggle(id)}  />;
                      } )}              
                    </div>
            
              </section>
            </div>
       </div>
          </div>
      



 
                  
  )
}
