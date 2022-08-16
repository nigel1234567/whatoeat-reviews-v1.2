import React from 'react'
import { Link } from 'react-router-dom'
import './PlacePreview.css'

const PlacePreview = (props) => {

  let percentageRecommend = 0
  if (props.attributes.total_visits != 0) {
    percentageRecommend = props.attributes.recommends / props.attributes.total_visits * 100
  }


  return (
    <div className='place-card'>
      <div className='logo'>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </div>
      <div className='name'>{props.attributes.name}</div>
      <div className='location'>{props.attributes.location}</div>
      <div className='tags'><span className='bold'>Tags: </span>{props.attributes.tags}</div>
      <div className='visits'><span className='bold'>Visits: </span>{props.attributes.total_visits}</div>
      <div className='visitors'><span className='bold'>Unique Visitors: </span>{props.attributes.visitors}</div>
      <div className='recommends'><span className='bold'>Total recommends: </span>{props.attributes.recommends} ({percentageRecommend}%)</div>
      <Link to={`/places/${props.attributes.slug}`} className='view'>View Place</Link>
    </div>
  )
}

export default PlacePreview