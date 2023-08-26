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
          src="/images/teethA.jpg"
        //   style={{ filter: "grayscale(1)" }}
          alt="onlineceo"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/teethB.jpg"
         alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      portrait
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        // ...style
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
        src="/images/bf01.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/bf02.jpg"

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

export const BA_Slider = () => (
  <div>
    <Portrait />
    <CustomHandle position={50} />
  </div>
);
export default BA_Slider