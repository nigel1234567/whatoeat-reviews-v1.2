import React from 'react'

const CurrentVisitCont = (props) => {

  return (
    <div>
      <p>{props.visit.id}</p>
      <p>{props.visit.place_name}</p>
      <p>{props.visit.place_location}</p>
      <p>{props.visit.tags}</p>
      <p>{props.visit.datetime}</p>
    </div>
  )
}

export default CurrentVisitCont