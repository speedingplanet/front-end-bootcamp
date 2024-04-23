import React from 'react';

function PaymentsGridRow({ payment }) {
	const {
		payorId: sender,
		payeeId: recipient,
		datePaid,
		amount,
		reason,
	} = payment;
	return (
		<div className="pgRow">
			<div>{sender}</div>
			<div>{recipient}</div>
			<div>{datePaid}</div>
			<div>{amount}</div>
			<div>{reason}</div>
		</div>
	);
}

export default PaymentsGridRow;
