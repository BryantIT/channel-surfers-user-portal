import React, { Fragment } from 'react'
import './style.css'

const Navbar = () => {
  return (
    <Fragment>
      <header className="noo-header" id="noo-header">
				<div className="navbar-wrapper">
					<div className="navbar navbar-default navbar-static-top">
						<div className="container">
							<div className="navbar-header">
								<h1 className="sr-only">Home</h1>
								<a className="navbar-toggle collapsed" data-toggle="collapse" data-target=".noo-navbar-collapse">
									<span className="sr-only">Navigation</span>
									<i className="fa fa-bars"></i>
								</a>
								<a href="#" className="mobile-minicart-icon">
									<i className="fa fa-shopping-cart"></i><span>0</span>
								</a>
								<a href="./" className="navbar-brand">
									<img className="noo-logo-img noo-logo-normal" src="images/logo.png" alt="" />
									<img className="noo-logo-img noo-logo-floating" src="images/logo.png" alt="" />
								</a>
							</div>  
							<nav className="collapse navbar-collapse noo-navbar-collapse">
								<ul className="navbar-nav sf-menu">
									<li className="current-menu-item menu-item-has-children">
										<a href="./">Home</a>
										<ul className="sub-menu">
											<li><a href="index-video.html">Home video</a></li>
											<li><a href="index-parallax.html">Home Parallax</a></li>
											<li><a href="index-revolution.html">Home Revolution</a></li>
										</ul>
									</li>
									<li className="menu-item-has-children">
										<a href="#">Events</a>
										<ul className="sub-menu">
											<li><a href="event.html">Event List</a></li>
											<li><a href="event-photo.html">Event Photo</a></li>
											<li><a href="event-detail.html">Event Detail</a></li>
											<li><a href="archive-event.html">Archive Event</a></li>
										</ul>
									</li>
									<li className="menu-item-has-children">
										<a href="#">Albums</a>
										<ul className="sub-menu">
											<li><a href="album.html">Albums Masonry</a></li>
											<li><a href="album-detail.html">Single Album</a></li>
										</ul>
									</li>
									<li className="menu-item-has-children">
										<a href="shop.html">Shop</a>
										<ul className="sub-menu">
											<li><a href="my-account.html">My Account</a></li>
											<li><a href="cart.html">Cart</a></li>
											<li><a href="cart-empty.html">Empty Cart</a></li>
											<li><a href="shop-detail.html">Shop Detail</a></li>
										</ul>
									</li>
									<li><a href="members.html">Members</a></li>
									<li className="menu-item-has-children">
										<a href="blog.html">Blog</a>
										<ul className="sub-menu">
											<li><a href="blog-masonry.html">Blog 2 columns</a></li>
											<li><a href="blog-detail.html">Single Post</a></li>
										</ul>
									</li>
									<li><a href="contact.html">Contact</a></li>
									<li className="noo-menu-item-cart minicart">
										<a className="cart-button" href="cart.html">
											<span className="cart-item">
												<i className="fa fa-shopping-cart"></i>
											</span>
										</a>
									</li>
								</ul>
							</nav>  
						</div>  
					</div>  
				</div>
			</header>
    </Fragment>
  )
}

export default Navbar
