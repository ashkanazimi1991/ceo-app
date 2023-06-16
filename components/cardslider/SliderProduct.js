import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default class SliderProduct extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      initialSlide: 2,
      fade: false,
      slidesToShow: 1,
      speed: 1000,
      lazyLoad: true,
      adaptiveHeight: true,
      pauseOnHover: true,
      dots: true,
   
    };
    return (
      <div className=" items-center container  md:min-h-[400px] w-4/6 md:w-[80%] ">
        <Slider {...settings}>
          <div>
            <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200'  className=" h-[50%] w-3/4
             object-contain  justify-center "
               src={this.props.img1} alt=" مدیریت آنلاین" />
          
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title1} </h1>
              
            </div>
          </div>
         
          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img2} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title2} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img3} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title3} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img4} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title4} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img5} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title5} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img6} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title6} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img7} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title7} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img8} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title8} </h1>
             
            </div>
          </div>


          <div>
          <div className="flex flex-col-reverse p-[10%] justify-center items-center ">
            <Image height='1200' width='1200' className=" h-[50%] w-3/4
              object-contain  justify-center   " src={this.props.img9} alt="رباتیک" />
            
                  <h1 className="flex justify-center  text-[#60ece1] sm:text-sm mb-5 text-xl
                   lg:text-lg text-center " >{this.props.title9} </h1>
             
            </div>
          </div>
         

       
         
         
         
        


        </Slider>
      </div>
    );
  }
}
