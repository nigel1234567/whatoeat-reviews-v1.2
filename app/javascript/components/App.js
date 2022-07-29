import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './NavBar'
import Places from './Places/Places'
import Place from './Place/Place'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/places' element={<Places />}/>
        <Route exact path='/places/:slug' element={<Place />}/>
      </Routes>  
    </div>
    )
}

export default App