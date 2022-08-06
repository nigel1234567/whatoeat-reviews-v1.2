import React, {useContext } from 'react'
import { VisitContext } from './VisitContext'

const VisitPreview = (props) => {
  const {currentVisit, setCurrentVisit} = useContext(VisitContext)

  const handleChange = (e) => {
    let updatedVisit = {...props.attributes}

    setCurrentVisit(currentVisit => ({
      ...currentVisit,
      ...updatedVisit
    }))

    console.log(currentVisit)
  }

  return (
    <button className='card' onClick={handleChange}>
      <div className='visit-name'>{props.attributes.place_name}</div>
      <div className='visit-location'>{props.attributes.place_location}</div>
      <div className='visit-tags'><span className='bold'>Tags: </span>{props.attributes.tags}</div>
      <div className='visit-datetime'><span className='bold'>Date & Time: </span>{props.attributes.datetime}</div>
    </button>
  )
}

export default VisitPreview