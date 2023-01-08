import React, { Fragment } from 'react'
import './style.css'
// Images
import logo from '../../assets/images/logos/TheChannelSurfersText.png'

const Navbar = () => {
  return (
    <div className='nav-header'>
      <div className='nav-container'>
        <div className='logo-box'>
        <a href='/'>
            <img src={logo} />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href=''>home</a>
            </li>
            <li>
              <a href=''>work</a>
            </li>
            <li>
              <a href=''>product</a>
            </li>
            <li>
              <a href=''>about</a>
            </li>
            <li>
              <a href=''>contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
