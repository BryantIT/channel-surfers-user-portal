import React, { Fragment } from 'react'
import './style.css'

const Welcome = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10 col-lg-offset-1'>
            <h1 className='rock_welcome'>
              Welcome to the{' '}
              <strong>
                Channel Surfers
              </strong>{' '}
            </h1>
            <p>
              One of the things that make great shows so great is the music.  
              Whether it's an amazing score for a blockbuster hit or the opening theme to a TV show,
              music sets the tone for what's to come. We are a group of people who have probably watched way too much TV who wants to share our love for movies and shows and their music with all of you. Won't you join us? {' '}
            </p>
          </div>
          <div className='clearfix'></div>
          <div className='col-lg-12'>
            <div className='rock_divider'></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Welcome
