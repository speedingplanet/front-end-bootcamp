import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
	let navigate = useNavigate();

	function handleLiClick(url) {
		navigate(url);
	}

	return (
		<>
			<header className="page-header">
				<h1>The ZipPay app</h1>
			</header>
			<nav className="navbar-list">
				<ul>
					<li onClick={() => handleLiClick('send-receive')}>
						<NavLink to="send-receive">
							<span className="material-icons">currency_exchange</span>
							<br />
							Send/Receive
						</NavLink>
					</li>
					<li onClick={() => handleLiClick('split-the-bill')}>
						<NavLink to="split-the-bill">
							<span className="material-icons">call_split</span>
							<br />
							Split the bill
						</NavLink>
					</li>
					<li onClick={() => handleLiClick('payments-grid')}>
						<NavLink to="payments-grid">
							<span className="material-icons">savings</span>
							<br />
							Balance
						</NavLink>
					</li>
					<li onClick={() => handleLiClick('account-settings')}>
						<NavLink to="account-settings">
							<span className="material-icons">settings</span>
							<br />
							Account settings
						</NavLink>
					</li>
					<li onClick={() => handleLiClick('search')}>
						<NavLink to="search">
							<span className="material-icons">search</span>
							<br />
							Search
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
