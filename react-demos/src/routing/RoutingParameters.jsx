import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import RoutingParamDetails from './RoutingParamDetails';

function RoutingParameters() {
	return (
		<section>
			<h3>Routing Parameters</h3>
			<div className="row">
				<div className="col">
					<ul className="list-unstyled">
						<li>
							<NavLink to="params/1">params/1</NavLink>
						</li>
						<li>
							<NavLink to="params/2">params/2</NavLink>
						</li>
						<li>
							<NavLink to="params/3">params/3</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="params/:xyz"
							element={<RoutingParamDetails />}
						/>
					</Routes>
				</div>
			</div>
		</section>
	);
}

export default RoutingParameters;
