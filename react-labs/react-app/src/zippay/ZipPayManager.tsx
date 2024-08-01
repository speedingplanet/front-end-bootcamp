import React, { useReducer } from 'react';
import Navbar from './BootstrapNavbar';
import './zippay.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { DispatchContext, PaymentsContext, reducer } from './zippay-context';
import { toast, ToastContainer } from 'react-toastify';
import SendReceive from './SendReceive';
import Balance from './Balance';
import zippayData from './data/zippay.json';

let selectedPayments = zippayData.payments.slice(0, 10) as Array<Payment>;

function ZipPayManager() {
	const [payments, dispatch] = useReducer(reducer, selectedPayments);

	const handleOnSavePayment = (payment: InputPayment) => {
		toast(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`, {
			position: 'bottom-right',
		});
	};

	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<DispatchContext.Provider value={dispatch}>
				<PaymentsContext.Provider value={payments}>
					<div className="container">
						<div className="row">
							<div className="col">
								<Routes>
									<Route
										path="/"
										element={<h2>Content goes here</h2>}
									/>
									<Route
										path="send-receive"
										element={<SendReceive onSavePayment={handleOnSavePayment} />}
									/>
									<Route
										path="split-the-bill"
										element={<h2>Split-the-bill placeholder</h2>}
									/>
									<Route
										path="balance"
										element={<Balance />}
									/>
									<Route
										path="account-settings"
										element={<h2>Account Settings placeholder</h2>}
									/>
									<Route
										path="search"
										element={<h2>Search placeholder</h2>}
									/>
								</Routes>
							</div>
						</div>
					</div>
				</PaymentsContext.Provider>
			</DispatchContext.Provider>
			<ToastContainer />
		</section>
	);
}

export default ZipPayManager;
