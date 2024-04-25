import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import IterativeContent from './IterativeContent';
import GridExample from './GridExample';
import GridRefactored from './grid-refactored/GridRefactored';
import GridSorted from './grid-sorted/GridSorted';
import GridRemote from './grid-remote/GridRemote';
import GridWithContext from './grid-context/GridWithContext';

function IterativeContentManager() {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<ul className="list-unstyled">
						<li>
							<NavLink to="minimal-example">Minimal example</NavLink>
						</li>
						<li>
							<NavLink to="grid-example">Grid example</NavLink>
						</li>
						<li>
							<NavLink to="grid-refactored">Grid example refactored</NavLink>
						</li>
						<li>
							<NavLink to="grid-sorted">Grid with sorting</NavLink>
						</li>
						<li>
							<NavLink to="grid-context">Grid with Context</NavLink>
						</li>
						<li>
							<NavLink to="grid-remote">Grid with remote data</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="minimal-example"
							element={<IterativeContent />}
						/>
						<Route
							path="grid-example"
							element={<GridExample />}
						/>
						<Route
							path="grid-refactored"
							element={<GridRefactored />}
						/>
						<Route
							path="grid-sorted"
							element={<GridSorted />}
						/>
						<Route
							path="grid-context"
							element={<GridWithContext />}
						/>
						<Route
							path="grid-remote"
							element={<GridRemote />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default IterativeContentManager;
