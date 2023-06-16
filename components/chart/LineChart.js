import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class LineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'کل تراکنش ها',
          data: [40, 30, 10, 20,50, 70, 40, 90, 120, 70, 190, 200, 130, 210, 220, 220, 250, 270]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          forecastDataPoints: {
            count: 7
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
            labels: {
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              }
            }
          },
          title: {
            text: '',
            align: 'left',
            style: {
              fontSize: "6px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: [ '#ff0000'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          yaxis: {
            min: 0,
            max: 300
          }
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>



      );
    }
  }

export default LineChart;