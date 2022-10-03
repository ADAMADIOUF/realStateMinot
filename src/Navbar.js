import React from 'react'
import { useGlobalContext } from './context'
import {FaBars} from "react-icons/fa"
import Sidebar from './Sidebar'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <>
  
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            <h3 className='logo'>logo</h3>
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <a href='/'>
                <button className='link-btn' onMouseOver={closeSubmenu}>
                  accueil
                </button>
              </a>
            </li>
            <li>
              <a href='/about'>
                <button className='link-btn' onMouseOver={closeSubmenu}>
                  about us
                </button>
              </a>
            </li>
            <li>
              <a href='/services'>
                <button className='link-btn' onMouseOver={closeSubmenu}>
                  services
                </button>
              </a>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                pages
              </button>
            </li>
            
            <li>
              <a href='/contact'>
                <button className='link-btn' onMouseOver={closeSubmenu}>
                  contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar />
    </>
  )
}

export default Navbar