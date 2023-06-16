import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Performance4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [2],
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
        labels: ['10 of 600'],
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




export default Performance4