import React, { useState, useEffect } from 'react'
import axios from 'axios'
import VisitPreview from './VisitPreview'
import VisitWindow from './VisitWindow'
import NewVisitForm from './NewVisitForm'
import { VisitContext } from './VisitContext'
import './Visits.css'

const Visits = () => {
  const [visits, setVisits] = useState([])
  const [currentVisit, setCurrentVisit] = useState([])
  const [currentVisitName, setCurrentVisitName] = useState('Please select a visit!')
  const [visitFormStatus, setVisitFormStatus] = useState(false)
  const [visitWindow, setVisitWindow] = useState(<VisitWindow />)

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


  // Change visitWindow to NewVisitForm when visitFormStatus is true.
  useEffect(() => {
    if (visitFormStatus == true) {
      setVisitWindow(<NewVisitForm />)
      console.log(`Visit window: ${visitWindow}`)
      // Reset currentVisit
      setCurrentVisit([])
    }

  },[visitFormStatus])

  // Change visitWindow back to VisitWindow if visit id changes and change visitFormStatus to false 
  useEffect(() => {
    if (currentVisit.id != null) {
      setVisitFormStatus(false)
      setVisitWindow(<VisitWindow />)
    }
  },[currentVisit.id])

  // Creating new visit
  const createNewVisit = () => {
    if (visitFormStatus == false) {
      setVisitFormStatus(true)
      console.log('Created new form')
    }
    console.log("Visit Form status: " + visitFormStatus)
  }

  // Review Grids
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
            <button onClick={createNewVisit}>Create New Visit</button>
            <div className='review-window'>
              <div>{visitWindow}</div>
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