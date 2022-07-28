import React from 'react'
import './Header.css'

const Header = (props) => {
  // Destructure attributes
  const { name, image_url, location, tags, total_visits, visitors } = props.attributes

  return (
    <div className='place'>
      <div class='title'>
        <img src={image_url} alt={name} className='icon'/>
        <h1>{name}</h1>
      </div>
      <div className='details'>
        <div className='location'><h3>Location: </h3>{location}</div>
        <div className='tags'><h3>Tags: </h3>{tags}</div>
        <div className='total-visits'><h3>Total Visits: </h3>{total_visits}</div>
        <div className='visitors'><h3>Unique Visitors: </h3>{visitors}</div>
      </div>
    </div>
  )
}

export default Header