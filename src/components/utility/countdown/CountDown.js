import React from 'react'
// Stylesheet
import './style.css'

const CountDown = () => {
  return (
    <div className='coming-soon-page-wrapper '>
      <div className='overlay-section'>
        <div className='section'>
          <div className='container'>
            <div className='site-branding'>
              <a href='index.html' className='colored'>
                Music Base
              </a>
            </div>
            <h1 className='colored-orange'>
              Hidden in Stars - Lacuna Coil Launching Album{' '}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati odio adipisci maxime iure magnam, commodi est nobis
              beatae molestias id et perspiciatis alias iste consequatur. Nihil
              quidem molestias at obcaecati this accusamus vitae dolorem at
              alias iste elir it, vcommodi est nobis at consequatur.
            </p>
          </div>
          <div className='coming-soon-countdown'>
            <ul
              className='countdown clearfix start_countdown'
              data-date='15 november 2016 12:00:00'
            >
              <li>
                <span className='days'>00</span>
                <span className='timeRefDays'>days</span>
              </li>
              <li>
                <span className='hours'>00</span>
                <span className='timeRefHours'>hours</span>
              </li>
              <li>
                <span className='minutes'>00</span>
                <span className='timeRefMinutes'>mins</span>
              </li>
              <li>
                <span className='seconds'>00</span>
                <span className='timeRefSeconds'>secs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountDown
