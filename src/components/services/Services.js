import React, { Fragment } from 'react'
import './style.css'
import { GiSurferVan } from 'react-icons/gi'
import { SiBandsintown } from 'react-icons/si'
import { TiGroupOutline } from 'react-icons/ti'
import { TbHeartHandshake } from 'react-icons/tb'

const Services = () => {
  return (
    <Fragment>
      <div className='rock_heading_div'>
        <div className='rock_heading'>
          <p>
            <GiSurferVan />
          </p>
        </div>
      </div>
      <div className='rock_service_div'>
        <div className='container'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-4 rock_service'>
                <div className='rock_service_icon'>
                  <TbHeartHandshake />
                </div>
                <h2>Collaborate</h2>
                <p>Want to work on a project or stream together?</p>
                <div className='rock_service_read_more'>
                  {' '}
                  <a href='services.html'> Read More </a>{' '}
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 rock_service'>
                <div className='rock_service_icon'>
                  <TiGroupOutline />
                </div>
                <h2>Fan Club</h2>
                <p>They like us! They Really Like Us!</p>
                <div className='rock_service_read_more'>
                  {' '}
                  <a href='services.html'> Read More </a>{' '}
                </div>
              </div>
              <div className='col-lg-4 col-md-4 col-sm-4 rock_service'>
                <div className='rock_service_icon'>
                  <SiBandsintown />{' '}
                </div>
                <h2>Book Us</h2>
                <p>Want us to play your event? We are down!</p>
                <div className='rock_service_read_more'>
                  {' '}
                  <a href='services.html'> Read More </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Services
