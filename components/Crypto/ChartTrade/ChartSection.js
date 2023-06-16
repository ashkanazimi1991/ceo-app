import React from "react";
// import ComboChart from "./ComboChart";
import TradeChart from "./TradeCharts";
import Box from "./Box";
import BoxH from "./BoxH";
import Area from "./Area";
import RSI from "./RSI"

export default function ChartSection() {
  return (
    <div className="flex flex-col mt-10">   
      <TradeChart/>
      {/* <ComboChart/> */}
      <div className="flex w-full sm:flex-col  justify-center">
        <div className="w-1/2 sm:w-full">
          <Box/>
        </div>

        <div className="w-1/2 sm:w-full">
          <BoxH/>
        </div>
      </div>
      <Area/>
      {/* <RSI/> */}
    </div>
   
  );
}
