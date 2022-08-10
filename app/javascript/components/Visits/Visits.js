import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VisitPreview from './VisitPreview'
import VisitWindow from './VisitWindow'
import { VisitContext } from './VisitContext'
import './Visits.css'

const Visits = () => {
  const [visits, setVisits] = useState([])
  const [currentVisit, setCurrentVisit] = useState([])
  const [currentVisitName, setCurrentVisitName] = useState('Please select a visit!')

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

  const unreviewedGrid = visits.map( item => {
    if (item.attributes.recommendation == null) {
      return (
        <VisitPreview
          key={item.attributes.id}
          attributes={item.attributes}
          />
      )
    }
  })

  const reviewedGrid = visits.map( item => {
    if (item.attributes.recommendation != null) {
      return (
        <VisitPreview
          key={item.attributes.id}
          attributes={item.attributes}
          />
      )
    }
  })

  // Change visit window name
  useEffect(() => {
    if (currentVisit.place_name != null) {
      setCurrentVisitName(`Visit for ${currentVisit.place_name} on ${currentVisit.datetime}`)
    }
  }, [currentVisit])

  return (
  <div className='main'>
    <h2 className='header'>Visits</h2>
    <div class="visits-columns">
      <VisitContext.Provider value={{currentVisit, setCurrentVisit}}>
        <div class="visit-column">
          <h3>To Review</h3>
          <div className='review-column'>
            {unreviewedGrid}
          </div>
        </div>
        <div class="visit-column">
          <h3>{currentVisitName}</h3>
          <div className='review-column'>
            <div className='review-window'>
              <VisitWindow />
            </div>
          </div>
        </div>
        <div class="visit-column">
          <h3>Reviewed</h3>
          <div className='review-column'>
            {reviewedGrid}
          </div>
        </div>
      </VisitContext.Provider>
    </div>
  </div>
  )
}

export default Visits