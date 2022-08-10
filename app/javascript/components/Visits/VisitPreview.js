import React, {useContext } from 'react'
import { VisitContext } from './VisitContext'

const VisitPreview = (props) => {
  const {currentVisit, setCurrentVisit} = useContext(VisitContext)

  let recommendationStatus
  // Rename recommendation
  if (props.attributes.recommendation == 'y') {
    recommendationStatus = 'Yay!'
  } else if (props.attributes.recommendation == 'n') {
    recommendationStatus = 'Nay!'
  }

  const handleChange = (e) => {
    let updatedVisit = {...props.attributes}

    setCurrentVisit(currentVisit => ({
      ...currentVisit,
      ...updatedVisit
    }))

    console.log(currentVisit)
  }

  if (recommendationStatus == null) {
    return (
      <button className='card' onClick={handleChange}>
        <div className='visit-name'>{props.attributes.place_name}</div>
        <div className='visit-location'>{props.attributes.place_location}</div>
        <div className='visit-tags'><strong>Tags: </strong>{props.attributes.tags}</div>
        <div className='visit-datetime'><strong>Date & Time: </strong>{props.attributes.datetime}</div>
      </button>
    )
  } else {
    return (
      <button className='card' onClick={handleChange}>
        <div className='visit-name'>{props.attributes.place_name}</div>
        <div className='visit-location'>{props.attributes.place_location}</div>
        <div className='visit-tags'><strong>Tags: </strong>{props.attributes.tags}</div>
        <div className='visit-datetime'><strong>Date & Time: </strong>{props.attributes.datetime}</div>
        <div className='visit-recommendation'><strong>Recommendation: </strong>{recommendationStatus}</div>

      </button>
    )
  }

}

export default VisitPreview