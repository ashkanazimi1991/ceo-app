import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from 'next/image';
import Slider from "react-slick";

export default class SliderOne extends Component {

  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 6,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className="container w-full overflow-hidden">
        <Slider {...settings}>
          <div >
            <div className="flex">
              <Image height='50' width='50' className="flex w-24  justify-center  p-4 " src={this.props.img1} alt=" مدیریت آنلاین" />
            </div>
          
          </div>
         
          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img2} alt="رباتیک" />
            </div>
             
          </div>

          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img3} alt="اینترنت اشیا" />
            </div>
         
          </div>

          <div>
            <div className="flex w-full justify-center">
            <Image height='50' width='50'  className="flex w-24 justify-center p-4  " src={this.props.img4} alt="شرکت برنامه نویسی" />
            </div>
             
          </div>

          
          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img5} alt="برنامه نویسی" />
            </div>
        
          </div>
         
         
          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img6} alt="online ceo" />
            </div>
             
          </div>


          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img7} alt="online ceo" />
            </div>

          </div>


          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img8} alt="online ceo" />
            </div>
             
          </div>

          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img9} alt="online ceo" />
            </div>
             
          </div>

          <div>
            <div className="flex">
            <Image height='50' width='50'  className="flex w-24 justify-center  p-4 " src={this.props.img10} alt="online ceo" />
            </div>
         
          </div>


        </Slider>
      </div>
    );
  }
}
