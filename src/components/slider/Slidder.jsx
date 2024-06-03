import React, {useState} from 'react'
import "./slidder.scss"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slidder({images}) {
  const [showImg, setShowImg] = useState(false)



  const restImage = images.slice(1).map((image, index)=> (<img src={image} alt='' key={index}/>))

  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "slick-dots slick-thumb",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "",
    adaptiveHeight: true
  };



  return (
    <div className='slider-container'>
      {showImg && <div className="slide-images">

        <div className="div"></div>

<Slider className='slides' {...settings}>
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />
            <img src={images[3]} alt="" />


        </Slider>
        <div className="div"></div>

        <div className="close-btn" onClick={() => setShowImg(false)}>X</div>
      </div>}





      {/* <div className="arrow">
        <img src="/arrow.png" alt="" />
      </div>
      <div className="main-image">
        <img src={images[0]} alt="" />
      </div>
      <div className="arrow">
        <img src='/arrow.png' alt=''/>
      </div> */}

    

      <div className="big-image">
        <img src={images[0]} alt='' onClick={() => setShowImg(true)} />

      </div>
      <div className="small-image" onClick={() => setShowImg(true)}>
        {restImage}


      </div>
      
    </div>
  )
}

export default Slidder
