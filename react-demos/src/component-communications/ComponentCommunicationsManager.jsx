import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ParentChild from './ParentChild';
import AncestorDescendant from './AncestorDescendant';
import BranchToBranch from './BranchToBranch';
import BranchingContext from './BranchingContext';

function ComponentCommunicationsManager() {
	return (
		<>
			<div className="row">
				<div className="col-3 cc-manager">
					<ul className="list-unstyled">
						<li>
							<NavLink to="/comp-comm/parent-child">Parent-Child</NavLink>
						</li>
						<li>
							<NavLink to="/comp-comm/ancestor-descendant">
								Ancestor-Descendant
							</NavLink>
						</li>
						<li>
							<NavLink to="/comp-comm/branch-to-branch">
								Branch-to-branch
							</NavLink>
						</li>
						<li>
							<NavLink to="/comp-comm/branching-context">
								Branches and Context
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="parent-child"
							element={<ParentChild />}
						/>
						<Route
							path="ancestor-descendant"
							element={<AncestorDescendant />}
						/>
						<Route
							path="branch-to-branch"
							element={<BranchToBranch />}
						/>
						<Route
							path="branching-context"
							element={<BranchingContext />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default ComponentCommunicationsManager;
