import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Place.css'

import Header from './Header'
import VisitForm from './VisitForm'

const Place = (props) => {
  const [place, setPlace] = useState({})
  const [visit, setVisit] = useState({})
  const [loaded, setLoaded] = useState(false)
  const {slug} = useParams()

  useEffect(() => {
    // Construct url for api endpoint 
    const url = `/api/v1/places/${slug}`

    // Get data from api
    axios.get(url)
    .then( resp => {
      // Set data
      setPlace(resp.data) 
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  // Handle changes in input field
  const handleChange = (e) => {
    e.preventDefault()

    setVisit(Object.assign({}, visit, {[e.target.name]: e.target.value}))
    console.log('visit:', visit)
  }
  

  // Handle submit for form
  const handleSubmit = (e) => {
    e.preventDefault()

    // CSRF Token
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const place_id = place.data.id
    // Make post request to api
    axios.post('/api/v1/visits', {visit, place_id})
    .then(resp => {
      const included = [...place.included, resp.data.data]
      setPlace({...place, included}) // Post form details to visit
      setVisit({tags: '', datetime: ''}) // Set to be empty after posting
    })
    .catch(resp => {})
  }

  return (
    <div className='wrapper'>
    { 
      loaded &&
      <div className='columns'>
        <div className='column'>
              <Header
                attributes={place.data.attributes}
              />
            <div className='visits'></div>
        </div>
        <div className='column'>
          <VisitForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            attributes={place.data.attributes}
            visit={visit}
          />
        </div>
      </div>
      }
    </div>
  )
}

export default Place