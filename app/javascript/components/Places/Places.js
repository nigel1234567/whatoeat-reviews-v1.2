import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlacePreview from './PlacePreview'
import './Places.css'

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

  const grid = places.map( item => {
    return (
      <PlacePreview
        key={item.attributes.name}
        attributes={item.attributes}
        />
    )
  })

  return (
  <div className='home'>
    <h2 className='header'>Places</h2>
    <div className='grid'>
      {grid}
    </div>
  </div>
  )
}

export default Places