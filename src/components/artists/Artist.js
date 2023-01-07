import React, { Fragment } from 'react'
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

const Artist = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container'>
          <div className='ph-inner-wrapper'>
            <h3 className='title'>Artist Single</h3>
          </div>
        </div>
      </div>
      <div>
        <div className='container section'>
          <div className='artist-single'>
            <div className='row'>
              <div className='col-sm-4'>
                <img
                  src={require('../../assets/imgs/team/big-member-1.jpg')}
                  alt=''
                  className='img-responsive bordered'
                />
              </div>
              <div className='col-sm-8'>
                <div className='info-block'>
                  <h2 className='colored'>Jeniffer Schmidt</h2>
                  <p className='short-info colored-orange'>
                    In at pharetra augue. Integer accumsan mattis sollicitudi.
                    Nullas llicitudin consequat elementum. In in tincidunt
                  </p>
                  <div className='sep'></div>
                  <p className='description'>
                    In at pharetra augue. Integer accumsan mattis sollicitudin.
                    Nulla sollicitudin consequat elementum in tincidunt eros.
                    Donec id erat non tellus tristique convallis. Fusce nec
                    fringilla felis. Quisque pharetra vel nibh necnterdum et
                    malesuada fames ac ante ipsum primis in faucibus. Fusce ut
                    augue in ex faucibus porttitor.
                  </p>
                  <p className='description'>
                    {' '}
                    Nullam aliquam condimentum pellentesque. Morbi euismod porta
                    turpis, ac mollis magna semper at. Aliquam aliquam metus
                    venenatis rhoncus curabitur mattis, orci vitae aliquet
                    faucibus, neque sem sollicitudin felis, vel euismod elit leo
                    eget orci
                  </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Artist
