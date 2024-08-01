import { createContext, Reducer } from 'react';

export const PaymentsContext = createContext<Array<Payment> | null>(null);
export const DispatchContext = createContext<React.Dispatch<AddPaymentAction> | null>(null);

let nextId = 2000;

export const reducer: Reducer<Array<Payment>, AddPaymentAction> = (state, action) => {
	switch (action.type) {
		case 'payments/add':
			return [
				{ ...action.payment, id: nextId++, sender: 'Unknown', datePaid: new Date().toISOString() },
				...state,
			];
		default:
			throw Error('Invalid action type');
	}
};
