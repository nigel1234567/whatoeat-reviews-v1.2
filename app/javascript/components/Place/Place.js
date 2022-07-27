import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Place = (props) => {
  const [place, setPlace] = useState({})
  const [visit, setVisit] = useState({})

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`

    axios.get(url)
    .then( resp => console.log(resp) )
    .catch( resp => console.log(resp) )
  }, [])

  return <div>This is the Places#show view for our app.</div>
}

export default Place