import React from 'react'
// Stylesheet
import './style.css'

const RecentProducts = () => {
  return (
    <div className='recent-products-home-wrapper'>
			<div className="container section">
				<div className="section-title pdb-30">
					<h2>
						<span className="title-lines left"></span>
							Recent Products
						<span className="title-lines right"></span>
					</h2>
				</div>
				<div className="row">
					<div className="col-md-3 .col-sm-3">
						<div className="product">
							<div className="product-image">
								<img className="img-responsive" src={require('../../assets/imgs/shop/img-1.jpg')} alt="" />
								<div className="overlay">
									<a href="#" className="btn btn-md">Add To cart</a>
								</div>
							</div>
							<div className="info-block">
								<a href="product-single.html"><h4 className="product-title">Nicole Clark Poster</h4></a>
								<div className="meta">
									<h5 className="price">$25.00</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 .col-sm-3">
						<div className="product">
							<div className="product-image">
								<img className="img-responsive" src={require('../../assets/imgs/shop/img-2.jpg')} alt="" />
								<div className="overlay">
									<a href="#" className="btn btn-md">Add To cart</a>
								</div>
							</div>
							<div className="info-block">
								<a href="product-single.html"><h4 className="product-title">Sisters Of Fury Album</h4></a>
								<div className="meta">
									<h5 className="price">$25.00</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 .col-sm-3">
						<div className="product">
							<div className="product-image">
								<img className="img-responsive" src={require('../../assets/imgs/shop/img-3.jpg')} alt="" />
								<div className="overlay">
									<a href="#" className="btn btn-md">Add To cart</a>
								</div>
							</div>
							<div className="info-block">
								<a href="product-single.html"><h4 className="product-title">Sea Lover Album</h4></a>
								<div className="meta">
									<h5 className="price">$25.00</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6-product">
						<div className="product">
							<div className="product-image">
								<img className="img-responsive" src={require('../../assets/imgs/shop/img-4.jpg')} alt="" />
								<div className="overlay">
									<a href="#" className="btn btn-md">Add To cart</a>
								</div>
							</div>
							<div className="info-block">
								<a href="product-single.html"><h4 className="product-title">Comalies Album</h4></a>
								<div className="meta">
									<h5 className="price">$25.00</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default RecentProducts
