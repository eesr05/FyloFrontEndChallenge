import React from 'react';
import './footer.css';
import logo from '../images/logo copy.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function Footer() {
	return (
		<div>
			<section className="footer1">
				<p className="title-footer">Get early access today</p>
				<p className="text-footer">
					Its only takes a minute to sign up and our free starter tier is
					extremely generous. If you have any questions, our support team
					would be happy to help you
				</p>
				<input
					type="text"
					name=""
					id="input-footer"
					placeholder="email@example.com"
				/>
				<button className="btn-footer" type="submit">
					Get starter for free
				</button>
			</section>
			<div className="footer2">
				<img className="logo-footer" src={logo} alt="" />
				<img src={phone} className="phone" alt="" />
				<p className="number-phone">Phone:+1 -543-345-5174</p>
				<img className="icon-email" src={email} alt="" />
				<p className="email">email@fylo.com</p>
				<div className="redes">
					<FaFacebook className="face" />
					<FaTwitter className="twitter" />
					<FaInstagram className="insta" />
				</div>
				<div className="merda">
					<ul className="list-footer">
						<li>
							<a href="www.google.com"> About us</a>
						</li>
						<li>
							<a href="www.youtube.com">Jobs</a>
						</li>
						<li>
							<a href="www.google.com">Press</a>
						</li>
						<li>
							<a href="www.google.com">Blog</a>
						</li>
					</ul>
				</div>
				<div>
					<ul className="list-footer dois">
						<li>
							<a href="www.google.com"> Contact us</a>
						</li>
						<li>
							<a href="www.google.com">Terms</a>
						</li>
						<li>
							<a href="www.google.com">Privacy</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Footer;
