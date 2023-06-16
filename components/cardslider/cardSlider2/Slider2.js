import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class Slider2 extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      initialSlide: 4,
      // fade: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      speed: 1000,
      lazyLoad: true,
      // adaptiveHeight: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className=" items-center container  overflow-hidden">
        <Slider {...settings}>
          <div >
              {/* <h1 className="text-[#60ece1] sm:text-sm py-3  opacity-0 hover:opacity-100 text-xl lg:text-lg text-center " >{this.props.title1} </h1> */}
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%]  object-contain  justify-center "
               src={this.props.img1} alt=" مدیریت آنلاین" />
            </div>
          </div>
         
          <div>
              {/* <h1 className="text-[#60ece1] sm:text-sm py-3 text-xl lg:text-lg text-center " >{this.props.title2}</h1> */}
            <div className="flex justify-center">
            <Image height='800' width='800' className=" w-[60%]   object-contain  justify-center   " src={this.props.img2} alt="رباتیک" />
            </div>
          </div>

          <div>
              {/* <h1 className="text-[#60ece1] sm:text-sm py-3 text-xl lg:text-lg  text-center " > {this.props.title3}</h1> */}
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%]  object-contain  justify-center  "
               src={this.props.img3} alt="اینترنت اشیا" />
            </div>
          </div>

          <div>
              {/* <h1 className="text-[#60ece1] text-xl sm:text-sm py-3 text-center pb-5" >{this.props.title4}</h1> */}
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%]  object-contain  justify-center  " src={this.props.img4} alt="شرکت برنامه نویسی" />
            </div>
          </div>

          
          <div>
              {/* <h1 className="text-[#60ece1] text-xl py-3 sm:text-sm lg:text-lg text-center " >{this.props.title5}</h1> */}
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%]  object-contain  justify-center  " src={this.props.img5} alt="برنامه نویسی" />
            </div>
          </div>

          <div>
              {/* <h1 className="text-[#60ece1] text-xl py-3 sm:text-sm lg:text-lg text-center " >{this.props.title6}</h1> */}
            <div className="flex justify-center">
              <Image height='800' width='800'  className="w-[60%]   object-contain  justify-center  " src={this.props.img6} alt="برنامه نویسی" />
            </div>
          </div>
         
         
         
        


        </Slider>
      </div>
    );
  }
}
