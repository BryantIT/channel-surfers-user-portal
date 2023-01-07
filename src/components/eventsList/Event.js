import React, { Fragment } from 'react'
// Stylesheet
import './style.css'

const Event = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container'>
          <div className='ph-inner-wrapper'>
            <h3 className='title'>Event Single</h3>
          </div>
        </div>
      </div>
      <div className='event-page-wrapper'>
        <div className='container section'>
          <div className='row'>
            <div className='col-sm-12 col-md-10 col-md-offset-1'>
              <article className='event-post'>
                <h2 className='title'>Atlantis Summer Fest 2016</h2>
                <img
                  src={require('../../assets/imgs/events/event-single.jpg')}
                  alt=''
                  className='img-responsive bordered'
                />
                <div className='row'>
                  <div className='details col-sm-4'>
                    <h5>
                      Date:<span>25 Jully, 2016</span>
                    </h5>
                    <h5>
                      Time:<span>09:30PM - 06:30AM</span>{' '}
                    </h5>
                    <h5>
                      Tickets:<span>680</span>
                    </h5>
                    <h5>
                      Price:<span>$25.00</span>
                    </h5>
                    <h5>
                      Organizer:<span>Tessence Pub</span>
                    </h5>
                    <h5>
                      Telephone:<span>+40 123456789</span>
                    </h5>
                    <h5>
                      Email:<span>email@mailservice.com</span>
                    </h5>
                    <a href='#' className='btn btn-md'>
                      Buy Tickets
                    </a>
                  </div>
                  <div className='description col-sm-8'>
                    <p>
                      In at pharetra augue. Integer accumsan mattis
                      sollicitudin. Nulla sollicitudin consequat elementum in
                      tincidunt ero ue convallis. Fusce nec fringilla felis.
                      Quisque phare tra vel nibh necnterdum et malesuada ames
                      acimis in faucibus. in ex faucibus porttitor. Nullam
                      aliquam condimentum Aenean placerat condiment m mi a
                      maximus. Phasellus odio lor omnis perspiciatis ad,
                      molestiae beatae placeat quibusdam sit corporis.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis possimus pariatur necessitatibus cum vitae,
                      dolores, nisi temporibus excepturi fuga unde, eum illo
                      quam nam ad debitis. Dignissimos quae quisquam
                      exercitationem nisi cum earum quia aperiam, excepturi
                      error. Aliquid officiis eveniet, obcaecati blanditiis
                      accusamus excepturi error?
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className='row similar-events'>
            <div className='col-sm-12'>
              <h3>More Events</h3>
            </div>
            <div className='col-sm-4'>
              <div className='similar-ev'>
                <img
                  src={require('../../assets/imgs/events/simillar-2.jpg')}
                  alt='Image'
                  className='img-responsive'
                />
                <div className='info-similar-ev'>
                  <a className='similar-ev-title' href='#'>
                    <h4>ADAM RILEY LIVE IN DAOS CLUB</h4>
                  </a>
                  <p className='user'>
                    <span>Date:</span>30 September, 2016
                  </p>
                  <p className='date'>
                    <span>Location:</span>Daos Club Timisoara
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='similar-ev'>
                <img
                  src={require('../../assets/imgs/events/simillar-3.jpg')}
                  alt='Image'
                  className='img-responsive'
                />
                <div className='info-similar-ev'>
                  <a className='similar-ev-title' href='#'>
                    <h4>ADAM RILEY LIVE IN DAOS CLUB</h4>
                  </a>
                  <p className='user'>
                    <span>Date:</span>30 September, 2016
                  </p>
                  <p className='date'>
                    <span>Location:</span>Daos Club Timisoara
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='similar-ev'>
                <img
                  src={require('../../assets/imgs/events/simillar-1.jpg')}
                  alt='Image'
                  className='img-responsive'
                />
                <div className='info-similar-ev'>
                  <a className='similar-ev-title' href='#'>
                    <h4>ADAM RILEY LIVE IN DAOS CLUB</h4>
                  </a>
                  <p className='user'>
                    <span>Date:</span>30 September, 2016
                  </p>
                  <p className='date'>
                    <span>Location:</span>Daos Club Timisoara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Event
