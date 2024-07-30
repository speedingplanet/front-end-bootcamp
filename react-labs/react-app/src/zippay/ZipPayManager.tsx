import React, { useState } from 'react';
import Navbar from './Navbar';
import './zippay.css';
import SendPayment from './SendPayment';

function ZipPayManager() {
	const [paymentMessage, setPaymentMessage] = useState('');

	const handleOnSavePayment = (payment: Payment) => {
		setPaymentMessage(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`)
	}

	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<SendPayment onSavePayment={handleOnSavePayment}/>
			<p>{paymentMessage}</p>
		</section>
	);
}

export default ZipPayManager;
