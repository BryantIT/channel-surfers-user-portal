import React, { Fragment } from 'react'
// Icons
import { FiPlayCircle } from 'react-icons/fi'
// Stylesheet
import './style.css'

const GalleryVideos = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container'>
          <div className='ph-inner-wrapper'>
            <h3 className='title'>Video Gallery</h3>
          </div>
        </div>
      </div>
      <div className='video-gallery-page-wrapper'>
        <div className='container section'>
          <div className='row'>
            <div className='nivo-activator'></div>
            <div className='col-sm-6'>
              <a
                href='https://www.youtube.com/watch?v=TccV47GcR90'
                className='nivo-trigger'
                data-lightbox-gallery='gallery3'
              >
                <div className='gallery-video-wrapper'>
                  <div className='info-block'>
                    <FiPlayCircle className='play' />
                    <h3 className='colored'>Titan Slayer Live In Atlantis</h3>
                    <h4 className='colored-orange'>Titan Slayer</h4>
                  </div>
                  <img
                    src={require('../../assets/imgs/galleries/video-gallery-1.jpg')}
                    alt=''
                    className='img-responsive'
                  />
                </div>
              </a>
            </div>
            <div className='col-sm-6'>
              <a
                href='https://www.youtube.com/watch?v=UT3edR1-D0U'
                className='nivo-trigger'
                data-lightbox-gallery='gallery3'
              >
                <div className='gallery-video-wrapper'>
                  <div className='info-block'>
                    <FiPlayCircle className='play' />
                    <h3 className='colored'>Red Lights (Official Video)</h3>
                    <h4 className='colored-orange'>Tiesto</h4>
                  </div>
                  <img
                    src={require('../../assets/imgs/galleries/video-gallery-2.jpg')}
                    alt=''
                    className='img-responsive'
                  />
                </div>
              </a>
            </div>
            <div className='col-sm-6'>
              <a
                href='https://www.youtube.com/watch?v=jMwfbhpgGys'
                className='nivo-trigger'
                data-lightbox-gallery='gallery3'
              >
                <div className='gallery-video-wrapper'>
                  <div className='info-block'>
                    <FiPlayCircle className='play' />
                    <h3 className='colored'>Wasted (Live)</h3>
                    <h4 className='colored-orange'>Lacuna Coil</h4>
                  </div>
                  <img
                    src={require('../../assets/imgs/galleries/video-gallery-3.jpg')}
                    alt=''
                    className='img-responsive'
                  />
                </div>
              </a>
            </div>
            <div className='col-sm-6'>
              <a
                href='https://www.youtube.com/watch?v=DD1-FV_vRz0'
                className='nivo-trigger'
                data-lightbox-gallery='gallery3'
              >
                <div className='gallery-video-wrapper'>
                  <div className='info-block'>
                    <FiPlayCircle className='play' />
                    <h3 className='colored'>Their first open sky concert.</h3>
                    <h4 className='colored-orange'>Future Studio</h4>
                  </div>
                  <img
                    src={require('../../assets/imgs/galleries/video-gallery-4.jpg')}
                    alt=''
                    className='img-responsive'
                  />
                </div>
              </a>
            </div>
            <div className='col-sm-6'>
              <a
                href='https://www.youtube.com/watch?v=iFeBMRsveHo'
                className='nivo-trigger'
                data-lightbox-gallery='gallery3'
              >
                <div className='gallery-video-wrapper'>
                  <div className='info-block'>
                    <FiPlayCircle className='play' />
                    <h3 className='colored'>Our best bands Together</h3>
                    <h4 className='colored-orange'>Future Studio</h4>
                  </div>
                  <img
                    src={require('../../assets/imgs/galleries/video-gallery-5.jpg')}
                    alt=''
                    className='img-responsive'
                  />
                </div>
              </a>
            </div>
            <div className='col-sm-6'>
              <a
                href='https://www.youtube.com/watch?v=5HWYFCzulFQ'
                className='nivo-trigger'
                data-lightbox-gallery='gallery3'
              >
                <div className='gallery-video-wrapper '>
                  <div className='info-block'>
                    <FiPlayCircle className='play' />
                    <h3 className='colored'>
                      A New artist comes to Future Studio
                    </h3>
                    <h4 className='colored-orange'>Future Studio</h4>
                  </div>
                  <img
                    src={require('../../assets/imgs/galleries/video-gallery-6.jpg')}
                    alt=''
                    className='img-responsive'
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default GalleryVideos
