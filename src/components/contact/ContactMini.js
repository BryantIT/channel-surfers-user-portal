import React from 'react'
// Stylesheet
import './style.css'

const ContactMini = () => {
  return (
    <div className='contact-home-wrapper'>
      <div className='overlay-section'>
        <div className='container section'>
          <div className='section-title pdb-60'>
            <h2>
              <span className='title-lines left'></span>
              Get in Touch
              <span className='title-lines right'></span>
            </h2>
          </div>
          <div className='row form-row'>
            <form
              className='col-xs-12 general-form clearfix'
              name='contact'
              id='contact-form'
            >
              <div className='row'>
                <div className='field col-sm-4'>
                  <h5>
                    Your Name <span>*</span>
                  </h5>
                  <input
                    name='name'
                    type='text'
                    title='Please type your name.'
                    placeholder='Name...'
                  />
                </div>
                <div className='field col-sm-4'>
                  <h5>
                    Your Email <span>*</span>
                  </h5>
                  <input
                    name='email'
                    type='text'
                    title='Please type your email.'
                    placeholder='Email...'
                  />
                </div>
                <div className='field col-sm-4'>
                  <h5>Your Subject</h5>
                  <input name='Subject' type='text' placeholder='Subject...' />
                </div>
              </div>
              <div className='field'>
                <h5>
                  Your Message <span>*</span>
                </h5>
                <textarea
                  name='message'
                  cols='15'
                  rows='5'
                  placeholder='Message...'
                  title='Please type a message.'
                ></textarea>
              </div>
              <button className='btn big'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMini
