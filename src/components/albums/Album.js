import React from 'react'
// Components
import MusicPlayerSmall from '../musicplayer/MusicPlayerSmall'
// Stylesheet
import './style.css'

const Album = () => {
  return (
    <div className='album-single-page-wrapper'>
      <div className='container section'>
        <div className='row album-single'>
          <h2 className='album-name col-sm-12'>Lacuna - Coil Comalies</h2>

          <div className='col-md-4 col-sm-5 clearfix'>
            <div className='img-wrapper'>
              <img
                src={require('../../assets/imgs/album/album-single.jpg')}
                alt=''
                className='img-responsive'
              />
            </div>

            <div className='album-info'>
              <h4 className='title'>Album Info</h4>
              <ul className='meta'>
                <li className='clearfix'>
                  <span>Artist:</span>
                  <span>Lacuna Coil</span>
                </li>
                <li className='clearfix'>
                  <span>Release Date:</span>
                  <span>20 Jully, 2016</span>
                </li>
                <li className='clearfix'>
                  <span>Genre:</span>
                  <span>Rock, Pop, Melodic</span>
                </li>
                <li className='clearfix'>
                  <span>Produced by:</span>
                  <span>Future Studios</span>
                </li>
              </ul>

              <div className='buy clearfix'>
                <h4 className='price'>Price: $32.00</h4>
                <a href='#' className='btn btn-sm'>
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-sm-7'>
            <MusicPlayerSmall />

            <div className='album-entry-content'>
              <h4 className='title'>Description</h4>
              <p>
                Nullam id lacinia lectus. Sed ut ornare eros, sit amet accumsan
                arcu. Vestibulum sit amet felis vel tellus mattis aliquam.
                Vestibulum eget sagittis leo, ac gravida nisi. Duis suscipit
                dignissim ipsum in condimentum. Donec placerat quam turpis, non
                bibendum est tris tique ut. Sed dapibus urna sed augue dapibus,
                ac scelerisque mauris ultricies.
              </p>
              <p>
                Maecenas tempus nec libero at semper. Nam vulputate erat leo, ut
                aliquam erat efficitur sed. Nam facilisis, augue et vulputate
                luct purus nisl pretium arcu, non aliquet ligula mauris ut
                ipsum. Sed lacinia urna auctor enim accumsan, sed dapibus lectus
                efficitunte ger id varius mi, feugiat ultricies metus. Nullam
                interdum lobortis
              </p>
              <p>
                Nullam id lacinia lectus. Sed ut ornare eros, sit amet accumsan
                arcu. Vestibulum sit amet felis vel tellus mattis aliquam.
                Vestibulum eget sagittis leo
              </p>
            </div>
          </div>
        </div>
        <div className='row similar-albums'>
          <div className='col-sm-12'>
            <h3 className='title'>Similar Albums</h3>
          </div>
          <div className='col-sm-4'>
            <a className='similar-album' href='#'>
              <img
                src={require('../../assets/imgs/album/similar-album-1.jpg')}
                alt=''
                className='img-responsive'
              />
              <div className='info-block'>
                <h4>Dance Floor</h4>
                <h5>K Project</h5>
              </div>
            </a>
          </div>
          <div className='col-sm-4'>
            <a className='similar-album' href='#'>
              <img
                src={require('../../assets/imgs/album/similar-album-2.jpg')}
                alt=''
                className='img-responsive'
              />
              <div className='info-block'>
                <h4>Dance Floor</h4>
                <h5>K Project</h5>
              </div>
            </a>
          </div>
          <div className='col-sm-4'>
            <a className='similar-album' href='#'>
              <img
                src={require('../../assets/imgs/album/similar-album-3.jpg')}
                alt=''
                className='img-responsive'
              />
              <div className='info-block'>
                <h4>Dance Floor</h4>
                <h5>K Project</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Album
