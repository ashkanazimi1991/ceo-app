import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});


export default class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "کل تراکنش های دریافتی",
          data: [50, 40, 55, 35, 70, 40, 55.9, 60, 84,81,90,95],
        },
        {
          name: "سود",
          data: [15, 19, 14.2, 18, 19, 19, 18, 17, 20,28,24,35],
        },
        {
          name: "هزینه",
          data: [7, 8, 10, 11, 12, 13, 13, 11, 12,14,11,12],
        },
        

      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        theme:{
          mode:''
        },
        xaxis: {
          categories: [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",

          ],
        },
        yaxis: {
          // title: {
          //   text: "میلیون",
          // },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "میلیون " + val + " ";
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div style={{width:'100%'}} id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          width={'100%'}
        />
      </div>
    );
  }
}
