import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class DesendHeart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: '  وضعیت فعلی',
            data: [15.9, 14.9, 15.87, 14.8, 13.8, 11.8, 13.75, 12.35, 12.75 ]
          }, {
            name: 'وضعیت   نرمال',
            data: [12.7, 12.4, 12.8, 12.8, 12.78, 12.8, 12.75, 12.75, 12.75]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-10T00:00:00.000Z", "2018-09-11T01:30:00.000Z", "2018-09-12T02:30:00.000Z", "2018-09-13T03:30:00.000Z", "2018-09-14T04:30:00.000Z", "2018-09-15T05:30:00.000Z", "2018-09-16T06:30:00.000Z", "2018-09-17T06:30:00.000Z","2018-09-18T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
</div>
  


        );
      }
    }


export default DesendHeart;