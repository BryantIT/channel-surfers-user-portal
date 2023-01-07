import React from 'react'
import { Link } from 'react-router-dom'
// Style
import './style.css'

const AlbumsPreview = () => {
  return (
    <div className='albums-home-wrapper'>
      <div className='overlay-section'>
        <div className='container section'>
          <div className='section-title dbp-30'>
            <h2>
              <span className='title-lines left'></span>
              Albums
              <span className='title-lines right'></span>
            </h2>
          </div>
          <div className='row albums'>
            <div className='col-sm-4'>
              <div className='album-container'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/album/img-1.jpg')}
                  alt=''
                />
                <div className='overlay'></div>
                <div className='info-block'>
                  <div className='album-title'>
                    <h3>Lacuna Coil</h3>
                    <h2>Comalies</h2>
                  </div>
                  <div className='show-on-hover'>
                    <div className='sep'></div>
                    <p>
                      Sed est risus, interdum id posuere et, fringilla id ipsum.
                      Cras lacinia ipsum nisi, at sagittis leo sodales eget amet
                      vitea
                    </p>
                    <Link className='btn' to='album'>
                      See Album
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='album-container'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/album/img-1.jpg')}
                  alt=''
                />
                <div className='overlay'></div>
                <div className='info-block'>
                  <div className='album-title'>
                    <h3>Titan Slayer</h3>
                    <h2>Sisters of Fury</h2>
                  </div>
                  <div className='show-on-hover'>
                    <div className='sep'></div>
                    <p>
                      Sed est risus, interdum id posuere et, fringilla id ipsum.
                      Cras lacinia ipsum nisi, at sagittis leo sodales eget amet
                      vitea
                    </p>
                    <a href='album-single.html' className='btn'>
                      See Album
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='album-container'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/album/img-1.jpg')}
                  alt=''
                />
                <div className='overlay'></div>
                <div className='info-block'>
                  <div className='album-title'>
                    <h3>Between Colors</h3>
                    <h2>Sea Lover</h2>
                  </div>
                  <div className='show-on-hover'>
                    <div className='sep'></div>
                    <p>
                      Sed est risus, interdum id posuere et, fringilla id ipsum.
                      Cras lacinia ipsum nisi, at sagittis leo sodales eget amet
                      vitea
                    </p>
                    <a href='album-single.html' className='btn'>
                      See Album
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-wrapper pdt-70'>
            <a href='albums.html' className='btn'>
              All Albums
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumsPreview
