import React, { Fragment } from 'react'
// Icons
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebook,
  FaTwitter,
  FaSpotify,
  FaSoundcloud,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa'
// Stylesheet
import './style.css'

const Blogs = () => {
  return (
    <Fragment>
      <div class='page-header'>
        <div class='container'>
          <div class='ph-inner-wrapper'>
            <h3 class='title'>Blog List</h3>
          </div>
        </div>
      </div>
      <div class='blog-page-wrapper container section'>
        <div class='row'>
          <div class='col-md-8 blog-posts list'>
            <article class='blog-post'>
              <header class='post-header'>
                <h3 class='title'>
                  <a href='blog-single.html'>A concert the we never forget</a>
                </h3>
                <div class='meta'>
                  <p class='user'>
                    <span>by:</span> Future Themes
                  </p>
                  <p class='line'>/</p>
                  <p class='date'>
                    <span>on:</span> Thuesday 21, Jully 2016
                  </p>
                </div>
                <a href='blog-single.html'>
                  <img
                    src={require('../../assets/imgs/blog/list-img-1.jpg')}
                    alt=''
                    class='img-responsive bordered hover-effect'
                  />
                </a>
              </header>
              <p class='excerpt'>
                In at pharetra augue. Integer accumsan mattis sollicitudin.
                Nulla sollicitudin consequat elementum in tincidunt eronon
                tellus tristique convallis. Fusce nec fringilla felis. Quisque
                phare tra vel nibh necnterdum et malesuada fames acimis in
                faucibus. Fusce ut augue in ex faucibus porttitor. Nullam
                aliquam condimentum{' '}
              </p>
              <a class='btn btn-md' href='blog-single.html'>
                Read More
              </a>
            </article>
            <article class='blog-post'>
              <header class='post-header'>
                <h3 class='title'>
                  <a href='blog-single.html'>A DAY FROM THE LIFE OF A DJ</a>
                </h3>
                <div class='meta'>
                  <p class='user'>
                    <span>by</span>: Future Themes
                  </p>
                  <p class='line'>/</p>
                  <p class='date'>
                    <span>on:</span> Thuesday 21, Jully 2016
                  </p>
                </div>
                <a href='blog-single.html'>
                  <img
                    src={require('../../assets/imgs/blog/list-img-2.jpg')}
                    alt=''
                    class='img-responsive bordered hover-effect'
                  />
                </a>
              </header>
              <p class='excerpt'>
                In at pharetra augue. Integer accumsan mattis sollicitudin.
                Nulla sollicitudin consequat elementum in tincidunt eronon
                tellus tristique convallis. Fusce nec fringilla felis. Quisque
                phare tra vel nibh necnterdum et malesuada fames acimis in
                faucibus. Fusce ut augue in ex faucibus porttitor. Nullam
                aliquam condimentum{' '}
              </p>
              <a class='btn btn-md' href='blog-single.html'>
                Read More
              </a>
            </article>
            <article class='blog-post'>
              <header class='post-header'>
                <h3 class='title'>
                  <a href='blog-single.html'>Evergreen Live in Italy</a>
                </h3>
                <div class='meta'>
                  <p class='user'>
                    <span>by</span>: Future Themes
                  </p>
                  <p class='line'>/</p>
                  <p class='date'>
                    <span>on:</span> Thuesday 21, Jully 2016
                  </p>
                </div>
                <a href='blog-single.html'>
                  <img
                    src={require('../../assets/imgs/blog/list-img-3.jpg')}
                    alt=''
                    class='img-responsive bordered hover-effect'
                  />
                </a>
              </header>
              <p class='excerpt'>
                In at pharetra augue. Integer accumsan mattis sollicitudin.
                Nulla sollicitudin consequat elementum in tincidunt eronon
                tellus tristique convallis. Fusce nec fringilla felis. Quisque
                phare tra vel nibh necnterdum et malesuada fames acimis in
                faucibus. Fusce ut augue in ex faucibus porttitor. Nullam
                aliquam condimentum{' '}
              </p>
              <a class='btn btn-md' href='blog-single.html'>
                Read More
              </a>
            </article>
            <ul class='pagination'>
              <li>
                <a href='#'>
                  <FaAngleLeft />
                </a>
              </li>
              <li>
                <a href='#' class='active'>
                  1
                </a>
              </li>
              <li>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
              <li>
                <a href='#'>4</a>
              </li>
              <li>
                <a href='#'>
                  <FaAngleRight />
                </a>
              </li>
            </ul>
          </div>
          <div class='col-md-4 sidebar'>
            <div class='widget search-widget'>
              <div>
                <form action='#' class='relative-pos general-form'>
                  <div class='field'>
                    <input
                      type='text'
                      name='search'
                      placeholder='Type and Hit Enter'
                    />
                    <button>
                      <i class='fa fa-search'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class='widget categories-widget'>
              <h4 class='widget-title'>Categories</h4>
              <div class='sep'></div>
              <div>
                <ul class='categories-list'>
                  <li>
                    <a href='#'>
                      Concerts<span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Album Launching<span>23</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Events<span>06</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Nightlife<span>80</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Bands and Artists<span>39</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Category Name<span>121</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Studio<span>33</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      Tours<span>153</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='widget tags-widget'>
              <h4 class='widget-title'>Tags</h4>
              <div class='sep'></div>
              <div>
                <ul class='tags-list clearfix'>
                  <li class='tag'>
                    <a href='#'>
                      <span>Events</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Lipsum</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Pellentesque</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Metal</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Nightlife</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Dubstep</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Trance</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Clubbing</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Atlantis</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>SummerFest</span>
                    </a>
                  </li>
                  <li class='tag'>
                    <a href='#'>
                      <span>Tag Eleven</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='widget recent-posts-widget'>
              <h4 class='widget-title'>Recent Posts</h4>
              <div class='sep'></div>
              <div>
                <div class='recent-post clearfix'>
                  <a href='#'>
                    <img
                      src={require('../../assets/imgs/blog/recent-post-2.jpg')}
                      alt=''
                    />
                  </a>
                  <h5>
                    <a href='#'>A DAY FROM THE LIFE OF A DJ</a>
                  </h5>
                  <p class='date'>Thuesday 21, Jully 2016</p>
                </div>
                <div class='recent-post clearfix'>
                  <a href='#'>
                    <img
                      src={require('../../assets/imgs/blog/recent-post-3.jpg')}
                      alt=''
                    />
                  </a>
                  <h5>
                    <a href='#'>Evergreen Live in Italy</a>
                  </h5>
                  <p class='date'>Thuesday 20, Jully 2016</p>
                </div>
                <div class='recent-post clearfix'>
                  <a href='#'>
                    <img
                      src={require('../../assets/imgs/blog/recent-post-1.jpg')}
                      alt=''
                    />
                  </a>
                  <h5>
                    <a href='#'>A concert that we never forget</a>
                  </h5>
                  <p class='date'>Thuesday 11, Jully 2016</p>
                </div>
              </div>
            </div>
            <div class='widget social-widget'>
              <h4 class='widget-title'>Social Networks</h4>
              <div class='sep'></div>
              <div>
                <ul class='social-icons'>
                  <li>
                    <a href='http://facebook.com'>
                      <FaFacebook className='icon' />
                    </a>
                  </li>
                  <li>
                    <a href='http://twitter.com'>
                      <FaTwitter className='icon' />
                    </a>
                  </li>
                  <li>
                    <a href='http://spotify.com'>
                      <FaSpotify className='icon' />
                    </a>
                  </li>
                  <li>
                    <a href='http://soundcloud.com'>
                      <FaSoundcloud className='icon' />
                    </a>
                  </li>
                  <li>
                    <a href='http://youtube.com'>
                      <FaYoutube className='icon' />
                    </a>
                  </li>
                  <li>
                    <a href='http://youtube.com'>
                      <FaInstagramSquare className='icon' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Blogs
