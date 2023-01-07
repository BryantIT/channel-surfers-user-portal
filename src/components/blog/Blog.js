import React, { Fragment } from 'react'
// Icons
import { GoQuote } from 'react-icons/go'
import {
  FaFacebook,
  FaTwitter,
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa'
// Stylesheet
import './style.css'

const Blog = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container'>
          <div className='ph-inner-wrapper'>
            <h3 className='title'>Blog Single</h3>
          </div>
        </div>
      </div>
      <div className='blog-page-wrapper container section'>
        <div className='row'>
          <div className='col-md-10 col-md-offset-1 blog-posts'>
            <article className='blog-post'>
              <header className='post-header'>
                <h2 className='title'>A concert that we will never forget</h2>
                <div className='meta'>
                  <p className='user'>
                    <span>by:</span> Future Themes
                  </p>
                  <p className='line'>/</p>
                  <p className='date'>
                    <span>on:</span> Thuesday 21, Jully 2016
                  </p>
                </div>
                <img
                  src={require('../../assets/imgs/blog/single-img.jpg')}
                  alt=''
                  className='img-responsive bordered'
                />
              </header>
              <p>
                In at pharetra augue. Integer accumsan mattis sollicitudin.
                Nulla sollicitudin consequat elementum in tincidunt ero ue
                convallis. Fusce nec fringilla felis. Quisque phare tra vel nibh
                necnterdum et malesuada ames acimis in faucibus. in ex faucibus
                porttitor. Nullam aliquam condimentum Aenean placerat condiment
                m mi a maximus. Phasellus odio lor omnis perspiciatis ad,
                molestiae beatae placeat quibusdam sit corporis impedit harum
                molestias qui laborum as ratione itaque nesciunt dignissimos
                asperiores veniam! Rem ea tenetur repellat animi totam
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis possimus pariatur necessitatibus cum vitae, dolores,
                nisi temporibus excepturi fuga unde, eum illo quam nam ad
                debitis. Dignissimos quae quisquam exercitationem nisi cum earum
                quia aperiam, excepturi error. Aliquid officiis eveniet,
                obcaecati blanditiis accusamus excepturi error?
              </p>
              <h4>Lorem Ipsum The Cite</h4>
              <blockquote className='clearfix'>
                <GoQuote className='quoteIcon' />
                <div className='bq-content'>
                  <p>
                    Humility and the willingness to learn in order to go beyond
                    our current limitations are at the heart and soul of
                    innovation.
                  </p>
                  <h5>Future Themes</h5>
                </div>
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                amet, minima, velit ex, illum tenetur facilis deleniti enim in
                alias consectetur. Placeat cupiditate commodi eum, dolorum quam
                suscipit maxime sint sunt optio nobis veritatis, natus officiis
                itaque sed ab eveniet minima magnam cumque! Quisquam, quas id
                excepturi necessitatibus vitae sint.
              </p>
              <p>
                In at pharetra augue. Integer accumsan mattis sollicitudin.
                Nulla sollicitudin consequat elementum in tincidunt eronon
                tellus tristique convallis. Fusce nec fringilla felis. Quisque
                phare tra vel nibh necnterdum et malesuada fames acimis in
                faucibus. Fusce ut augue in ex faucibus porttitor. Nullam
                aliquam condimentum Aenean placerat condimentm mi a maximus.
                Phasellus odio nunc, lacinia quis fringilla viverra, placerat
                imperdiet orci. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Explicabo pariatur eligendi non culpa,
                consequuntur itaque harum, assumenda, sapiente distinctio
                tempora iste? Facere optio temporibus.
              </p>
              <ul className='tags clearfix'>
                <li className='tag'>
                  <a href='#'>
                    <span>Events</span>
                  </a>
                </li>
                <li className='tag'>
                  <a href='#'>
                    <span>Lipsum</span>
                  </a>
                </li>
                <li className='tag'>
                  <a href='#'>
                    <span>Pellentesque</span>
                  </a>
                </li>
                <li className='tag'>
                  <a href='#'>
                    <span>Metal</span>
                  </a>
                </li>
                <li className='tag'>
                  <a href='#'>
                    <span>Nightlife</span>
                  </a>
                </li>
                <li className='tag'>
                  <a href='#'>
                    <span>Dubstep</span>
                  </a>
                </li>
                <li className='tag'>
                  <a href='#'>
                    <span>Tag Eleven</span>
                  </a>
                </li>
              </ul>
            </article>
            <div className='author'>
              <img
                src={require('../../assets/imgs/blog/auth.jpg')}
                alt=''
                className='bordered'
              />
              <h3>Future Themes</h3>
              <p>
                Quisque phare tra vel nibh necnterdum et malesuada fames acimis
                in faucibus ue in ex faucibus porttitor. Nullam aliquam
                condimentum Aenean placerat cond. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.{' '}
              </p>
              <ul className='social-icons'>
                <li>
                  <a href='http://facebook.com'>
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href='http://twitter.com'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='http://spotify.com'>
                    <FaSpotify />
                  </a>
                </li>
                <li>
                  <a href='http://soundcloud.com'>
                    <FaSoundcloud />
                  </a>
                </li>
                <li>
                  <a href='http://youtube.com'>
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href='http://youtube.com'>
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
            </div>
            <div className='comments'>
              <h4 className='title'>There are 3 comments on this post</h4>
              <ul className='comments-list'>
                <li className='comment '>
                  <div className='comment-author relative-pos clearfix'>
                    <img
                      src={require('../../assets/imgs/blog/comment-1.jpg')}
                      alt=''
                      className='bordered'
                    />
                    <h4 className='name'>Rebecca Pearson</h4>
                    <h5 className='meta'>Thuesday 21, Jully 2016</h5>
                  </div>
                  <p>
                    Praesent eu ante sed libero viverra as sed faucius massa.
                    Vestibulum at mollis lorem, et lobortis mauris. Morbi neque
                    orci, lacinia vitae suscipit eu, viverra ac justo. Integer
                    tristique
                  </p>
                  <a href='#' className='btn btn-xs'>
                    Reply
                  </a>
                </li>
                <li className='comment sub-comment'>
                  <div className='comment-author relative-pos clearfix'>
                    <img
                      src={require('../../assets/imgs/blog/comment-2.jpg')}
                      alt=''
                      className='bordered'
                    />
                    <h4 className='name'>Future Themes</h4>
                    <h5 className='meta'>Thuesday 22, Jully 2016</h5>
                  </div>
                  <p>
                    Praesent eu ante sed libero viverra as sed faucius massa.
                    Vestibulum at mollis lorem, et lobortis mauris.{' '}
                  </p>
                  <a href='#' className='btn btn-xs'>
                    Reply
                  </a>
                </li>
                <li className='comment'>
                  <div className='comment-author relative-pos clearfix'>
                    <img
                      src={require('../../assets/imgs/blog/comment-3.jpg')}
                      alt=''
                      className='bordered'
                    />
                    <h4 className='name'>Rebecca Pearson</h4>
                    <h5 className='meta'>Thuesday 21, Jully 2016</h5>
                  </div>
                  <p>
                    Praesent eu ante sed libero viverra as sed faucius massa.
                    Vestibulum at mollis lorem, et lobortis mauris. Morbi neque
                    orci, lacinia vitae suscipit eu, viverra ac justo. Integer
                    tristique
                  </p>
                  <a href='#' className='btn btn-xs'>
                    Reply
                  </a>
                </li>
              </ul>
            </div>
            <div className='comment-form'>
              <h4 className='title'>Leave a comment</h4>
              <form
                className='general-form clearfix'
                action='#'
                method='post'
                name='contact'
                id='comment-form'
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
                    <h5>Your Site</h5>
                    <input name='website' type='text' placeholder='website' />
                  </div>
                </div>
                <div className='field'>
                  <h5>
                    Your Comment <span>*</span>
                  </h5>
                  <textarea
                    name='message'
                    cols='15'
                    rows='5'
                    className='required'
                    placeholder='Comment...'
                    title='Please type a comment'
                  ></textarea>
                </div>
                <button className='btn big'>Add Comment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Blog
