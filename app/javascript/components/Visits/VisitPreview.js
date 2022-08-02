import React from 'react'

const VisitPreview = (props) => {
  return (
    <div className='card'>
      <div className='visit-name'>{props.attributes.place_name}</div>
      <div className='visit-location'>{props.attributes.place_location}</div>
      <div className='visit-tags'><span className='bold'>Tags: </span>{props.attributes.tags}</div>
      <div className='visit-datetime'>Date & Time: {props.attributes.datetime}</div>
    </div>
  )
}

export default VisitPreview