import { configureStore } from '@reduxjs/toolkit';
import gridReducer, {
	fetchPayments,
} from './payments-grid/payments-grid-slice';

export const store = configureStore({
	reducer: {
		paymentsGrid: gridReducer,
	},
});

store.dispatch(fetchPayments());
