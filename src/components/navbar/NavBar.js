import React, { Fragment } from 'react'
// Components
import MiniCart from '../minicart/MiniCart'
// Stylesheet
import './style.css'
// Icons
import { RiShoppingCartLine } from 'react-icons/ri'
import { FaSearchengin } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
// Router
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Fragment>
      <div id='site-navigation' className='tech-nav'>
        <ul>
          <li className='active'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/albums'>Albums</Link>
          </li>
          <li className='has-child'>
            <a href='#'>Events</a>
            <ul className='submenu'>
              <li>
                <a href='events-masonry.html'>Events Masonry</a>
              </li>
              <li>
                <a href='events-list.html'>Events List</a>
              </li>
              <li>
                <a href='event-single.html'>Event Single</a>
              </li>
            </ul>
          </li>
          <li className='has-child'>
            <a href='#'>Band</a>
            <ul className='submenu'>
              <li>
                <a href='members.html'>Members Page</a>
              </li>
              <li>
                <a href='biography.html'>Biography Page</a>
              </li>
              <li>
                <a href='artist-single.html'>Single Artist</a>
              </li>
            </ul>
          </li>
          <li className='has-child'>
            <a href='#'>Pages</a>
            <ul className='submenu'>
              <li className='has-child'>
                <a href='#'>Blog</a>
                <ul className='submenu'>
                  <li>
                    <a href='blog-list.html'>Blog List</a>
                  </li>
                  <li>
                    <a href='blog-masonry.html'>Blog Masonry</a>
                  </li>
                  <li>
                    <a href='blog-single.html'>Blog Single</a>
                  </li>
                </ul>
              </li>
              <li className='has-child'>
                <a href='#'>Shop</a>
                <ul className='submenu'>
                  <li>
                    <a href='products.html'>Products</a>
                  </li>
                  <li>
                    <a href='product-single.html'>Product Single</a>
                  </li>
                  <li>
                    <a href='cart.html'>Cart</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='video-gallery.html'>Video Gallery</a>
              </li>
              <li>
                <a href='coming-soon.html'>Coming Soon</a>
              </li>
              <li>
                <a href='404.html'>404 Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='contact.html'>Contact</a>
          </li>
        </ul>
      </div>
      {/* <!-- Extra Nav --> */}
      <div className='extra-nav'>
        <button id='mini-cart-toggle'>
          <RiShoppingCartLine /> <span className='mini-cart-count'>2</span>
        </button>
        <button id='search-toggle'>
          <FaSearchengin />
        </button>
        <button id='menu-toggle'>
          <GiHamburgerMenu />
        </button>
        {/* <!-- Mini Cart Widget --> */}
        <MiniCart />
      </div>
    </Fragment>
  )
}

export default NavBar
