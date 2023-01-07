import React from 'react'
// Components
import NavBar from '../navbar/NavBar'
// Stylesheet
import './style.css'

const Header = () => {
  return (
    <header id='site-header'>
      <form action='#' id='search-header' name='search-header'>
        <input type='search' name='search' placeholder='Type and Hit Enter..' />
        <button>Search</button>
      </form>
      <div className='container nav-bar-container'>
        <div className='row nav-row'>
          <div className='logo-container'>
            <a href='index.html'>
              <span className='logo'>
                Music<span className='colored'>Base</span>
              </span>
              <br />
              <span className='tagline colored-orange'>Electro Music Base</span>
            </a>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header
