import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Place.css'

const Place = (props) => {
  return (
    <div className='card'>
      <div className='logo'>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className='name'>{props.attributes.name}</div>
      <div className='location'>{props.attributes.location}</div>
      <div className='tags'><span className='bold'>Tags: </span>{props.attributes.tags}</div>
      <div className='visits'><span className='bold'>Visits: </span>{props.attributes.total_visits}</div>
      <div className='visitors'><span className='bold'>Unique Visitors: </span>{props.attributes.visitors}</div>
      <Link to={`/places/${props.attributes.slug}`} className='view'>View Place</Link>
    </div>
  )
}

export default Place