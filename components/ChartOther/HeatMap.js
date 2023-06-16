import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class HeatMap extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
          {
            name: 'Desktops',
            data: [
              {
                x: 'Sensor 1',
                y: 20
              },
              {
                x: 'Sensor 2',
                y: 20
              },
              {
                x: 'Sensor 3',
                y: 21
              }
            ]
          },
          {
            name: 'Mobile',
            data: [
              {
                x: 'Sensor 4',
                y: 22 
              },
              {
                x: 'Sensor 5',
                y: 22
              },
              {
                x: 'Sensor 6',
                y: 24
              },
              {
                x: 'Sensor 7',
                y: 20
              },
              {
                x: 'Sensor 8',
                y: 22
              },
              {
                x: 'Sensor 9',
                y: 24
              }
            ]
          }
        ],
        options: {
          legend: {
            show: false
          },
          chart: {
            height: 350,
            type: 'treemap'
          },
          title: {
            text: '',
            align: 'center'
          }
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="treemap" height={350} />
</div>



      );
    }
  }



export default HeatMap;