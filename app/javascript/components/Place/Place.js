import React from 'react'

const Place = (props) => {
  return (
    <div className='card'>
      <div className='place-logo'>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className='place-name'>{props.attributes.name}</div>
      <div className='place-location'>{props.attributes.location}</div>
      <div className='place-tags'>{props.attributes.tags}</div>
      <div className='place-visits'>{props.attributes.total_visits}</div>
      <div className='place-visitors'></div>
    </div>
  )
}

export default Place