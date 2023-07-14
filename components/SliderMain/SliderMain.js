import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Area from '../Crypto/ChartTrade/Area';
import TradeCharts from '../Crypto/ChartTrade/TradeCharts';
import BoxH from '../Crypto/ChartTrade/BoxH';
import Column from '../DashChart/Column';
import Desend from '../DashChart/Desend';
import LineChartLike from '../Dr_admin/LineChartLike';
import Pibenfit from '../Dr_admin/Pibenfit';
import RadialVisit from '../Dr_admin/RadialVisit';
import PatientChart from '../Dr_admin/PatientChart';








import Accessibility from '../CChart/Accessibility';
import BestPractices from '../CChart/BestPractices';
import LineChart from '../DashChart/LineChart';







export default class SliderMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    const settings = {
      // autoplay:true,
      // infinite: true,
      // initialSlide: 4,

      // lazyLoad: true,

      responsive: [

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}

    return (
      <div className="flex justify-center items-center   w-full bg-[#000000a8] py-8">

      <div className="w-[80%]">
      
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
        
            <TradeCharts/>
        
            <div className="mt-[10%]">
            <Desend/>
            </div>
        
            <div className="mt-[10%]">
              <LineChartLike/>
            </div>

          <div className="mt-[10%]">
            <PatientChart/>
          </div>     

            <Area/>



          <div className="mt-[10%]">
           <LineChart/>
          </div>



       
        </Slider>
       
       
       
       
       
       
       
        <Slider
          asNavFor={this.state.nav1} {...settings}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
       
        >
          <div className="mt-[25%] " >
          <Accessibility/>
          <BestPractices/>
          </div>
            
            
          <div className="mt-[25%] " >         
           <BoxH/>
         </div>
        
          <div className="mt-[15%] ">
           <Pibenfit/> 
           <Pibenfit/> 

          </div>
         
          <div className="mt-[35%] ">
           <Column/> 
          </div>
        
          <div className="mt-[35%] ">
           <RadialVisit/> 
           <p className="text-gray-400 text-center">مقایسه های راندمان</p>
          </div>
     
        </Slider>
      </div>
      </div>
    );
  }
}