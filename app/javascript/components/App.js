import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './NavBar'
import Places from './Places/Places'
import Place from './Place/Place'
import Visits from './Visits/Visits'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/places' element={<Places />}/>
        <Route exact path='/places/:slug' element={<Place />}/>
        <Route exact path='/visits' element={<Visits />}/>
      </Routes>  
    </div>
    )
}

export default App