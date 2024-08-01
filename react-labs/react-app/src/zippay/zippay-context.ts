import { createContext, Reducer } from 'react';

export const PaymentsContext = createContext<Array<Payment> | null>(null);
export const DispatchContext = createContext<React.Dispatch<ZipPayAction> | null>(null);

let nextId = 2000;

export const reducer: Reducer<Array<Payment>, ZipPayAction> = (state, action) => {
	switch (action.type) {
		case 'payments/add':
			return [
				{ ...action.payment, id: nextId++, sender: 'Unknown', datePaid: new Date().toISOString() },
				...state,
			];
		case 'payments/populate':
			return [...action.payments];
		case 'payments/appendAll':
			return [...state, ...action.payments];

		default:
			throw Error('Invalid action type');
	}
};
