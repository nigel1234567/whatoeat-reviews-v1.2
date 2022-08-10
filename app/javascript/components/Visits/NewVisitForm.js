import React from 'react'

const NewVisitForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      
      <div className='field'>
        Place Name: <input onChange={props.handleChange} value={props.visit.name} type='text' name='place_name'/>
      </div>

      <div className='field'>
        Place Location: <input onChange={props.handleChange} value={props.visit.location} type='text' name='place_location'/>
      </div>

      <div className='field'>
        Tags: <input onChange={props.handleChange} value={props.visit.tags} type='text' name='tags' placeholder='Separate tags by a comma'/>
      </div>

      <div className='field'>
        Date & Time: <input onChange={props.handleChange} value={props.visit.date} type='datetime-local' name='datetime'/>
      </div>

      <button type='submit'>Create Visit</button>
    </form>
  )
}

export default NewVisitForm