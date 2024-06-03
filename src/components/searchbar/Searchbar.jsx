import React, { useState } from 'react'
import "./searchbar.scss"

function Searchbar() {

  const [query, setQuery] = useState({
    type: 'buy',
    location: "",
    minPrice: 0,
    maxPrice: 0,
  })

  function switchType(val) {
    setQuery((prev) => ({...prev, type: val}))

  }


  return (
    <div className="search-bar">

      <div className="type">
      <button 
      className={query.type === 'buy' ? "active" : ""}
      onClick={()=> switchType('buy')}>
      Buy</button>

      <button 
      className={query.type === 'rent' ? "active" : ""}
      onClick={()=> switchType('rent')}>Rent</button>
      </div> 

    <form>
      <input type='text' name='location' placeholder='City Location' />

      <input 
      type='number' 
      name='minPrice' 
      min={0} 
      max={1000000} 
      placeholder='Min Price' />
      
      <input 
      type='number' 
      name='maxPrice' 
      min={0} 
      max={1000000} 
      placeholder='Max Price' />

      <button>
        <img  src='/search.png' alt='search'/>
      </button>
    <br />
    </form>

    </div>


    


  )
}
  

export default Searchbar
