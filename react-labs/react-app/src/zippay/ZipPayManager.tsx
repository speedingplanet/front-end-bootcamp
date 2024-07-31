import React, { useState } from 'react';
import Navbar from './Navbar';
import './zippay.css';
import 'react-toastify/dist/ReactToastify.css';
import SendPayment from './SendPayment';
import PaymentsGrid from './PaymentsGrid';
import { toast, ToastContainer } from 'react-toastify';
import zippayData from './data/zippay.json';

let nextId = 1;
let selectedPayments = zippayData.payments.slice(0, 10) as Array<Payment>;

function ZipPayManager() {
	const [payments, setPayments] = useState<Array<Payment>>(selectedPayments);

	const handleOnSavePayment = (payment: InputPayment) => {
		let newPayment: Payment = {
			...payment,
			id: nextId++,
			sender: 'Unknown',
			datePaid: new Date().toISOString(),
		};
		setPayments([newPayment, ...payments]);
		toast(`You paid ${payment.recipient} ${payment.amount} for ${payment.reason}`);
	};

	return (
		<section className="zippay-main">
			<Navbar></Navbar>
			<div className="container">
				<div className="row">
					<div className="col-5">
						<SendPayment onSavePayment={handleOnSavePayment} />
					</div>
					<div className="col">
						<PaymentsGrid payments={payments} />
					</div>
				</div>
			</div>{' '}
		</section>
	);
}

export default ZipPayManager;
