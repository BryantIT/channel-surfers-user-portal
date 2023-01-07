import React from 'react'
// Stylesheet
import './style.css'

const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6">
						<h2>NEWSLETTER</h2>
					</div>
					<div className="form-block col-xs-12 col-sm-6">
						<div >
							<form name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
								<div>
									<div className="mc-field-group">
										<input type="email" value="" name="EMAIL" placeholder="Enter Your E-mail Here..." />
										<div className="button-wrap"><button name="subscribe" type="submit" className="button" id="mc-embedded-subscribe">Subscribe</button></div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Newsletter
