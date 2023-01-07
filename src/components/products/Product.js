import React, { Fragment } from 'react'
// Icons
import { BsCaretUp, BsCaretDown } from 'react-icons/bs'
// Stylesheet
import './style.css'

const Product = () => {
  return (
    <Fragment>
      <div className='page-header'>
        <div className='container'>
          <div className='ph-inner-wrapper'>
            <h3 className='title'>Product Single</h3>
          </div>
        </div>
      </div>
      <div className='shop-single-page-wrapper container'>
        <div className='container section'>
          <div className='row'>
            <div className='col-sm-12 col-md-8 single-product'>
              <div className='row'>
                <div className='col-sm-6'>
                  <img
                    src={require('../../assets/imgs/shop/big-image.jpg')}
                    alt=''
                    className='bordered img-responsive product-img'
                  />
                </div>
                <div className='col-sm-6'>
                  <div className='info-block'>
                    <h3 className='title'>Between Colors - Sea Lover Album</h3>
                    <h2 className='price colored-orange'>$25.00</h2>
                    <p>
                      In at pharetra augue. Integer accumsan mattis sollicitu
                      ulla sollicitudin consequat elementum in tincidunt erou
                      convallis. Fusce nec fringilla felis.{' '}
                    </p>
                    <form
                      action='#'
                      className='qta clearfix qta-control general-form'
                    >
                      <div className=' field qta-input clearfix'>
                        <div className='dec qtybutton'>
                          <BsCaretDown />
                        </div>
                        <input type='number' name='product-qty' value='1' />
                        <div className='inc qtybutton'>
                          <BsCaretUp />
                        </div>
                      </div>
                      <button className='btn btn-md'>Add to Cart</button>
                    </form>
                    <div className='meta'>
                      <h6 className='sku'>
                        SKU: <span>ALB85B6</span>
                      </h6>
                      <h6>
                        Categories: <a href='#'>Album</a>,{' '}
                        <a href='#'>Limited Edition</a>
                      </h6>
                      <h6>
                        Tags: <a href='#'>Between Colors</a>,{' '}
                        <a href='#'>Rock</a>, <a href='#'>Trance</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='product-info col-sm-12'>
                  <ul className='nav clearfix'>
                    <li className='active'>
                      <a data-toggle='tab' href='#description'>
                        Description
                      </a>
                    </li>
                    <li>
                      <a data-toggle='tab' href='#review'>
                        Review
                      </a>
                    </li>
                  </ul>
                  <div className='tab-content'>
                    <div id='description' className='tab-pane fade in active'>
                      <div className='description'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Perferendis impedit,similique facere, natus
                          nulla eos dignissimos! Nihil minima reprehenderit
                          porro totam perspiciatis odio dolores laborum
                          recusandae amet tempora aliquid, delenitierror
                          consectetur provident fugiat in magni autem ipsum
                          nostrum molestiae aperiamaccusantium praesentium.
                          Harum similique eligendi recusandae, mollitia,
                          veritatistempora perspiciatis facere accusamus quae
                          accusantium voluptas iusto maxime rerumconsequatur ex
                          quis corporis architecto laborum!
                        </p>
                        <h4>Lorem Ipsum The Features</h4>
                        <ul>
                          <li>
                            <span>Limitless music</span>
                          </li>
                          <li>
                            <span>Artists Signature</span>
                          </li>
                          <li>
                            <span>
                              Bewteen Colors FB Oficial Fan Page Acces
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id='review' className='tab-pane fade'>
                      <div className='comments reviews'>
                        <h4 className='title'>
                          There are 3 reviews on this product
                        </h4>
                        <ul className='comments-list'>
                          <li className='comment '>
                            <div className='comment-author relative-pos clearfix'>
                              <img
                                src={require('../../assets/imgs/blog/comment-1.jpg')}
                                alt=''
                                className='bordered'
                              />
                              <h5 className='name'>Rebecca Pearson</h5>
                              <h6 className='meta'>24.07.2016</h6>
                            </div>
                            {/* <ul className="rating">
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star-o"></i></li>
													</ul> */}
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Assumenda dolores quia velit,
                              vero. In harum eos, quos, ratione quam
                              repellendus.
                            </p>
                          </li>
                          <li className='comment '>
                            <div className='comment-author relative-pos clearfix'>
                              <img
                                src={require('../../assets/imgs/blog/comment-2.jpg')}
                                alt=''
                                className='bordered'
                              />
                              <h5 className='name'>Bobby Mendex</h5>
                              <h6 className='meta'>20.07.2016</h6>
                            </div>
                            <ul className='rating'>
                              {/* <li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star empty"></i></li>
														<li><i className="fa fa-star empty"></i></li> */}
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Assumenda dolores quia velit,
                              vero. In harum eos, quos, ratione quam
                              repellendus.
                            </p>
                          </li>
                          <li className='comment '>
                            <div className='comment-author relative-pos clearfix'>
                              <img
                                src={require('../../assets/imgs/blog/comment-3.jpg')}
                                alt=''
                                className='bordered'
                              />
                              <h5 className='name'>Betty Fisher</h5>
                              <h6 className='meta'>21.07.2016</h6>
                            </div>
                            <ul className='rating'>
                              {/* <li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star "></i></li>
														<li><i className="fa fa-star "></i></li> */}
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Assumenda dolores quia velit,
                              vero. In harum eos, quos, ratione quam
                              repellendus.
                            </p>
                          </li>
                        </ul>
                      </div>
                      <form
                        className='general-form clearfix'
                        action='#'
                        method='post'
                        name='contact'
                        id='comment-form'
                      >
                        <div className='field-group row'>
                          <div className='field col-sm-6'>
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
                          <div className='field col-sm-6'>
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
                        </div>
                        <div className='field'>
                          <h5>
                            Your Review <span>*</span>
                          </h5>
                          <textarea
                            name='message'
                            cols='15'
                            rows='5'
                            className='required'
                            placeholder='Review...'
                            title='Please write a review'
                          ></textarea>
                        </div>
                        <button className='btn big'>Add Comment</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-4 shop-sidebar sidebar">
						<div className="widget quick-cart">
							<h4 className="widget-title">Cart</h4>
							<div className="sep"></div>
							<div className="widget-contet">
								<div className="cart-product clearfix">
									<img src={require('../../assets/imgs/shop/sidebar-product-1.jpg')} alt="" className="bordered small-border" />
									<h4><a href="#">Lacuna Coil - Comalies</a></h4>
									<h5 className="qta">1 <span>x</span> $20.00</h5>
									<i className="fa fa-close"></i>
								</div>
								<div className="cart-product clearfix">
									<img src={require('../../assets/imgs/shop/sidebar-product-2.jpg')} alt="" className="bordered small-border" />
									<h4><a href="#">Neo T-Shirt</a></h4>
									<h5 className="qta">4<span>x</span> $24.60</h5>
									<i className="fa fa-close"></i>
								</div>
								<div className="cart-product clearfix">
									<img src={require('../../assets/imgs/shop/sidebar-product-3.jpg')} alt="" className="bordered small-border" />
									<h4><a href="#">Between Colors - Sea Lover</a></h4>
									<h5 className="qta">1<span>x</span> $25.00</h5>
									<i className="fa fa-close"></i>
								</div>
								<footer className="clearfix">
									<h4>Subtotal: <span>$143.40</span></h4>
									<a href="#" className="btn btn-md">Checkout</a>
								</footer>
							</div>
						</div>
					</div> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Product
