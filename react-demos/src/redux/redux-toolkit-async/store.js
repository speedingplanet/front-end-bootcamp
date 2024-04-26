import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { fetchCounter } from './counter-slice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

store.dispatch(fetchCounter());
