import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<header className="page-header">
				<h1>The ZipPay app</h1>
			</header>
			<nav className="navbar-list">
				<ul>
					<li>
						<NavLink to="/zippay/send-receive">
							<span className="material-icons">currency_exchange</span>
							<br />
							Send/Receive
						</NavLink>
					</li>
					<li>
						<a href="#placeholder">
							<span className="material-icons">call_split</span>
							<br />
							Split the bill
						</a>
					</li>
					<li>
						<NavLink to="/zippay/payments-grid">
							<span className="material-icons">savings</span>
							<br />
							Balance
						</NavLink>
					</li>
					<li>
						<a href="#placeholder">
							<span className="material-icons">settings</span>
							<br />
							Account settings
						</a>
					</li>
					<li>
						<a href="#placeholder">
							<span className="material-icons">search</span>
							<br />
							Search
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
