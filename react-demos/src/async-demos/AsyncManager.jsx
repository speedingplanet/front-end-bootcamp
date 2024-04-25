import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Promises from './Promises';
import AsyncAwait from './AsyncAwait';
import DataAccessObject from './DataAccessObject';
import CustomHook from './CustomHook';

function AsyncManager() {
	return (
		<>
			<div className="row">
				<div className="col-4">
					<ul className="list-unstyled">
						<li>
							<NavLink to="promises">Promises</NavLink>
						</li>
						<li>
							<NavLink to="async-await">Async-await</NavLink>
						</li>
						<li>
							<NavLink to="dao">Data Access Object (dao)</NavLink>
						</li>
						<li>
							<NavLink to="custom-hook">Custom Hook</NavLink>
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
						<Route
							path="dao"
							element={<DataAccessObject />}
						/>
						<Route
							path="custom-hook"
							element={<CustomHook />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default AsyncManager;
