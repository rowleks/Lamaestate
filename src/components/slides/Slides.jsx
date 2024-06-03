import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slides({images}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    
  return (
        <Slider {...settings}>
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />


        </Slider>
      
  )
}

export default Slides
