import React from 'react';
import './header.css';
import logo from '../images/logo.svg';

function Header() {
	return (
		<div className="navbar">
			<img className="logo" src={logo} alt="Logo da Empresa" />

			<ul>
				<li>Features</li>
				<li>Team</li>
				<li>Sign In</li>
			</ul>
		</div>
	);
}

export default Header;
