import React, { Fragment } from 'react'
import './style.css'

const Navbar = () => {
  return (
    <Fragment>
      <header id='rock_header_single_page'>
        <div className='container'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <div className='rock_logo'>
                  <a data-link='rockon_home'>
                    <img src='../assets/images/Logo1.png' alt='logo' />
                  </a>
                </div>
              </div>
              <div className='col-lg-9 col-md-9 col-sm-6 col-6'>
                <div className='main-menu-container rock_menu rock_menu_single'>
                  <div className='main-menu'>
                    <ul>
                      <li>
                        <a href='index.html'>Home</a>
                      </li>
                      <li>
                        <a href='javascript:void(0);'>Blog</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='blog_category.html'>Blog Category</a>
                          </li>
                          <li>
                            <a href='blog_full_width.html'>Blog Full Width</a>
                          </li>
                          <li>
                            <a href='single_page.html'>Blog Single Page</a>
                          </li>
                          <li>
                            <a href='blog_left_sidebar.html'>
                              Blog Left sidebar
                            </a>
                          </li>
                          <li>
                            <a href='blog_right_sidebar.html'>
                              Blog right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='javascript:void(0);'>Pages</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='event.html'>Events</a>
                          </li>
                          <li>
                            <a href='services.html'>Services</a>
                          </li>
                          <li>
                            <a href='elements.html'>Elements</a>
                          </li>
                          <li>
                            <a href='prices.html'>Price Table</a>
                          </li>
                          <li>
                            <a href='columns.html'>Columns</a>
                          </li>
                          <li>
                            <a href='404.html'>404 Page</a>
                          </li>
                          <li>
                            <a href='icon.html'>Icon</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='javascript:void(0);'>Gallery</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='gallery_2column.html'>Gallery 2 Column</a>
                          </li>
                          <li>
                            <a href='gallery_3column.html'>Gallery 3 Column</a>
                          </li>
                          <li>
                            <a href='gallery_4column.html'>Gallery 4 Column</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='booking.html'>Book table</a>
                      </li>
                      <li>
                        <a href='about.html'>About Us</a>
                      </li>
                      <li>
                        <a href='contact.html'>Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className='menu-btn-wrap'>
                    <a href='javascript:void(0);' className='menu-btn'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Navbar
