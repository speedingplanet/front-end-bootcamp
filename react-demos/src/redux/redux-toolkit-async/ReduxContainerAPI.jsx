import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';
import ReduxCounter from './ReduxCounter.jsx';

export default function ReduxContainerAPI() {
	return (
		<Provider store={store}>
			<ReduxCounter />
		</Provider>
	);
}
