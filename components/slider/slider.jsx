import React from 'react'
import Image from 'next/image';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


    const Slider = () => {
        //Array of Images
        const images = [
          
            // "/images/shop01p.png",
            "/images/shop02p.png",
            "/images/shop03p.png ",
            "/images/shop5p.png ",
            // "/images/shop5.jpg ",
            "/images/shop06.png ",
            "/images/shop07p.png ",
            // "/images/shop10p.png ",
            "/images/shop08p.png ",



            
           
        ];
    
        const zoomInProperties = {
          indicators: true,
          scale: 1.2,
          duration: 5000,
          arrows: true,
          transitionDuration: 500,
          infinite: true,
          autoplay:true,
          // pauseOnHover: true,
          swipeToSlide: true,
          lazyLoad: true,
          initialSlide: 3,
        };


  return (
    
    <div className='h-1/2'>
    <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center  ">
              <Image height="600" width="800" alt='oda'
                className=" px-10  object-contain    z-20 "
                src={each}
              />
          </div>
        ))}
      </Zoom>
    </div>

  
  )
}

export default Slider