import React, { useState } from 'react';
import Navbar from './Navbar';
import './zippay.css';
import 'react-toastify/dist/ReactToastify.css';
import SendPayment from './SendPayment';
import PaymentsGrid from './PaymentsGrid';
import { toast, ToastContainer } from 'react-toastify';

let nextId = 1;

function ZipPayManager() {
	const [payments, setPayments] = useState<Array<Payment>>([]);

	const handleOnSavePayment = (payment: InputPayment) => {
		let newPayment: Payment = { ...payment, id: nextId++, sender:'Unknown' };
		setPayments([newPayment, ...payments]);
		toast(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`);
	};

	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<div className="container">
				<div className="row">
					<div className="col-6 offset-3">
						<SendPayment onSavePayment={handleOnSavePayment} />
					</div>
					<div className="col">
						<ToastContainer />
					</div>
					{/* <div className="col">
						<PaymentsGrid payments={payments} />
					</div> */}
				</div>
			</div>{' '}
		</section>
	);
}

export default ZipPayManager;
