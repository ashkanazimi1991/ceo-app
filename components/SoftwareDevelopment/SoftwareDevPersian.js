import React ,{useState}from 'react';
import Link from 'next/link'
// import { useTypewriter } from 'react-simple-typewriter'
import Acordian from '../Acordion/Acordion'
import SliderMain from '../SliderMain/SliderMain'
import dynamic from "next/dynamic";


const Slider2 = dynamic(() => import('../cardslider/cardSlider2/Slider2'))



export default function SoftwareDevPersian() {
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
      title:"پلتفرم های کارآفرینی",
      desc:"اگر ایده ای در ذهن دارید که می خواهید به دنیا ارائه دهید، به ما بپیوندید. هر ایده استارتاپی برای مدیریت کسب و کار یا خدمات خود به پلتفرم خاص خود نیاز دارد. ما بر اساس نیازهای دقیق شما با فریمورک ها و زبان های برنامه نویسی برتر دنیا پلتفرم شما را طراحی و اجرا میکنیم",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/galleryP"
    },
    {
      id:'2',
      img: '/images/cat.png',
      title:"پلتفرم ها فروشگاهی ",
      desc:"فروشگاه‌های آنلاین با مقیاس بالا که برای هزاران یا میلیون‌ها کاربر توسعه داده می شوند، با ویژگی های از قبیل رابط کاربری و تجربه کاری بی‌نقص با ارائه های روز دنیا مانند مشاهده سه بعدی محصولات, واقعیت افزوده و داشبورد های تحلیلی توسط زبان‌های برنامه‌نویسی  برتر دنیا پایتون و جاوا اسکریپت ، با این هدف که مدیران عامل بتوانند پلتفرم‌های سریع و ایمن با ویژگی‌های خاص خود را داشته باشند. و پلتفرم برای همیشه امکان توسعه داشته باشد "  ,
      alt:"online ceo",     
      btnLable:"اطلاعات بیشتر",
      btnlink:"/shopP"
    },
    {
      id:'3',
      img: '/images/fas1t.png',
      title:"پلتفرم های آموزش هوشمند  ",
      desc:"پلتفرم های سریع و ایمن برای آموزش در زمینه های مختلف با ویژگی هایی مانند واترمارک و کپی رایت با امنیت بالا برای اطلاعات معلمان، چت روم اختصاصی موسسه، نمودار کارایی، نمودار مهارت، برنامه های کلاسی و امتحانی , کلاس درس سه بعدی، تخته تدریس آنلاین، فروشگاه موسسه، داشبوردهای اختصاصی و حرفه ای برای معلم، دانش آموز و مدیر همه در یک پلتفرم",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/galleryP"
    },
    {
      id:'4',
      img: '/images/3.png',
      title:"پلتفرم های پزشکی و سلامتی",
      desc:"پلتفرم های یکپارچه و اختصاصی کلینک ها , بیمارستان ها , پزشکان و خدمات سلامتی و درمانی برای ارتباط سریع و آسان بیمار و پزشک با امکاناتی چون ویزیت های آنلاین , سیستم نوبت دهی هوشمند , پرونده جامع بیمارن , ارئه خدمات درمانی و سلامتی در محل و آیتم های اختصاصی دیگر",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/drappPersian"
    },
    {
      id:'5',
      img: '/images/fibex2.png',
      title:"پلتفرم های بلاک چینی و رمز ارز ",
      desc:"طراحی و برنامه نویسی پلتفرم های یک پارچه صرافی های رمزارز در فریم ورک ریکت (همانند بایننس) به همراه تمامی چارت های معامله گری برای خرید, فروش و نگهداری رمز ارز, ساخت اپلیکیشن های اندروید و ای او اس صرافی , کیف پول و تولید رمز ارز در بلاک چین اتریوم و سایر بلاک چینها ",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/crypto"
    },
    {
      id:'6',
      img: '/images/company.png',
      title:"پلتفرم های چند منظوره شرکتی",
      desc:"طراحی و اجرا پلتفرم های یکپارچه برای معرفی شرکت و فروش محصولات و خدمات بصورت حرفه ای و اختصاصی در بستر سریع ترین فریمورک های جهان برای تمام دستگاه ها الکترونیکی و وب با داشبوردهای مدیریتی مطابق با نیاز شرکت شما",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/galleryP"
    },
    {
      id:'7',
      img: '/images/food.png',
      title:"پلتفرم های خدماتی ",
      desc:"ارائه پلتفرم های خدماتی بصورت مقیاس پذیر با امکاناتی از قبیل نقشه های جغرافیایی و مکان یابی های آنلاین برای سرویس های در محل , فروش های چند مرحله ای و محاسبه هوشمند قیمت ها, داشبوردهای مدیریتی اختصاصی با امکان بارگذاری در مارکت های محبوب جهان",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/galleryP"
    },
    {
      id:'8',
      img: '/images/robotic.png',
      title:"پلتفرم های رباتیک و اتوماسیون",
      desc:"برنامه نویسی صفر تا صد پلتفرم های کنترل و مدیریت بازوهای رباتیک و سایر اتوماسیون ها و دستگاه های رباتیک با سریعترین و منعطف ترین زبان های برنامه نویسی با رابط کاربری آسان و دقیق برای سخت افزارهای داخلی ربات و نرم افزارهای کنترلی و مدیریتی سمت کاربر",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/galleryP"
    },
    {
      id:'9',
      img: '/images/iot.png',
      title:"پلتفرم های  اینترنت اشیا ",
      desc:"طراحی و برنامه نویسی پلتفرم های اینترنت اشیا برای مزارع صنعتی و مجموعه های شخصی با هدف کنترل و مدیریت آنلاین فاکتورهای مدنظر از قبیل مشاهده اطلاعات سنسورها , کنترل سیستم های الکترونیکی, مشاهده خروجی ماشین آلات یا اپراتورها و .... همه در یک بستر یکپارچه با داشبورد مدیریتی اختصاصی با امکاناتی از قبیل گزارش گیری لحظه به لحظه بر روی نمودارهای شماتیک",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/iot"
    },
    {
      id:'10',
      img: '/images/chair.png',
      title:"پلتفرم های  واقعیت مجازی و سه بعدی ",
      desc:"طراحی و اجرا  پلتفرم های فروشگاهی و خدماتی با ارائه های متفاوت از قبیل واقعیت مجازی و مشاهده ها سه بعدی و تورهای مجازی با هدف تسهیل و دقت خرید بالاتر در مجموعه مدیریت آنلاین برای کارفرماهای محترم در دسترس است",
      alt:"online ceo",
      btnLable:"اطلاعات بیشتر",
      btnlink:"/galleryP"
    }
    

  ]







  return (
    <div className='min-h-screen flex flex-col w-full'>
{/* right............................... */}
  
<div className='flex flex-col justify-between   container w-full 
        md:w-full bg-[#000000b4] '>

  <Link href="/galleryP">
   <div className='bg-[#0f1a20f6] items-center flex flex-row-reverse w-full border-y-2 justify-around'>
      
             <h1 className= 'py-4  text-[#4ca8cc] text-center text-2xl sm:text-sm whitespace-nowrap px-2'>
              توسعه پلتفرم
            </h1>
           

           <div className='grid  grid-cols-3  w-3/6  '>
            <h1 className= ' text-white text-center sm:text-sm px-4  whitespace-nowrap'> IOS</h1>
            <h1 className= ' text-white text-center sm:text-sm px-4 whitespace-nowrap'> اندروید </h1>
            <h1 className= ' text-white text-center sm:text-sm px-4 whitespace-nowrap '> تحت وب</h1>
          </div>
          </div>
  </Link>


         

          <div className='flex pt-4 flex-col min-h-[450px] bg-[#000000a8] justify-center'>
            <p className='text-gray-400 text-center py-6'> رابط های کاربری تحت وب و موبایل اختصاصی, بر پایه جاوا اسکریپت و استاندارد های جهانی </p>
            <Slider2   
            img1='/images/1.png' img2='/images/cat.png' 
            img3='/images/3.png' img4='/images/fibex2.png'
             img5='/images/5.png' img6='/images/robotic.png'
          title1='Startup Ideas' title2='Large-scale Shops' title3='Healthcare and Lifestyle'
           title4='Blockchain and Crypto' title5='Service Base Platforms' title6='Robotic and IoT' 
          />


          {/* .................................................slider................................... */}
          <p className='text-gray-400 text-center py-6'> دادکاوی لایو بخش های مدیریتی در داشبوردهای جامع و اختصاصی  با زبان برنامه نویسی پایتون </p>

              <SliderMain/>
        
          
          </div>

       
{/* ........................................ */}
       
{/* .............................................. */}

      
       </div>

                
    {/* acordion................................................. */}     
    <div className="w-full md:w-full bg-[#000000c5]">
            <div className='flex justify-around w-full py-6  flex-row-reverse'>
                <h1 className='text-right w-1/2  text-gray-400   text-xl md:text-lg '>  
                  تجربه های ما    </h1>
                <Link href="/whyP">       
                <h2 className='animate-pulse  text-sm text-blue-400 border-t-2 border-blue-400 py-2 px-4 rounded-md   md:text-lg text-center'>
                  چرایی همکاری با ما ؟
                </h2>
                </Link>

            </div>

            <div className='overflow-y-auto px-[10%] sm:px-0 max-h-[90%] md:max-h-full md:overflow-hidden  scrollbar-hide '>
             <section  className="group flex justify-center border-r-4  p-3 ">
                      <div className="flex flex-col items-center  justify-center   cursor-pointer">
                      {acodionData.map((data,id) => {
                        return <Acordian key={id} open={id === open} title={data.title} 
                        desc={data.desc} img={data.img} alt={data.alt} btnlink={data.btnlink} btnLable={data.btnLable}  toggle={ () => toggle(id)}  />;
                      } )}              
                    </div>
            
              </section>
            </div>
       </div>

      </div> 
  )
}
