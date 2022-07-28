import React from 'react'

const VisitForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>Visited {props.attributes.name} before? Create a visit and share your thoughts!</div>
      <div className='field'>
        Date: <input onChange={props.handleChange} value={props.visit.date} type='date' name='date'/>
      </div>
      <div className='field'>
        Time: <input onChange={props.handleChange} value={props.visit.time} type='time' name='time'/>
      </div>
      <button type='submit'>Create Visit</button>
    </form>
  )
}

export default VisitForm