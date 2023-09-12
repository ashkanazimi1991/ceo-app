import React, { useCallback } from "react";

/**
 * @see https://github.com/nerdyman/react-compare-slider
 */

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";

/** In `portrait` mode */
export const Portrait = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[CustomHandle]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      itemOne={
        <ReactCompareSliderImage
          src="/images/brainx04.jpg"
          style={{
            objectFit: 'cover',
          }}
          alt="نرم افزار پاستور"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/brainx03.jpg"
         alt="استارت اپ پاستور"
         style={{
          objectFit: 'cover',
        }}
        />
      }
      onPositionChange={handlePositionChange}
      portrait
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
       
        ...style
      }}
    />
  );
};


/** With Customised `handle`. */
export const CustomHandle = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: "white",
            border: 0,
            color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/brainx01.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/brainx02.jpg"

          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        // ...style
      }}
    />
  );
};



export const CustomHandle2 = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: "white",
            border: 0,
                        color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/brainxray10.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/brainxray11.jpg"

          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        
        // ...style
      }}
    />
  );
};

export const BA_BrainXray = () => (
  <div>


    <div flex justify-center w-full item-center >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-2">
         
           <div className="md:col-span-2 bg-gradient-to-b from-sky-400 to-sky-200 p-1">
             <Portrait position={50} />
           </div>
         
           <div className="  bg-gradient-to-b from-sky-400 to-sky-200 p-1 col-span-2">
             <CustomHandle  position={50}/>
           </div>
         
           <div className="bg-gradient-to-b from-sky-400 to-sky-200 p-1 col-span-2">
             <CustomHandle2 position={50}/>
           </div>
         
           <div className="bg-gradient-to-b from-sky-400 to-sky-200 p-1 md:col-span-2">
             <Portrait position={50} />
           </div>

        </div>
    </div>




    {/* <Portrait />
    <CustomHandle position={50} /> */}
  </div>
);
export default BA_BrainXray;