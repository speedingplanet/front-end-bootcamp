import React, { createContext, Reducer, useReducer } from 'react';
import Navbar from './Navbar';
import './zippay.css';
import 'react-toastify/dist/ReactToastify.css';
import SendPayment from './SendPayment';
import PaymentsGrid from './PaymentsGrid';
import { toast, ToastContainer } from 'react-toastify';
import zippayData from './data/zippay.json';

let nextId = 2000;
let selectedPayments = zippayData.payments.slice(0, 10) as Array<Payment>;

export const PaymentsContext = createContext<Array<Payment> | null>(null);
export const DispatchContext = createContext<React.Dispatch<AddPaymentAction> | null>(null);

const reducer: Reducer<Array<Payment>, AddPaymentAction> = (state, action) => {
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

function ZipPayManager() {
	const [payments, dispatch] = useReducer(reducer, selectedPayments);

	const handleOnSavePayment = (payment: InputPayment) => {
		toast(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`, {
			position: 'bottom-right',
		});
	};

	return (
		<DispatchContext.Provider value={dispatch}>
			<PaymentsContext.Provider value={payments}>
				<section className="zippay-main">
					<Navbar></Navbar>
					<div className="container">
						<div className="row">
							<div className="col-5">
								<SendPayment onSavePayment={handleOnSavePayment} />
							</div>
							<div className="col">
								<PaymentsGrid />
							</div>
						</div>
					</div>{' '}
					<ToastContainer />
				</section>
			</PaymentsContext.Provider>
		</DispatchContext.Provider>
	);
}

export default ZipPayManager;
