import React, { useContext, useState, useEffect } from 'react'
import { VisitContext } from './VisitContext'
import CurrentVisitCont from './CurrentVisitCont'

const VisitWindow = () => {
  const {currentVisit} = useContext(VisitContext)

  useEffect(() => {
    console.log(`Visit ID: ${currentVisit.id}`)
  }, [currentVisit])

  let visit;
  if (currentVisit.id != undefined) {
    visit = <CurrentVisitCont visit={currentVisit}/>
  } else {
    visit = <p>Select a visit to review.</p>
  }

  return (
    <div>
      {visit}
    </div>
  )

}

export default VisitWindow