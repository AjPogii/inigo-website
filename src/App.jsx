
import './App.css'

import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './assets/Pages/Homepage/Homepage'

function App() {


  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
