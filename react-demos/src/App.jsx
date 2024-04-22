import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CancelPromise from './cancel-promise/CancelPromise.jsx';
import EffectHook from './effect-hook/EffectHook.jsx';
import ContextDemo from './context-demo/ContextDemo.jsx';
import HigherOrderComponent from './higher-order-component/HigherOrderComponent.jsx';
import Memoization from './memo-demo/Memoization.jsx';
import DynamicComponents from './dynamic-components/DynamicComponents.jsx';
import ReduxCounter from './redux-counter/ReduxCounter.jsx';
import ReduxCounterBP from './redux-counter-best/ReduxContainer.jsx';
import ReduxToolkitCounter from './redux-counter-tk/ReduxContainer.jsx';
import VisibilityDemo from './visibility-tests/VisibilityDemo.jsx';
import BasicComponent from './testing/BasicComponent';
import EventHandlingComponent from './testing/EventHandlingComponent';
import FormDataManager from './form-data/FormDataManager';
import IterativeContentManager from './iterative-content/IterativeContentManager';
import AsyncManager from './async-demos/AsyncManager.jsx';
import PropsChildren from './PropsChildren.jsx';
import ApolloManager from './apollo/ApolloManager.jsx';

import './App.css';
import EventHandling from './event-handling/EventHandling.jsx';
import ConditionalDisplay from './conditional-display/ConditionalDisplay.jsx';
import ComponentCommunicationsManager from './component-communications/ComponentCommunicationsManager.jsx';

function App() {
	return (
		<main className="container">
			<header className="row">
				<div className="col">
					<h1>React Demos</h1>
					<hr />
				</div>
			</header>
			<BrowserRouter>
				<div className="row">
					<div className="col-3">
						<ul className="list-unstyled">
							<li>
								<NavLink to="event-handling">Event Handling</NavLink>
							</li>
							<li>
								<NavLink to="conditional-display">Conditional Display</NavLink>
							</li>
							<li>
								<NavLink to="form-data">Form Data examples</NavLink>
							</li>
							<li>
								<NavLink to="comp-comm">Component communications</NavLink>
							</li>
							<li>
								<NavLink to="iterative-content">Iterative content</NavLink>
							</li>
							<li>
								<NavLink to="async-demos">Async Demos</NavLink>
							</li>
							<li>
								<NavLink to="props-children">
									<code>children</code> property
								</NavLink>
							</li>
							<li>
								<NavLink to="apollo">Apollo Demos</NavLink>
							</li>
							<li>
								<NavLink to="cancel-promise">Cancel Promises (axios)</NavLink>
							</li>
							<li>
								<NavLink to="effect-hook">Effect Hook</NavLink>
							</li>
							<li>
								<NavLink to="context-demo">Context API</NavLink>
							</li>
							<li>
								<NavLink to="higher-order-component">
									Higher Order Component
								</NavLink>
							</li>
							<li>
								<NavLink to="memoization">Memoization</NavLink>
							</li>
							<li>
								<NavLink to="dynamic-components">DynamicComponents</NavLink>
							</li>
							<li>
								<NavLink to="redux-counter">Redux Counter</NavLink>
							</li>
							<li>
								<NavLink to="redux-counter-best-practices">
									Redux Counter (best practices)
								</NavLink>
							</li>
							<li>
								<NavLink to="redux-toolkit-counter">
									Redux Counter (using the toolkit)
								</NavLink>
							</li>
							<li>
								<NavLink to="visibility-demo">Visbility Demo</NavLink>
							</li>
							<li>
								<NavLink to="testable-component">Testable component</NavLink>
							</li>
							<li>
								<NavLink to="eh-testable-component">
									Testable component with event handling
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col">
						<Routes>
							<Route
								path="/event-handling"
								element={<EventHandling />}
							/>
							<Route
								path="/conditional-display"
								element={<ConditionalDisplay />}
							/>
							<Route
								path="/form-data/*"
								element={<FormDataManager />}
							/>
							<Route
								path="/comp-comm/*"
								element={<ComponentCommunicationsManager />}
							/>
							<Route
								path="/iterative-content/*"
								element={<IterativeContentManager />}
							/>
							<Route
								path="/async-demos/*"
								element={<AsyncManager />}
							/>
							<Route
								path="/props-children"
								element={<PropsChildren />}
							/>
							<Route
								path="/apollo/*"
								element={<ApolloManager />}
							/>
							<Route
								path="/cancel-promise"
								element={<CancelPromise />}
							/>
							<Route
								path="/effect-hook"
								element={<EffectHook />}
							/>
							<Route
								path="/context-demo"
								element={<ContextDemo />}
							/>
							<Route
								path="/higher-order-component"
								element={<HigherOrderComponent />}
							/>
							<Route
								path="/memoization"
								element={<Memoization />}
							/>
							<Route
								path="/dynamic-components"
								element={<DynamicComponents />}
							/>
							<Route
								path="/redux-counter"
								element={<ReduxCounter />}
							/>
							<Route
								path="/redux-counter-best-practices"
								element={<ReduxCounterBP />}
							/>
							<Route
								path="/redux-toolkit-counter"
								element={<ReduxToolkitCounter />}
							/>
							<Route
								path="/testable-component"
								element={<BasicComponent />}
							/>
							<Route
								path="/eh-testable-component"
								element={<EventHandlingComponent />}
							/>
							<Route
								path="/visibility-demo"
								element={<VisibilityDemo />}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</main>
	);
}

export default App;
