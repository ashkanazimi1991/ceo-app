import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class SliderShop extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      initialSlide: 2,
      // fade: true,
      slidesToShow: 1,
      speed: 1000,
      lazyLoad: true,
      adaptiveHeight: true,
      pauseOnHover: true

    };
    return (
      <div className=" items-center container  overflow-hidden">
        <Slider {...settings}>
          <div >
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%] sm:w-[90%] object-contain  justify-center "
               src={this.props.img1} alt=" مدیریت آنلاین" />
            </div>
            {/* <h1 className="text-[#60ece1] sm:text-sm mb-5 text-xl lg:text-lg text-center " >{this.props.title1} </h1> */}
          </div>
         
          <div>
            <div className="flex justify-center">
            <Image height='800' width='800' className=" w-[60%] sm:w-[90%]  object-contain  justify-center   " src={this.props.img2} alt="رباتیک" />
            </div>
              {/* <h1 className="text-[#60ece1] sm:text-sm mb-5 text-xl lg:text-lg text-center " >{this.props.title2}</h1> */}
          </div>

          <div>
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%] sm:w-[90%] object-contain  justify-center  "
               src={this.props.img3} alt="اینترنت اشیا" />
            </div>
              {/* <h1 className="text-[#60ece1] sm:text-sm mb-5 text-xl lg:text-lg  text-center " > {this.props.title3}</h1> */}
          </div>

          <div>
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%] sm:w-[90%] object-contain  justify-center  " src={this.props.img4} alt="شرکت برنامه نویسی" />
            </div>
              {/* <h1 className="text-[#60ece1] text-xl sm:text-sm mb-5 text-center pb-5" >{this.props.title4}</h1> */}
          </div>

          
          <div>
            <div className="flex justify-center">
            <Image height='800' width='800'  className=" w-[60%] sm:w-[90%] object-contain  justify-center  " src={this.props.img5} alt="برنامه نویسی" />
            </div>
              {/* <h1 className="text-[#60ece1] text-xl mb-5 sm:text-sm lg:text-lg text-center " >{this.props.title5}</h1> */}
          </div>

          <div>
            <div className="flex justify-center">
              <Image height='800' width='800'  className="w-[60%] sm:w-[90%]  object-contain  justify-center  " src={this.props.img6} alt="برنامه نویسی" />
            </div>
              {/* <h1 className="text-[#60ece1] text-xl mb-5 sm:text-sm lg:text-lg text-center " >{this.props.title6}</h1> */}
          </div>
         
         
         
        


        </Slider>
      </div>
    );
  }
}
