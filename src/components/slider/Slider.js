import React, { Fragment } from 'react'
import './style.css'

const Slider = () => {
  return (
    <Fragment>
      <section className='main'>
        <div className='wrapper'>
          <div className='slideshows'>
            <div className='slideshow slideshow--hero'>
              <div className='slides'>
                <div className='slide slide1'></div>
                <div className='slide slide2'></div>
                <div className='slide slide3'></div>
                <div className='slide slide4'></div>
              </div>
            </div>
            <div className='slideshow slideshow--contrast slideshow--contrast--before'>
              <div className='slides'>
                <div className='slide slide1'></div>
                <div className='slide slide2'></div>
                <div className='slide slide3'></div>
                <div className='slide slide4'></div>
              </div>
            </div>
            <div className='slideshow slideshow--contrast slideshow--contrast--after'>
              <div className='slides'>
                <div className='slide slide1'></div>
                <div className='slide slide2'></div>
                <div className='slide slide3'></div>
                <div className='slide slide4'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Slider
