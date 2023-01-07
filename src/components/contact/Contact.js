import React, { Fragment } from 'react'
// Stylesheet
import './style.css'

const Contact = () => {
  return (
    <Fragment>
      <div className='contact-home-wrapper'>
        <div className='overlay-section'>
          <div className='container section'>
            <div className='section-title pdb-60'>
              <h2>
                <span className='title-lines left'></span>
                Contact Us
                <span className='title-lines right'></span>
              </h2>
            </div>

            <div className='row contact-page-wrapper'>
              <div className='col-md-6 '>
                <div className='contact-info'>
                  <h4>How you can find us</h4>
                  <h5>
                    <span>Adress:</span> Adress no50. Some City, Some State
                  </h5>
                  <h5>
                    <span>Phone:</span> +40123456789
                  </h5>
                  <h5>
                    <span>Email:</span> musicbase@spameail.com
                  </h5>
                  <h5>
                    <span>Program:</span> Monday - Friday: 08:00 - 23:00
                  </h5>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='info-block'>
                  <h4>We respond to emails in 2-3 working days</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti fugit voluptatum dolores recusandae eveniet
                    cupiditate.
                  </p>
                  <br />
                  <p>
                    Nam eligendi consequuntur ab adipisci numquam fuga nisi
                    optio non quis, aliquid nemo. Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className='row contact-from'>
              <form
                className='col-xs-12 general-form clearfix'
                action='contact.php'
                method='post'
                name='contact'
                id='contact-form'
              >
                <div className='field-group row'>
                  <div className='field col-sm-4'>
                    <h5>
                      Your Name <span>*</span>
                    </h5>
                    <input
                      name='name'
                      type='text'
                      className='required'
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
                      className='required'
                      title='Please type your email.'
                      placeholder='Email...'
                    />
                  </div>
                  <div className='field col-sm-4'>
                    <h5>Your Subject</h5>
                    <input
                      name='Subject'
                      type='text'
                      placeholder='Subject...'
                    />
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
                    className='required'
                    placeholder='Message...'
                    title='Please type a message.'
                  ></textarea>
                </div>
                <button className='btn big'>
                  <i className='fa fa-paper-plane'></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
