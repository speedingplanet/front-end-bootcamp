import React, { useState } from 'react';
import Navbar from './Navbar';
import './zippay.css';
import SendPayment from './SendPayment';
import PaymentsGrid from './PaymentsGrid';

let nextId = 1;

function ZipPayManager() {
	const [paymentMessage, setPaymentMessage] = useState('');
	const [payments, setPayments] = useState<Array<Payment>>([])

	const handleOnSavePayment = (payment: InputPayment) => {
		let newPayment = {...payment, id: nextId++};
		setPayments([newPayment, ...payments]);
		setPaymentMessage(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`);
	};

	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<div className="container">
				<SendPayment onSavePayment={handleOnSavePayment} />
				<div>
					<p style={{ paddingTop: '2.5em' }}>{paymentMessage}</p>
				</div>
				<PaymentsGrid payments={payments} />
			</div>
		</section>
	);
}

export default ZipPayManager;
