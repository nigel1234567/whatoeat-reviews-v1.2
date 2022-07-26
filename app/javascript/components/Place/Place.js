import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Place = (props) => {
  return (
    <div className='card'>
      <div className='place-logo'>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className='place-name'>{props.attributes.name}</div>
      <div className='place-location'>{props.attributes.location}</div>
      <div className='place-tags'>Tags: {props.attributes.tags}</div>
      <div className='place-visits'>Visits: {props.attributes.total_visits}</div>
      <div className='place-visitors'></div>
    </div>
  )
}

export default Place