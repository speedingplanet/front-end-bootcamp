import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ children }) {
	return (
		<>
			<header className="page-header">
				<h1>The ZipPay app</h1>
			</header>
			<nav className="navbar-list">
				<ul>
					{children.map((child, index) => (
						<li key={index}>{child}</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
