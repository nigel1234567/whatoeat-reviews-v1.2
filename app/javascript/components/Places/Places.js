import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Places = () => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    // Get all our places from api
    // Update places in our state
  
    axios.get('/api/v1/places.json')
    .then( resp => {
      // Update places in our state
      setPlaces(resp.data.data)
    })
    .catch( resp => console.log(resp))
  }, [places.length]) // Only call from api when number of places (length) changes

  const list = places.map( item => {
    return (<li key={item.attributes.name}>{item.attributes.name}</li>)
  })

  return (
  <div>
    <h2>Places</h2>
    <div>This is the Places#index view for our app.</div>
    <div>
      <ul>{list}</ul>
    </div>
  </div>
  )
}

export default Places