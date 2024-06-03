import React from 'react'
import "./detailpage.scss"
import Slidder from '../../components/slider/Slidder'
import { singlePostData as data } from '../../library/dummydata'
import Map from "../../components/map/Map"

const Detailpage = () => {


  return (
    <div className='detail-page'>
      <div className="details">
        <Slidder images={data.images} />
        <div className="lower">
          <div className="info">
            <h2>{data.title}</h2>
            <div className='address'>
            <img src='/pin.png' alt='location' />
            <span>{data.address}</span>

            </div>

            <h4 className='price'>$ {data.price}</h4>

          </div>
          <div className="description">
            {data.description}
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <h2>General</h2>
          <div className="gen-prop">
            <div className="util">
              <img src='/utility.png' alt='util'/>
              <div>
                <h4>Utilities</h4>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="policy">
              <img src='/pet.png' alt='pet'/>
              <div>
                <h4>Pet Policy</h4>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="fees">
              <img src='/fee.png' alt='fee'/>
              <div>
                <h4>Property Fees</h4>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <h2>Sizes</h2>
          <div className="sizes-container">
            <div className="sizes-box">
              <img src='/size.png' alt='' />
              <span>80 sqft</span>
            </div>
            <div className="sizes-box">
              <img src='/bed.png' alt='' />
              <span>2 beds</span>
            </div>
            <div className="sizes-box">
              <img src='/bath.png' alt='' />
              <span>1 bathroom</span>
            </div>
          </div>

        </div>
        <div className="wrapper">
          <h2>Nearby</h2>
          <div className="nearby-container">
            <div className="nearby-box">
                <img src='/school.png' alt='' />
                <div>
                  <h4>School</h4>
                  <p>250m away</p>
                </div>
            </div>
            <div className="nearby-box">
                <img src='/bus.png' alt='' />
                <div>
                  <h4>Bus Stop</h4>
                  <p>100m away</p>
                </div>
            </div>
            <div className="nearby-box">
                <img src='/restaurant.png' alt='' />
                <div>
                  <h4>Restaurant</h4>
                  <p>200m away</p>
                </div>
            </div>

          </div>

        </div>
        <div className="map-container">

        <Map  items={[data]} className="wrapper"/>
        </div>

      </div>
      
    </div>
  )
}

export default Detailpage
