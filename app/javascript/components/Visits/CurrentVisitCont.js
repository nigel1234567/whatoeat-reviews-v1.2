import React from 'react'

const CurrentVisitCont = (props) => {

  return (
    <div>
      <p>{props.object.id}</p>
      <p>{props.object.place_name}</p>
      <p>{props.object.place_location}</p>
      <p>{props.object.tags}</p>
      <p>{props.object.datetime}</p>
    </div>
  )
}

export default CurrentVisitCont