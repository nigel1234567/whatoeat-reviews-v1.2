import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Places from './Places/Places'
import Place from './Place/Place'

const App = () => {
  return (
    <Routes>
      <Route exact path='/places' element={<Places />}/>
      <Route exact path='/places/:slug' element={<Place />}/>
    </Routes>  
    )
}

export default App