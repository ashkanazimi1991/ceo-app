import React from 'react'

const test = () => {
  return (
    <div>
      
      <div className='fixed top-10 left-10 rounded-full bg-black p-6  w-7'>
        <p className='text-white'>s</p>
      </div>

      <div className='fixed top-10 right-10 rounded-full bg-black p-6  w-7'>
        <p className='text-white'>s</p>
      </div>
    
    
     <div className='flex w-full pt-72 bg-blue-400  justify-around items-center '>
      <div className='bg-red-400 w-28 py-24 px-24 rounded-xl '>1</div>
      <div className='bg-green-400 w-28'>2</div>
      <div className='bg-yellow-400 w-28'>3</div>
     </div>
     {/* ..................................... */}

     <div className=' flex-col justify-center h-screen px-24 space-y-10  py-10 items-center bg-gray-400'>
      <div className='bg-red-100 w-full '>1</div>
      <div className='bg-red-400 w-full'>2</div>
      <div className='bg-red-800 w-full grid grid-cols-4 gap-4 p-4'>
        <p className='p-4 bg-green-400 col-span-2'>2</p>
        <p className='p-4 bg-green-400'>2</p>
        <p className='p-4 bg-green-400'>2</p>
        <p className='p-4 bg-green-400'>2</p>
        <p className='p-4 bg-green-400'>2</p>
        <p className='p-4 bg-green-400'>2</p>
        <p className='p-4 bg-green-400'>2</p>
        <p className='p-4 bg-green-400'>2</p>
   
      </div>
     </div>





    </div>
  )
}

export default test