import React, {useState} from 'react'
import "./slidder.scss"


function Slidder({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="nav-button prev" onClick={showPrevImage}>❮</button>
      <div className="slider">
        <img src={images[currentIndex]} alt={`slider ${currentIndex + 1}`} />
      </div>
      <button className="nav-button next" onClick={showNextImage}>❯</button>
    </div>
  );
};

export default Slidder
