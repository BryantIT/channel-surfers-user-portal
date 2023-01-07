import React from 'react'
// Stylesheet
import './style.css'

const Blog = () => {
  return (
    <div className="blog-home-wrapper">
			<div className="overlay-section">
				<div className="container section">
					<div className="section-title pdb-30">
						<h2>
							<span className="title-lines left"></span>
							Latest News
							<span className="title-lines right"></span>
						</h2>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="blog-post-home">
								<div className="img-wrapper">
									<div className="overlay"></div>
									<img className="img-responsive" src={require('../../assets/imgs/blog/mini-1.jpg')} alt="" />
								</div>
								<div>
									<h3><a href="blog-single.html">Amanda Black Live in Chicago</a></h3>
									<h6>Thuesday 29, sep</h6>
									<p>Suspendisse placerat lorem et erat sodales laore etonec viverra laoreet odio, velcipit quam scelerisque pulvi nar. Donec a tortor ut ex commodo aliquet quis</p>
									<a href="blog-single.html" className="btn btn-md">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="blog-post-home">
								<div className="img-wrapper">
									<div className="overlay"></div>
									<img className="img-responsive" src={require('../../assets/imgs/blog/mini-2.jpg')} alt="" />
								</div>
								<h3><a href="blog-single.html">A Day From the Life of a DJ</a></h3>
								<h6>Thuesday 20, Jully</h6>
								<p>Suspendisse placerat lorem et erat sodales laore etonec viverra laoreet odio, velcipit quam scelerisque pulvi nar. Donec a tortor ut ex commodo aliquet quis</p>
								<a href="blog-single.html" className="btn btn-md">Read More</a>
							</div>
						</div>
					</div>
					<div className="btn-wrapper pdt-70">
						<a href="blog-list.html" className="btn big">See All News</a>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Blog
