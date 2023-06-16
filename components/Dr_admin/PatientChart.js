import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class PatientChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [
            {
              name: 'بیماران سابق',
              group: '',
              data: [13, 16, 12, 16, 18, 22]
            },
            {
              name: 'بیماران جدید',
              group: '',
              data: [3, 4, 10, 1, 11, 0]
            }
      
          ],
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
            },
            stroke: {
              width: 1,
              colors: ['#fff']
            },
            dataLabels: {
              // formatter: (val) => {
              //   return val 
              // }
            },
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            xaxis: {
              categories: [
                'شنبه',
                'یک شنبه',
                'دوشنبه',
                'سه شنبه',
                'چهارشنبه',
                'پنج شنبه'
              ]
            },
            fill: {
              opacity: 1
            },
            colors: ['#116D6E', '#16FF00', '#73BBC9', '#00E396'],
            yaxis: {
              labels: {
                // formatter: (val) => {
                //   return val / 1000 + 'K'
                // }
              }
            },
            legend: {
              position: 'top',
              horizontalAlign: 'left'
            }
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>
  


        );
      }
    }


export default PatientChart;