import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class Pibenfit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [44000000, 55000000, 41000000, 17000000, 15000000],
      
          options: {
            chart: {
              width: 380,
              type: 'donut',
            },
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 270
              }
            },
            dataLabels: {
              enabled: true
            },
            fill: {
              type: 'color',
            },
            legend: {
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            title: {
              text: ''
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 300
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
</div>
  


        );
      }
    }

export default Pibenfit;