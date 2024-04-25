import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ProgrammaticNavigation from './ProgrammaticNavigation';
import RoutingParameters from './RoutingParameters';

function RoutingManager() {
	return (
		<section className="row">
			<div className="col-4">
				<ul className="list-unstyled">
					<li>
						<NavLink to="route-params">Routing Parameters</NavLink>
					</li>
					<li>
						<NavLink to="programmatic-navigation">
							Programmatic Navigation
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="col">
				<Routes>
					<Route
						path="route-params/*"
						element={<RoutingParameters />}
					/>
					<Route
						path="programmatic-navigation"
						element={<ProgrammaticNavigation />}
					/>
				</Routes>
			</div>
		</section>
	);
}

export default RoutingManager;
