import React from 'react'
import AnimateRouter from './components/AnimateRouter'
import {
  BrowserRouter as Router,
  
} from 'react-router-dom'
import Submenu from './Submenu'
import Navbar from './Navbar'

const App = () => {
  
  return (
    <Router>
      <Navbar />

      <Submenu />
      <AnimateRouter />
    </Router>
  )
}

export default App