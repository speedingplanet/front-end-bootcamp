import { configureStore } from '@reduxjs/toolkit';
import gridReducer from './payments-grid/payments-grid-slice';

export const store = configureStore({
	reducer: {
		paymentsGrid: gridReducer,
	},
});
