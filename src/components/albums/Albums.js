import React from 'react'
// Stylesheet
import './style.css'

const Albums = () => {
  return (
    <div className='container section'>
      <ul id='filter'>
        <li className='selected' data-filter='*'>
          {' '}
          <span>All</span>
        </li>
        <li data-filter='.album-801'>Rock</li>
        <li data-filter='.album-802'>Trance</li>
        <li data-filter='.album-803'>Dubstep</li>
        <li data-filter='.album-804'>Rap</li>
      </ul>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='album-container'>
            <img
              className='img-responsive'
              src={require('../../assets/imgs/album/img-1.jpg')}
              alt=''
            />
            <div className='overlay'></div>
            <div className='info-block'>
              <div>
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
                <a href='album-single.html' className='btn'>
                  See Album
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4 album-801 album-802 album-805'>
          <div className='album-container'>
            <img
              className='img-responsive'
              src={require('../../assets/imgs/album/img-2.jpg')}
              alt=''
            />
            <div className='overlay'></div>
            <div className='info-block'>
              <div>
                <h3>Titan Slayer</h3>
                <h2>Sisters of Fury</h2>
              </div>
              <div className='show-on-hover'>
                <div className='sep'></div>
                <p>
                  Sed est risus, interdum id posuere et, fringilla id ipsum.Cras
                  lacinia ipsum nisi, at sagittis leo sodales eget amet vitea
                </p>
                <a href='album-single.html' className='btn'>
                  See Album
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4 album-804 album-805 album-802'>
          <div className='album-container'>
            <img
              className='img-responsive'
              src={require('../../assets/imgs/album/img-3.jpg')}
              alt=''
            />
            <div className='overlay'></div>
            <div className='info-block'>
              <div>
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
        <div className='col-sm-4 album-803  album-801'>
          <div className='album-container'>
            <img
              className='img-responsive'
              src={require('../../assets/imgs/album/img-4.jpg')}
              alt=''
            />
            <div className='overlay'></div>
            <div className='info-block'>
              <div>
                <h3>JANET RICHARD</h3>
                <h2>The Dream</h2>
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
              src={require('../../assets/imgs/album/img-5.jpg')}
              alt=''
            />
            <div className='overlay'></div>
            <div className='info-block'>
              <div>
                <h3>Evergreen</h3>
                <h2>You in Orange</h2>
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
              src={require('../../assets/imgs/album/img-6.jpg')}
              alt=''
            />
            <div className='overlay'></div>
            <div className='info-block'>
              <div>
                <h3>Astralia</h3>
                <h2>The Prayer</h2>
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
    </div>
  )
}

export default Albums
