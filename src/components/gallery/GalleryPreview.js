import React from 'react'
// Icons
import { AiOutlinePlusSquare } from 'react-icons/ai'
// Stylesheet
import './style.css'

const GalleryPreview = () => {
  return (
    <div>
      <div className='container section'>
        <div className='section-title pdb-60'>
          <h2>
            <span className='title-lines left'></span>
            Gallery
            <span className='title-lines right'></span>
          </h2>
        </div>
        <div className='gallery-container-wrapper'>
          <div id='gallery-container' className='gallery-container'>
            <div className='gallery-item'>
              <a href={require('../../assets/imgs/galleries/big-img-1.jpg')}>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-1.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item double'>
              <a href="'../../assets/imgs/galleries/big-img-1.jpg')">
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-4.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item'>
              <a href='assets/img/galleries/big-img-3.jpg'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-3.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item'>
              <a href='assets/img/galleries/big-img-5.jpg'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-5.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item'>
              <a href='assets/img/galleries/big-img-2.jpg'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-2.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item'>
              <a href='assets/img/galleries/big-img-7.jpg'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-7.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item double'>
              <a href='assets/img/galleries/big-img-8.jpg'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-8.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
            <div className='gallery-item'>
              <a href='assets/img/galleries/big-img-6.jpg'>
                <img
                  className='img-responsive'
                  src={require('../../assets/imgs/galleries/img-6.jpg')}
                  alt=''
                />
                <div className='overlay'>
                  <i>
                    <AiOutlinePlusSquare />
                  </i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryPreview
