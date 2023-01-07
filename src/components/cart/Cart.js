import React, { Fragment } from 'react'
// Icons
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsCaretUp, BsCaretDown } from 'react-icons/bs'
// Stylesheet
import './style.css'

const Cart = () => {
  return (
    <Fragment>
      <div class='page-header'>
        <div class='container'>
          <div class='ph-inner-wrapper'>
            <h3 class='title'>Cart Page</h3>
          </div>
        </div>
      </div>
      <div class='cart-page-wrapper'>
        <div class='container section'>
          <div class='row'>
            <div class='col-md-10 col-md-offset-1'>
              <div>
                <table class='cart'>
                  <thead>
                    <tr>
                      <th class='product-thumbnail'>&nbsp;</th>
                      <th class='product-name'>Product Name</th>
                      <th class='product-price'>Price</th>
                      <th class='product-quantity'>Quantity</th>
                      <th class='product-subtotal'>Total</th>
                      <th class='product-remove'>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class='product-thumbnail'>
                        <a href='shop-single.html'>
                          <img
                            src={require('../../assets/imgs/shop/cart-item-1.jpg')}
                            alt=''
                          />
                        </a>
                      </td>
                      <td class='product-name'>
                        <a href='shop-single.html'>
                          Titan Slayer - Sister of Fury
                        </a>
                      </td>
                      <td class='product-price'>
                        <span>$25.00</span>
                      </td>
                      <td class='product-quantity'>
                        <form
                          action='#'
                          class='qta clearfix qta-control general-form'
                        >
                          <div class=' field qta-input clearfix'>
                            <div class='dec qtybutton'>
                              <BsCaretDown />
                            </div>
                            <input type='number' name='product-qty' value='2' />
                            <div class='inc qtybutton'>
                              <BsCaretUp />
                            </div>
                          </div>
                        </form>
                      </td>
                      <td class='product-subtotal'>
                        <span>$50.00</span>
                      </td>
                      <td class='product-remove'>
                        <a href='#'>
                          <RiDeleteBin6Line />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class='product-thumbnail'>
                        <a href='shop-single.html'>
                          <img
                            src={require('../../assets/imgs/shop/cart-item-2.jpg')}
                            alt=''
                          />
                        </a>
                      </td>
                      <td class='product-name'>
                        <a href='shop-single.html'>
                          Titan Slayer - Sister of Fury
                        </a>
                      </td>
                      <td class='product-price'>
                        <span>$20.00</span>
                      </td>
                      <td class='product-quantity'>
                        <form
                          action='#'
                          class='qta clearfix qta-control general-form'
                        >
                          <div class=' field qta-input clearfix'>
                            <div class='dec qtybutton'>
                              <BsCaretDown />
                            </div>
                            <input type='number' name='product-qty' value='3' />
                            <div class='inc qtybutton'>
                              <BsCaretUp />
                            </div>
                          </div>
                        </form>
                      </td>
                      <td class='product-subtotal'>
                        <span>$60.00</span>
                      </td>
                      <td class='product-remove'>
                        <a href='#'>
                          <RiDeleteBin6Line />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class='product-thumbnail'>
                        <a href='shop-single.html'>
                          <img
                            src={require('../../assets/imgs/shop/cart-item-3.jpg')}
                            alt=''
                          />
                        </a>
                      </td>
                      <td class='product-name'>
                        <a href='shop-single.html'>
                          Titan Slayer - Sister of Fury
                        </a>
                      </td>
                      <td class='product-price'>
                        <span>$20.00</span>
                      </td>
                      <td class='product-quantity'>
                        <form
                          action='#'
                          class='qta clearfix qta-control general-form'
                        >
                          <div class=' field qta-input clearfix'>
                            <div class='dec qtybutton'>
                              <BsCaretDown />
                            </div>
                            <input type='number' name='product-qty' value='3' />
                            <div class='inc qtybutton'>
                              <BsCaretUp />
                            </div>
                          </div>
                        </form>
                      </td>
                      <td class='product-subtotal'>
                        <span>$60.00</span>
                      </td>
                      <td class='product-remove'>
                        <a href='#'>
                          <RiDeleteBin6Line />
                        </a>
                      </td>
                    </tr>
                    <tr class='fullwidth-tr'>
                      <td colspan='6' class='actions'>
                        <div class='coupon clearfix'>
                          <form action='#' class='general-form clearfix'>
                            <div class='field'>
                              <input
                                type='text'
                                name='coupon-code'
                                placeholder='Enter Coupon Code'
                              />
                            </div>
                            <button class='btn btn-md'>Apply Coupon</button>
                          </form>
                        </div>
                        <div class='update'>
                          <button class='btn btn-md'>Update Cart</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart
