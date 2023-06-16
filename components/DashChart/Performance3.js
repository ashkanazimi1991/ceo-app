import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Performance3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [9],
      options: {
        chart: {
          height: 150,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['71 of 800'],
        fill:{
            colors:['#ff0000']
          }
      },
    
    
    };
  }



  render() {
    return (
      


<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series}
 type="radialBar" height={200} />
</div>



    );
  }
}




export default Performance3