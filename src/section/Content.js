import React from 'react';
import './content.css';
import foto from '../images/illustration-1.svg';
import arrow from '../images/icon-arrow.svg';
import quotes from '../images/icon-quotes.svg';
import avatar from '../images/kylo.png';
import foto2 from '../images/illustration-2.svg';

function Content() {
	return (
		<div>
			<img src={foto} id="foto" alt="" />
			<div className="tudo">
				<div className="textInput">
					<h1>
						All your files in one secure location, acessible anywhere
					</h1>
					<p>
						Fylo stores your most important files in one secure location.
						Acess them wherever you need, share and collaborate with your
						friends, family, and co-workers
					</p>
				</div>
				<div className="inputBtn">
					<input
						type="text"
						name=""
						id="email"
						placeholder="Enter your email"
					/>
					<button type="submit">Get started</button>
				</div>
			</div>

			<div className="texto2">
				<h2>Stay productive wherever you are</h2>
				<p className="txt2">
					Never let location be an issue when acessing your files. Fylo has
					you covered for all your file storage needs
				</p>
				<p className="txt2">
					Seculery share files and folders with friends, family and
					colleagues for live collaboration. No email attachments required
				</p>
				<a
					href="https://www.youtube.com/watch?v=wWIldUXMixE"
					target="_blank"
					rel="noopener noreferrer"
				>
					See how Fylo works
					<img className="icon" src={arrow} alt="" />
				</a>
				<div className="comments">
					<img src={quotes} className="quotes" alt="" />
					<p className="quotes-comments">
						Fylo has improved out team productivity by an order of
						magnitude. Since making the switch out team has become a
						well-oiled collaboration machine.
					</p>
					<img className="avatar" src={avatar} alt="" />

					<p className="name">Kylo Ren</p>
					<p className="chefe">Founder & CEO</p>
				</div>
			</div>
			<img src={foto2} alt="" className="foto2" />
		</div>
	);
}

export default Content;
