import React from 'react'
import Image from 'next/image'

const RestaurantBody = () => {
  return (
    <div className='p-[5%]'>
      <div className='w-full  flex flex-col'>
        <h2 className=' w-full text-center  leading-normal  text-4xl font-bold text-gray-900 '>
          EXTRAORDINARY TASTE<br></br>AND EXPERIENCE
        </h2>
        <p className='leading-5 mt-8 w-full bg-green text-sm  text-center text-gray-900 '>continually productize plu-and-play strategic theme areas and accurate</p>
      </div>


{/* .........................Section 1....................... */}

    <div className='flex items-center md:flex-col  justify-center w-full text-xs px-12 space-x-4 py-20'>

    <div className=' bg-green- h-full md:w-full w-1/2 flex flex-col space-y-5'>
        <h3 className='w-full text-canter text-2xl leading-normal 
        font-bold text-gray-900'> WE MAKE SURE YOUR FOOD<br></br>ARRIVE-ON-TIME</h3>
        <p className='text-xl leading-7  text-gray-600  mt-4'>continually productize plug-and-play strategic them<br></br> areas abd accurate alignments.compelilngly incubate<br></br>out-of-the-box systems without interoperable sources.<br></br>assertively procrastinate just in time content. </p>
        <p className='bg-orange-500 w-1/4 md:w-1/3 text-center text-md font-bold p-3 rounded-2xl my-6'>SIGNUP</p>
    </div>
    <div className='w-1/2 md:w-full py-20'>

            <Image className='w-full object-contain rounded-3xl'
              width="600" height="600" alt='fooddish'
              src="/images/dl.jpg"/>
      
    </div>


    </div>

{/* ..............................Section 2......................... */}




<div className=' min-h-screen flex justify-center items-center px-[10%]'>
        
        <div className='grid  gap-16 grid-cols-2 md:grid-cols-1'>
          {/* 1.............. */}
            <div className='flex flex-col justify-center items-start space-y-5'>
                <p className='font-bold text-gray-800 text-2xl text-left
                w-full'>HICH QUAKITY FOOD <br></br>MATERIAL </p>           
               <p className='text-gray-800 pr-[10%]'>continually productize plug-and-play strategic theme areas and accurate alignaments.compellingly incubate out-of-the-box systems without interoperable sources.assertively procrastinate just in time content via fully researched bandwidth competently </p>
               <p className='bg-orange-500 w-1/4 md:w-1/3 text-center whitespace-nowrap p-2 rounded-3xl my-6'>READ MORE</p>
            </div>

            {/* 2................. */}
            <div>
              <Image className='w-full object-contain  scale-110 rounded-3xl    '
              width="600" height="600" alt='fooddish'
              src="/images/food4.jpg"/>
           </div>
            {/* 3............ */}
           <div>
             <Image className='w-full object-contain rounded-3xl  '
               width="600" height="600" alt='fooddish'
               src="/images/food1.jpg"/>
           </div>

           {/* 4.......................... */}
           <div className='flex flex-col justify-center items-start'>
              <p className='font-bold text-gray-800 text-2xl '> VARIOUS MENUS YOU CAN </p>
              <p className=' text-gray-800  '><br>
              </br>PICK'contiually productize plug-and-play strategig theme areas and accurate alignmanets.
               compellingly incubate out-of-the-box systems without interoperable source. assertively
              procrastinate just in time content via fully reseached bandwidth competently
              </p>
              <p className='bg-orange-500 w-1/4 text-center  whitespace-nowrap md:w-1/3  p-2 rounded-3xl text-md my-6'>READ MORE</p> 
           </div>
        </div>

    </div>

{/* .........................................Section 3 ...................................... */}


<div className=' pb-12 pt-28 px-[10%]'>
        <div className='flex flex-row-reverse md:flex-col-reverse w-full px-[10%]'>
            <div className='w-1/2 md:w-full flex justify-end items-end '>
             <p className='bg-orange-500 w-1/4 text-center md:w-full  p-2 whitespace-nowrap rounded-3xl  my-5'>see more</p>

            </div>

            <div className='w-1/2 md:w-full '>
            <h3 className=' text-left font-bold text-gray-800 text-3xl '>EXTRAOADINARY TASTE <br></br>AND EXPERIENCE'</h3>
            <p className='text-gray-800 leading-6 pt-6'>continually productize plug-and-play strategic theme ares and accurate</p>
        
            </div>
            {/* ................................................... */}
            
           
        </div>
   
       <div className=' flex  justify-center items-center w-full py-[10%] px-[10%]'>
        <div className='grid gap-6 grid-cols-3 md:grid-cols-1'>
        <div className='flex flex-col'>
       <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
       <Image className='w-full object-contain rounded-3xl     '
          width="600" height="600" alt='fooddish'
          src="/images/food6.png"/>
       </div>
          <p className='text-gray-800 font-bold text-lg py-7  text-center rounded-lg  '>Beef-potato </p>
          <p className='text-gray-800 leading-1'>continually productize plug-and-play <br></br>strategic theme areas and accurate .</p>

        </div>
{/* ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,2............................ */}
    <div className='flex flex-col'>
    <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
       <Image className='w-full object-contain rounded-full     '
          width="600" height="600" alt='fooddish'
          src="/images/food5.png"/>
       </div>
          <p className='text-gray-800 font-bold text-lg py-7  text-center rounded-lg  '>Gado-gado </p>
          <p className='text-gray-800 leading-1'>continually productize plug-and-play <br></br>strategic theme areas and accurate .</p>

        </div>
       
       <div className='flex flex-col'>
       <div className='bg-yellow-100 py-12 w-full rounded-2xl'>
         <Image className='w-full object-contain  '
          width="600" height="600" alt='fooddish'         
           src="/images/food7.png"/>
          
          </div>
          <p className='text-gray-800 font-bold text-lg py-7  text-center rounded-lg  '>piatos salad </p>
          <p className='text-gray-800 leading-1'>continually productize plug-and-play <br></br>strategic theme areas and accurate .</p>
       </div>
       </div>
       
    </div>

    </div>  


    {/* ...............................Section 4....................................... */}


    <div className=' flex flex-col   justify-center  items-center w-full py-[10%] px-[10%] '>
      <p className='text-gray-800 text-4xl font-bold leading-4 md:leading-10'>MEET OUR CHEFS</p>
      <p className='text-gray-800 text-lg py-[6%]'>cantinually productize plug-and-play strategic theme areas accurate</p>
         <div className='grid gap-6 grid-cols-4 md:grid-cols-2'>

          

          <div className='flex flex-col justify-center items-center  '>
            <Image className='w-full object-cover h-96 rounded-3xl     '
          width="600" height="600" alt='chef'
          src="/images/chef.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>Rebecca</p>
          </div> 
          

          <div className='flex flex-col justify-center items-center'>
            <Image className='w-full object-cover h-96 rounded-3xl     '
          width="600" height="600" alt='chef'
          src="/images/chef7.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>Souma</p>

          </div>
        

          <div className='flex flex-col justify-center items-center'>
            <Image className='w-full object-cover h-96 rounded-3xl     '
          width="600" height="600" alt='chef'
          src="/images/chef3.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>Galibis</p>
          
          </div>
       

          <div  className='flex flex-col justify-center items-center'>
            <Image className='w-full object-cover h-96 bg-top rounded-3xl     '
          width="600" height="800" alt='chef'
          src="/images/chef12.jpg"/>
          <p className='text-gray-800 py-5 font-bold text-lg'>ken shin</p>
          
          </div>

          
         
          </div>
          <p className='bg-orange-500 w-28 text-center  py-2 rounded-3xl  my-5'>see more</p>

          
     </div>  

{/* ...........................Section 5 ............................. */}

<div className='pb-16'>
  
  <div className=' relative inline-block py-10 w-full px-[10%]'>
  <Image className='w-full object-cover h-96 rounded-3xl'
    width="600" height="600" alt='chef'
    src="/images/food3.jpg"/>

  <div className='z-20 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-[#00000070] w-1/2 h-1/2 px-4 py-2 rounded'>
                <div className='flex flex-col'>
                    <p className=' text-center text-gray-100 text-4xl font-bold leading-10 md:text-lg'>JOIN US AND GET <br></br>DISCONT UP TO 50 %</p>
                  <div className=' flex just items-center  space-x-2 py-6 md:flex-col md:space-y-6'>
                    <p className='bg-white  py-2 w-5/6 md:w-full  rounded-full  text-gray-400 text-center titems-center'>your email here</p>
                    <p className='bg-yellow-400 w-1/6 rounded-3xl md:w-full py-2 text-center items-center'>sign in</p>
                  </div>
                  </div> 
    </div>

  </div>

    </div>

{/* .............................................End......................... */}

    </div>
 
  )
}
export default RestaurantBody
