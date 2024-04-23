import React from 'react';
import './ProtoPaymentsGrid.css';
import { payments } from '../../data/payments.json';

function ProtoPaymentsGrid() {
	return (
		<section className="pgContainer">
			{/* Headers */}
			<div className="pgHeader">
				<div>Sender</div>
				<div>Recipient</div>
				<div>Date</div>
				<div>Amount</div>
				<div>Reason</div>
			</div>
			<div className="pgBody">
				{payments.map((payment) => (
					<div
						className="pgRow"
						key={payment.id}
					>
						<div>{payment.payorId}</div>
						<div>{payment.payeeId}</div>
						<div>{payment.datePaid}</div>
						<div>{payment.amount}</div>
						<div>{payment.reason}</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default ProtoPaymentsGrid;
