import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class Ventilation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "CO2",
            data: [.5, 1, 1.5, 1.2, 1.04, .6, 1, 1.2, 1.6, 1.8, 1.5, 1.0]
          },
          {
            name: "Temperature",
            data: [22, 20, 24, 23, 23, 18, 20, 24, 22, 23, 22, 25]
          },
          {
            name: 'H2O',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5]
          },
          title: {
            text: 'Page Statistics',
            align: 'left'
          },
          legend: {
            tooltipHoverFormatter: function(val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['01 00', '02 00', '03 00', '04 00', '05 00', '06 00', '07 00', '08 00', '09 00',
              '10 00', '11 00', '12 00'
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + "(%)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + "  (C)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + "(%)";
                  }
                }
              }
            ]
          },
          grid: {
            borderColor: '#f1f1f1',
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




export default Ventilation;