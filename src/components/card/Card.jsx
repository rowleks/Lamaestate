import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./card.scss"

function Card({item}) {

  const [active, setActive] = useState(false)

  const bookmark = () => (setActive(!active))

  const bathNum = item.bathroom > 1 ? "bathrooms" : "bathroom"

  const bedNum = item.bedroom > 1 ? "bedrooms" : "bedroom"



  return (
    <div className='card'>

      <Link to={`/list/${item.id}`} className='image-container'>
      <img src={item.img} alt='house' />  
      </Link>

      <div className="text-container">
        <h2 className='title'>
          <Link to={`/list/${item.id}`}>
            {item.title}
          </Link>

        </h2>

        <p className='address'>
          <img src='/pin.png' alt='pin' />
          <span>{item.address}</span>
        </p>

        <p className='price'>
          $ {item.price}
        </p>

        <div className="bottom">
          
          <div className="features-container">
            <div className="feature">
              <img src='/bed.png' alt='bedrooms' />
              <span>{`${item.bedroom} ${bedNum}`}</span>
            </div>

          <div className="feature">
            <img src='/bath.png' alt='bathrooms' />
            <span>{`${item.bathroom} ${bathNum}`} </span>
          </div>
          </div>

          <div className="icons-container">
            <div className={active ? "icon bookmark" : "icon"} onClick={bookmark}>
              <img src='/save.png' alt='save' />
            </div>
            <div className="icon">
              <img src='/chat.png' alt='chat' />
            </div>

          </div>


        </div>



      </div>
      
    </div>
  )
}

export default Card
