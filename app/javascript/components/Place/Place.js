import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Place = (props) => {
  const [place, setPlace] = useState({})
  const [visit, setVisit] = useState({})
  const {slug} = useParams()

  useEffect(() => {
    // Construct url for api endpoint 
    const url = `/api/v1/places/${slug}`

    // Get data from api
    axios.get(url)
    .then( resp => {
      // Set data
      setPlace(resp.data) 
      console.log(resp.data)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return <div>This is the Places#show view for our app.</div>
}

export default Place