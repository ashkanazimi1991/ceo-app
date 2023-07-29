import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from 'next/image';
import Slider from "react-slick";

export default class VSlider extends Component {

  render() {
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        speed: 2000,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
    return (
      <div className="container w-full overflow-hidden">
        <Slider {...settings}>
          <div >
            <div className="flex">
              <Image height='350' width='350' className="flex w-96 scale-100   hover:scale-110 transition-all  justify-center  p-4 " src={this.props.img1} alt=" مدیریت آنلاین" />
            </div>
          
          </div>
         
          <div>
            <div className="flex">
            <Image height='350' width='350' className="flex w-96 scale-100   hover:scale-110 transition-all  justify-center  p-4  " src={this.props.img2} alt="رباتیک" />
            </div>
             
          </div>

          <div>
            <div className="flex">
            <Image height='350' width='350' className="flex w-96 scale-100   hover:scale-110 transition-all  justify-center  p-4  " src={this.props.img3} alt="اینترنت اشیا" />
            </div>
         
          </div>

          <div>
            <div className="flex w-full justify-center">
            <Image height='350' width='350' className="flex w-96 scale-100   hover:scale-110 transition-all  justify-center  p-4    " src={this.props.img4} alt="شرکت برنامه نویسی" />
            </div>
             
          </div>

          
          <div>
            <div className="flex">
            <Image height='350' width='350' className="flex w-96 scale-100   hover:scale-110 transition-all  justify-center  p-4   " src={this.props.img5} alt="برنامه نویسی" />
            </div>
        
          </div>
         
         
          <div>
            <div className="flex">
            <Image height='350' width='350' className="flex w-96 scale-100   hover:scale-110 transition-all  justify-center  p-4  " src={this.props.img6} alt="online ceo" />
            </div>
             
          </div>


 


   


        </Slider>
      </div>
    );
  }
}
