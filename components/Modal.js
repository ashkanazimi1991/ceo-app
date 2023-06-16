import React from 'react'

export const Modal = ({isVisible,onclose, children}) => {
    if (!isVisible) return null;

    const handleClose =(e) => {
        if(e.target.id === 'wrapper') onclose();
    }
  return (

  
    <div className=' absolute min-w-[400px] sm:min-w-[200px] max-w-[600px] my-[5%] mx-[10%]   justify-center z-20  
       items-center' id="wrapper" onClick={handleClose}>
        <div className=' flex flex-col  justify-center items-center '>
              <button className='flex  justify-center  z-40 bg-white w-10 h-10 pt-1 rounded-full text-red-800
              text-2xl' 
              onClick={() => onclose()}>X</button>

          <div className='bg-[#0000002c]   rounded flex justify-center'>
              {children}
          </div>
        </div>

    </div>

   
  )
}

export default Modal
