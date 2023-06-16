import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class RadialVisit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [70,30],
          options: {
            chart: {
              height: 250,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: '',
                    formatter: function (w) {
                      // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                      return 
                    }
                  }
                }
              }
            },
            labels: [ 'ویزیت های حضوری','ویزیت های آنلاین '],
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={250} />
</div>
  


        );
      }
  


  }

export default RadialVisit;