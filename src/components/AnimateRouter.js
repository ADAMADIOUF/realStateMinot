import React from 'react'
import {
  
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import About from './About'
import Pricing from './Pricing'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Pages from './Pages'
import Services from './Services'

import {AnimatePresence} from "framer-motion"
import Projects from './Projects'
const AnimateRouter = () => {
 const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>

        <Route path='/pages' element={<Pages />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimateRouter