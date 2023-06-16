import React from 'react'
import Image from 'next/image';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


    const SliderDrApp = () => {
        //Array of Images
        const images = [
          
            "/images/pastor8.png",
            "/images/pastor10.png",
            "/images/pastor9.png",
            "/images/pastor7.png",
            "/images/pastor6.png",



            

            // "/images/shop02.jpg",
            



            
           
        ];
    
        const zoomInProperties = {
          // indicators: true,
          scale: 1.2,
          duration: 5000,
          arrows: true,
          transitionDuration: 500,
          infinite: true,
          autoplay:true,
          // pauseOnHover: true,
          // swipeToSlide: true,
          lazyLoad: true,
          initialSlide: 2,
        };


  return (
    
    <div className='max-h-screen'>
    <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center  ">
              <Image height="800" width="800" alt='oda'
                className="    object-contain    z-20 "
                src={each}
              />
          </div>
        ))}
      </Zoom>
    </div>

  
  )
}

export default SliderDrApp