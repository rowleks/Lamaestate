import React from 'react'
import "./filter.scss"

function Filter() {
  return (
    <div className='filter'>
      {/* <h2>Search results for <b>London</b></h2> */}

      <div className="top">
        <div className="item">
          <label htmlFor='city'>Location</label>
          <input id='city' name='city' placeholder='City Location' />
        </div>

      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor='type'>Type</label>
          <select name='type' id='type'>
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

      <div className="item">
        <label htmlFor='property'>Property</label>
        <select name='property' id='property'>
          <option value="">Any</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="land">Land</option>
        </select>
      </div>

      <div className="item">
        <label htmlFor='min-price'>Min Price</label>
          <input type='number' id='min-price' name='min-price' placeholder='Any' />
      </div>

      <div className="item">
        <label htmlFor='max-price'>Max Price</label>
          <input type='number' id='max-price' name='max-price' placeholder='Any' />
      </div>

       <div className="item">
        <label htmlFor='bedroom'>Bedroom</label>
          <input type='number' id='bedroom' name='bedroom' placeholder='Any' />

       </div>


        <button>
          <img src='/search.png' alt='search' />
        </button>

  
      </div>
      
    </div>
  )
}

export default Filter
