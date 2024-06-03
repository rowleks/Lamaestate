import React from 'react'
import "./listpage.scss"
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import { listData as data} from '../../library/dummydata'
import Map from '../../components/map/Map'


const Listpage = () => {

  const lists = data.map(data => (<Card key={data.id} item={data} />))

  

  return (
    <div className='listpage'>
      <div className="list-container">
          <div className="wrapper">
          <Filter />
          <div className="list-items">
            {lists}
          </div>
          </div>
      </div>

      <div className="map-container">
        <Map  items={data} />
      </div>
      
    </div>
  )
}

export default Listpage
