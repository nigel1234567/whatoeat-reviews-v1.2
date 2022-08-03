import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VisitPreview from './VisitPreview'
import './Visits.css'

const Visits = () => {
  const [visits, setVisits] = useState([])

  useEffect(() => {
    // Get all our places from api
    // Update places in our state
  
    axios.get('/api/v1/visits.json')
    .then( resp => {
      // Update places in our state
      setVisits(resp.data.data)
    })
    .catch( resp => console.log(resp))
  }, [visits.length]) // Only call from api when number of places (length) changes

  const grid = visits.map( item => {
    return (
      <VisitPreview
        key={item.attributes.name}
        attributes={item.attributes}
        />
    )
  })

  return (
  <div className='main'>
    <h2 className='header'>Visits</h2>
    <div className='visits-columns'>
      <div className='review-column'>
        <h3>To Review</h3>
        {grid}
      </div>
      <div className='review-window'>
        To add Review Window here
      </div>
      <div className='review-column'>
      <h3>Reviewed</h3>
      </div>
    </div>
  </div>
  )
}

export default Visits