import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Promises from './Promises';
import AsyncAwait from './AsyncAwait';

function AsyncManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="/async-demos/promises">Promises</NavLink>
						</li>
						<li>
							<NavLink to="/async-demos/async-await">Async-await</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="promises"
							element={<Promises />}
						/>
						<Route
							path="async-await"
							element={<AsyncAwait />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default AsyncManager;
