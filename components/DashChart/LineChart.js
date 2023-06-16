import React from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});


class LineChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [
              {
                name: "خدمات درمانی",
                data: [600, 629, 733, 436, 232, 432, 533, 600, 680,700,725,800]
              },
              {
                name: " فروشگاه و داروخانه ",
                data: [800, 829, 733, 936, 432, 532, 733, 800, 840,700,925,800]
              }
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                  enabled: true,
                  color: '#000',
                  top: 18,
                  left: 7,
                  blur: 10,
                  opacity: 0.2
                },
                toolbar: {
                  show: false
                }
              },
              colors: ['#77B6EA', '#00E396'],
              dataLabels: {
                enabled: true,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: '',
                align: 'left'
              },
              grid: {
                borderColor: '#e7e7e7',
                row: {
                  colors: ['', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              markers: {
                size: 1
              },
              xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذز', 'دی', 'بهمن' , 'اسفند'],
                // title: {
                //   text: 'Month'
                // }
              },
              yaxis: {
                // title: {
                //   text: 'Temperature'
                // },
                // min: 5,
                // max: 40
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
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

export default LineChart