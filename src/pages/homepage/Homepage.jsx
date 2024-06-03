import React from 'react'
import "./homepage.scss"
import Searchbar from "../../components/searchbar/Searchbar"

const Homepage = () => {
  return (
    <div className='homepage'>

      <div className="text-container">

        <div className="wrapper">
        <h1 className='main-title'>Find Real Estate and Get Your Dream Place </h1>
        <p>LamaEstate, your go-to destination for finding your dream home. Explore our curated property selection and receive personalized guidance to turn your real estate dreams into reality. Start your journey with us today.</p>

        <Searchbar />

        <div className="boxes">

          <div className="box">
            <h1>16+</h1>
            <h3>Years of Experience</h3>
          </div>

          <div className="box">
            <h1>200</h1>
            <h3>Award Gained</h3>
          </div>

          <div className="box">
            <h1>2000+</h1>
            <h3>Property Ready</h3>
          </div>

        </div>

        </div>

      </div>

      <div className="image-container">
        <img src='/bg.png' alt='background image' />

      </div>
      
    </div>
  )
}

export default Homepage
