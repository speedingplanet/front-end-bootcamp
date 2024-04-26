import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import OldSingleFileReduxCounter from './OldSingleFileReduxCounter';
import OldReduxContainer from './old-redux-counter/OldReduxContainer';
import ReduxContainer from './redux-toolkit/ReduxContainer';

function ReduxManager() {
	return (
		<>
			<div className="row">
				<div className="col-4">
					<ul className="list-unstyled">
						<li>
							<NavLink to="old-single-file-counter">
								Old-style Redux, one file
							</NavLink>
						</li>
						<li>
							<NavLink to="old-redux-counter">Old-style Redux</NavLink>
						</li>
						<li>
							<NavLink to="redux-toolkit-counter">Redux Toolkit</NavLink>
						</li>
					</ul>
				</div>
				<div className="col">
					<Routes>
						<Route
							path="old-single-file-counter"
							element={<OldSingleFileReduxCounter />}
						/>
						<Route
							path="old-redux-counter"
							element={<OldReduxContainer />}
						/>
						<Route
							path="redux-toolkit-counter"
							element={<ReduxContainer />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default ReduxManager;
