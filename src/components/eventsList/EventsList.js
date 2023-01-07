import React from 'react'
// Stylesheet
import './style.css'

const EventsList = () => {
  return (
    <div className='events-home-wrapper'>
      <div className='overlay-section'>
        <div className='container section'>
          <div className='section-title '>
            <h2 className='orange'>
              <span className='title-lines left'></span>
              Events
              <span className='title-lines right'></span>
            </h2>
          </div>
          <div className='events'>
            <div className='next-event-countdown'>
              <ul
                className='events-home-countdown clearfix'
                data-date='31 october 2016 12:00:00'
              >
                <li>
                  <span className='days'>00</span>
                  <span>days</span>
                </li>
                <li>
                  <span className='hours'>00</span>
                  <span>hours</span>
                </li>
                <li>
                  <span className='minutes'>00</span>
                  <span>mins</span>
                </li>
                <li>
                  <span className='seconds'>00</span>
                  <span>secs</span>
                </li>
              </ul>
            </div>

            <div className='event clearfix'>
              <div className='date'>
                <h2 className='colored-orange'>31</h2>
                <p className='colored-orange'>Oct, 2016</p>
              </div>
              <h3 className='title'>Nocturna Show in Bucharest</h3>
              <h5 className='location'>DAOS Club, Timisoara</h5>
              <div className='btn-wrapper'>
                <a href='event-single.html' className='btn btn-sm orange'>
                  Buy Tickets
                </a>
              </div>
            </div>
            <div className='event clearfix'>
              <div className='date'>
                <h2>22</h2>
                <p>Nov, 2016</p>
              </div>
              <h3 className='title'>Titan Slayer Live in Underground Pub</h3>
              <h5 className='location'>Mihai Viteazul, no.5, Buzau</h5>
              <div className='btn-wrapper'>
                <a href='event-single.html' className='btn btn-sm'>
                  Buy Tickets
                </a>
              </div>
            </div>
            <div className='event clearfix'>
              <div className='date'>
                <h2>29</h2>
                <p>Nov, 2016</p>
              </div>
              <h3 className='title'>Clitgore at Rockstad Extreme Fest</h3>
              <h5 className='location'>Rasnov, Brasov, Romania</h5>
              <div className='btn-wrapper'>
                <a href='event-single.html' className='btn btn-sm'>
                  Buy Tickets
                </a>
              </div>
            </div>
            <div className='event clearfix even'>
              <div className='date'>
                <h2>16</h2>
                <p>Dec, 2016</p>
              </div>
              <h3 className='title'>
                K Project First Public Show in Altlantis
              </h3>
              <h5 className='location'>Tineretului Park, Buzau</h5>
              <div className='btn-wrapper'>
                <a href='event-single.html' className='btn btn-sm'>
                  Buy Tickets
                </a>
              </div>
            </div>
            <div className='event clearfix'>
              <div className='date'>
                <h2>31</h2>
                <p>Dec, 2016</p>
              </div>
              <h3 className='title'>Titan Slyer New Years Day!</h3>
              <h5 className='location'>Location no.45, Romania</h5>
              <div className='btn-wrapper'>
                <a href='event-single.html' className='btn btn-sm'>
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
          <div className='btn-wrapper pdt-70 multiple-btn'>
            <a href='events-list.html' className='btn first'>
              All Events
            </a>
            <a href='events-masonry.html' className='btn orange'>
              Past Events
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsList
