import React from 'react'
// Stylesheet
import './style.css'

const FourOhFour = () => {
  return (
    <div className='page-404-wrapper'>
      <div className='container section'>
        <div className='row'>
          <div className='col-md-10 col-md-offset-1'>
            <div className='content-404'>
              <div className='overlay'></div>
              <h1 className='colored'>
                4<span className='colored-orange'>0</span>4
              </h1>
              <p>
                Looks like the page you're trying to visit dosen't exist. Please
                check the URL and try again
              </p>
              <a href='index.html' className='btn btn-md'>
                Take Me Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourOhFour
