import React, { Fragment } from 'react'
// Stylesheet
import './style.css'

const Product = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container'>
          <div className='ph-inner-wrapper'>
            <h3 className='title'>Products</h3>
          </div>
        </div>
      </div>
      <div className='shop-page-wrapper'>
        <div className='container section pdt-70'>
          <div className='row top-bar'>
            <div className='col-sm-6'>
              <div className='custom-select'>
                <select>
                  <option value='value-801'>Default Sorting</option>
                  <option value='value-802'>Sort By Popularity</option>
                  <option value='value-803'>Sort By Averega Rating</option>
                  <option value='value-804'>Sort By Price Low to High</option>
                  <option value='value-804'>Sort By Price High to Low</option>
                </select>
              </div>
            </div>
            <div className='col-sm-6'>
              <h4>Showing all 8 Results</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-5.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>Jane Taylor Poster</h4>
                  </a>
                  <div className='meta'>
                    {/* <ul className="rating">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li>
									</ul> */}
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-2.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>Sisters Of Fury Album</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-8.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>Grace Anderson Poster</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-4.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>Comalies Album</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-1.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>Nicole Clark Poster</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-6.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>K-Project Paris Tickets</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-7.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>The Dream Album</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='product'>
                <div className='product-image'>
                  <img
                    className='img-responsive'
                    src={require('../../assets/imgs/shop/img-5.jpg')}
                    alt=''
                  />
                  <div className='overlay'>
                    <a href='#' className='btn btn-md'>
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className='info-block'>
                  <a href='product-single.html'>
                    <h4 className='product-title'>Sea lover Album</h4>
                  </a>
                  <div className='meta'>
                    <ul className='rating'>
                      {/* <li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-full"></i></li>
										<li><i className="fa fa-star-o"></i></li> */}
                    </ul>
                    <h5 className='price'>$25.00</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Product
