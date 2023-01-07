import React from 'react'
// Style
import './style.css'
// Icons
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import { RiSoundcloudLine } from 'react-icons/ri'

const Artists = () => {
  return (
    <div className='container artists-home-wrapper section'>
      <div className='section-title pdb-30'>
        <h2>
          <span className='title-lines left'></span>
          Band Members
          <span className='title-lines right'></span>
        </h2>
      </div>
      <div className='row artists-wrapper'>
        <div className='col-sm-4'>
          <div className='artist'>
            <img
              className='img-responsive first-img'
              src={require('../../assets/imgs/team/member-4.jpg')}
              alt='Member'
            />
            <div className='second-img-container'>
              <img
                className='img-responsive second-img'
                src={require('../../assets/imgs/team/member-4.jpg')}
                alt='Member'
              />
            </div>
            <div className='overlay'></div>
            <div className='second-overlay'>
              <div className='info-block'>
                <a className='artist-name' href='artist-single.html'>
                  <h3>
                    Mark <br /> <span className='colored-orange'>Hunt</span>
                  </h3>
                </a>
                <ul className='social-buttons'>
                  <li>
                    <a href='http://twitter.com'>
                      <i>
                        <FiTwitter />
                      </i>{' '}
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://facebook.com'>
                      <i>
                        <FiFacebook />
                      </i>{' '}
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://instagram.com'>
                      <i>
                        <FiInstagram />
                      </i>{' '}
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://soundcloud.com'>
                      <i>
                        <RiSoundcloudLine />
                      </i>{' '}
                      <span>SoundCloud</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='artist'>
            <img
              className='img-responsive first-img'
              src={require('../../assets/imgs/team/member-4.jpg')}
              alt='Member'
            />
            <div className='second-img-container'>
              <img
                className='img-responsive second-img'
                src={require('../../assets/imgs/team/member-4.jpg')}
                alt='Member'
              />
            </div>
            <div className='overlay'></div>
            <div className='second-overlay'>
              <div className='info-block'>
                <a className='artist-name' href='artist-single.html'>
                  <h3>
                    Heather <br /> <span className='colored-orange'>Dale</span>
                  </h3>
                </a>
                <ul className='social-buttons'>
                  <li>
                    <a href='http://twitter.com'>
                      <i>
                        <FiTwitter />
                      </i>{' '}
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://instagram.com'>
                      <i>
                        <FiInstagram />
                      </i>{' '}
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://facebook.com'>
                      <i>
                        <FiFacebook />
                      </i>{' '}
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://soundcloud.com'>
                      <i>
                        <RiSoundcloudLine />
                      </i>{' '}
                      <span>SoundCloud</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='artist'>
            <img
              className='img-responsive first-img'
              src={require('../../assets/imgs/team/member-4.jpg')}
              alt='Member'
            />
            <div className='second-img-container'>
              <img
                className='img-responsive second-img'
                src={require('../../assets/imgs/team/member-4.jpg')}
                alt='Member'
              />
            </div>
            <div className='overlay'></div>
            <div className='second-overlay'>
              <div className='info-block'>
                <a className='artist-name' href='artist-single.html'>
                  <h3>
                    Janet <br /> <span className='colored-orange'>Richard</span>
                  </h3>
                </a>
                <ul className='social-buttons'>
                  <li>
                    <a href='http://twitter.com'>
                      <i>
                        <FiTwitter />
                      </i>{' '}
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://facebook.com'>
                      <i>
                        <FiFacebook />
                      </i>{' '}
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://instagram.com'>
                      <i>
                        <FiInstagram />
                      </i>{' '}
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href='http://soundcloud.com'>
                      <i>
                        <RiSoundcloudLine />
                      </i>{' '}
                      <span>SoundCloud</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='btn-wrapper pdt-70 multiple-btn'>
        <a href='members.html' className='btn first'>
          All Members
        </a>
        <a href='members.html' className='btn orange'>
          New Members
        </a>
      </div>
    </div>
  )
}

export default Artists
