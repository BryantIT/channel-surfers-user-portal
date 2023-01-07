import React from 'react'
// Icons
import {
  FaFacebook,
  FaTwitter,
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa'
// Stylesheet
import './style.css'

const Footer = () => {
  return (
    <footer className='relative-pos'>
      <div className='container'>
        <div className='row'>
          <div className='widget col-sm-4 about-widget '>
            <h3 className='widget-title'>About US</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing eli esent massa
              libero, tristiq ue placerat sapien in. Tincidmollis dui.
            </p>{' '}
            <p>
              Curabitur gravida felis turpis, non malesua est placerat eget.
              Cras vel fringilla mi.{' '}
            </p>
            <p className='colored-orange'>0123 4567 890</p>
            <ul className='social-icons'>
              <li>
                <a href='http://facebook.com'>
                  <FaFacebook className='icon' />
                </a>
              </li>
              <li>
                <a href='http://twitter.com'>
                  <FaTwitter className='icon' />
                </a>
              </li>
              <li>
                <a href='http://spotify.com'>
                  <FaSpotify className='icon' />
                </a>
              </li>
              <li>
                <a href='http://soundcloud.com'>
                  <FaSoundcloud className='icon' />
                </a>
              </li>
              <li>
                <a href='http://youtube.com'>
                  <FaYoutube className='icon' />
                </a>
              </li>
              <li>
                <a href='http://youtube.com'>
                  <FaInstagramSquare className='icon' />
                </a>
              </li>
            </ul>
          </div>
          <div className='widget col-sm-4 twitter-widget'>
            <h3 className='widget-title'>Twitter</h3>
            <div id='twitter-feed'></div>
          </div>
          <div className='widget col-sm-4 instagram-widget'>
            <h3 className='widget-title'>Instagram</h3>
            <ul id='footer-insta' className='clearfix'></ul>
          </div>
        </div>
      </div>
      <div className='copyright-bar'>
        <div className='container'>
          <p>
            Copyright 2016 <a href='#'>FutureThemes</a> | All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
