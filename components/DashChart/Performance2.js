import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Performance2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [76],
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
        labels: ['76 of 100'],
        fill:{
            colors:['#FEB019']
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




export default Performance2