import React, { Fragment } from 'react'
// Components
import MediaPlayer from '../utility/mediaPlayer/MediaPlayer'
import './style.css'

const Tracks = () => {
  return (
    <Fragment>
      <div className='clearfix'></div>
      <div className='container'>
        <div className='rock_club_track_main'>
          <div className='rock_club_track'>
            <div className='rock_club_track_div'>
              <div className='col-lg-8 col-md-12 col-sm-12'>
                <div className='row'>
                  <div className='col-lg-5 col-md-12 col-sm-12'>
                    <MediaPlayer />
                  </div>
                  <div className='col-lg-7 col-md-12 col-sm-12'>
                    <div className='rock_track_playlist'>
                      <h1>
                        <span className='label label-default'>Rockon</span> Club
                        Track
                      </h1>
                      <ul className='rock_track_playlist_slider'>
                        <li>
                          {' '}
                          <img
                            src='https://dummyimage.com/95x95'
                            alt='track artist'
                          />
                          <div className='rock_track_detail'>
                            {' '}
                            <a href='' className='rock_track_title'>
                              <span className='rock_track_artist'>
                                Taylor Swift :
                              </span>{' '}
                              I Knew You Were Trouble
                            </a>
                            <p>
                              {' '}
                              <span className='rock_rating'>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-1-5'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-1-5'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-1-4'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-1-4'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-1-3'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-1-3'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-1-2'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-1-2'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-1-1'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-1-1'
                                  className='rating-star'
                                ></label>
                              </span>{' '}
                            </p>
                            <a
                              data-toggle='modal'
                              data-target='.myModal'
                              className='rock_track_play btn btn-default btn-sm'
                            >
                              Play
                            </a>{' '}
                            <a
                              id='sh1'
                              className='rock_share_track rock_track_play btn btn-default btn-sm'
                            >
                              Share
                            </a>
                            <div className='rock_social sh1'>
                              <ul>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-facebook'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-twitter'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-google-plus'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-pinterest'></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          {' '}
                          <img
                            src='https://dummyimage.com/95x95'
                            alt='track artist'
                          />
                          <div className='rock_track_detail'>
                            {' '}
                            <a href='' className='rock_track_title'>
                              <span className='rock_track_artist'>
                                Taylor Swift :
                              </span>{' '}
                              I Knew You Were Trouble
                            </a>
                            <p>
                              {' '}
                              <span className='rock_rating'>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-2-5'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-2-5'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-2-4'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-2-4'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-2-3'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-2-3'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-2-2'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-2-2'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-2-1'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-2-1'
                                  className='rating-star'
                                ></label>
                              </span>{' '}
                            </p>
                            <a
                              data-toggle='modal'
                              data-target='.myModal'
                              className='rock_track_play btn btn-default btn-sm'
                            >
                              Play
                            </a>{' '}
                            <a
                              id='sh2'
                              className='rock_share_track rock_track_play btn btn-default btn-sm'
                            >
                              Share
                            </a>
                            <div className='rock_social sh2'>
                              <ul>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-facebook'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-twitter'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-google-plus'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-pinterest'></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          {' '}
                          <img
                            src='https://dummyimage.com/95x95'
                            alt='track artist'
                          />
                          <div className='rock_track_detail'>
                            {' '}
                            <a href='' className='rock_track_title'>
                              <span className='rock_track_artist'>
                                Taylor Swift :
                              </span>{' '}
                              I Knew You Were Trouble
                            </a>
                            <p>
                              {' '}
                              <span className='rock_rating'>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-3-5'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-3-5'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-3-4'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-3-4'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-3-3'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-3-3'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-3-2'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-3-2'
                                  className='rating-star'
                                ></label>
                                <input
                                  type='radio'
                                  className='rating-input'
                                  id='rating-input-3-1'
                                  name='rating-input-1'
                                />
                                <label
                                  for='rating-input-3-1'
                                  className='rating-star'
                                ></label>
                              </span>{' '}
                            </p>
                            <a
                              data-toggle='modal'
                              data-target='.myModal'
                              className='rock_track_play btn btn-default btn-sm'
                            >
                              Play
                            </a>{' '}
                            <a
                              id='sh3'
                              className='rock_share_track rock_track_play btn btn-default btn-sm'
                            >
                              Share
                            </a>
                            <div className='rock_social sh3'>
                              <ul>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-facebook'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-twitter'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-google-plus'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href=''>
                                    <i className='fa fa-pinterest'></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className='rock_playlist_slider_control'>
                        {' '}
                        <span id='rock_track_playlist_slider_prev'></span>{' '}
                        <span id='rock_track_playlist_slider_next'></span>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='modal animated bounceIn myModal'
                tabindex='-1'
                role='dialog'
                aria-labelledby='myModalLabel'
                aria-hidden='false'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-hidden='true'
                      >
                        &times;
                      </button>
                      <h4
                        className='modal-title rock_audio_player_title'
                        id='myModalLabel'
                      >
                        {' '}
                        <span className='track_artist'>Taylor Swift :</span> I
                        Knew You Were Trouble
                      </h4>
                    </div>
                    <div className='modal-body'>
                      <div className='rock_audio_player'>
                        <div className='rock_audio_player_track_image'>
                          {' '}
                          <img
                            src='../assets/images/track_image/track1.jpg'
                            alt='track 1'
                          />
                          <div className='rock_audio_player_track_image_overlay'>
                            Taylor Swift : I Knew You Were Trouble
                          </div>
                        </div>
                        <div className='audio-player'>
                          <audio
                            className='rock_player'
                            src='../assets/track/i-knew-you-were-trouble.mp3'
                            type='audio/mp3'
                            controls
                          ></audio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='rock_vip_book'>
                  <h2>
                    <span className='label label-default'>VIP</span> Booking
                  </h2>
                  <p>
                    Nulla or narm mus vel ultrici. Quisque ve odio nibh. Fusce
                    vel dignissim orm, ac esuada massa.
                  </p>
                  <p>
                    <a href=''>
                      <i className='fa fa-phone'></i> +12 3456 789
                    </a>
                  </p>
                  <p>
                    <a href=''>
                      <i className='fa fa-mobile-phone'></i> +987 6543 21
                    </a>
                  </p>
                  <a href='booking.html' className='btn btn-default btn-lg'>
                    Book Now
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Tracks
