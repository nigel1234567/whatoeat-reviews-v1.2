import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CurrentVisitCont = (props) => {
  const [currRecommendation, setCurrRecommendation] = useState()

  const recommendYay = () => {
    // CSRF Token
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const visit_id = props.visit.id

    // Make patch request to api for recommendation = 'y'
    axios.patch(`/api/v1/visits/${visit_id}`, { recommendation: 'y'})
    .then(resp => {
      console.log(resp.data.data)
      window.location.reload(true)
    })
    .catch(resp => {})

  }

  useEffect(() => {
    setCurrRecommendation(props.visit.recommendation)
  })

  const recommendNay = () => {
    // CSRF Token
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const visit_id = props.visit.id

    // Make patch request to api for recommendation = 'n'
    axios.patch(`/api/v1/visits/${visit_id}`, { recommendation: 'n'})
    .then(resp => {
      window.location.reload(true)
      console.log(resp.data.data)
    })
    .catch(resp => {})

  }

  let recommendationStatus
  // Rename recommendation
  if (props.visit.recommendation == 'y') {
    recommendationStatus = 'Yay!'
  } else if (props.visit.recommendation == 'n') {
    recommendationStatus = 'Nay!'
  }

  if (currRecommendation == null) {
    return (
      <div>
        <div className="visit-details">
          <p>{props.visit.place_name}</p>
          <p>{props.visit.place_location}</p>
          <p><strong>Tags: </strong>{props.visit.tags}</p>
          <p><strong>Date & Time of Visit: </strong>{props.visit.datetime}</p>
        </div>
        <div className='recommendation'>
          <h3>Would you recommend {props.visit.place_name}?</h3>
          <button type='submit' className='recommend yay' onClick={recommendYay}>Yay!</button>
          <button type='submit' className='recommend nay' onClick={recommendNay}>Nay!</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="visit-details">
          <p>{props.visit.place_name}</p>
          <p>{props.visit.place_location}</p>
          <p><strong>Tags: </strong>{props.visit.tags}</p>
          <p><strong>Date & Time of Visit: </strong>{props.visit.datetime}</p>
          <p><strong>Recommendation: </strong>{recommendationStatus}</p>
        </div>
        <div className='recommendation'>
          <h3>Would you recommend {props.visit.place_name}?</h3>
          <button type='submit' className='recommend yay' onClick={recommendYay}>Yay!</button>
          <button type='submit' className='recommend nay' onClick={recommendNay}>Nay!</button>
        </div>
      </div>
    )
  }

}

export default CurrentVisitCont