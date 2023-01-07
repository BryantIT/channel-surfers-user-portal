import React, { Fragment } from 'react'
// Stylesheet
import './style.css'
// Icons
import { AiOutlineClose } from 'react-icons/ai'

const MiniCart = () => {
  return (
    <Fragment>
      <div id='mini-cart-widget'>
        <h5 className='title'>2 Products</h5>
        <div className='product clearfix'>
          <img src='./assets/imgs/shop/mini-1.jpg' alt='' />
          <h6>This is Product Title</h6>
          <span>1 x $120</span>
          <AiOutlineClose />
        </div>
        <div className='product clearfix'>
          <img src='./assets/imgs/shop/mini-2.jpg' alt='' />
          <h6>This is Product Title</h6>
          <span>2 x $60</span>
          <AiOutlineClose />
        </div>
        <div className='mini-cart-footer'>
          <h4 className='subtotal'>
            Subtotal: <span>$240</span>
          </h4>
          <a href='#' className='btn btn-sm'>
            Checkout
          </a>
          <a href='#' className='link'>
            View Cart
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default MiniCart
