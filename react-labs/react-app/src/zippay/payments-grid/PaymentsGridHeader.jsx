import React from 'react';

function PaymentsGridHeader() {
	return (
		<div className="pgHeader">
			<div>Sender</div>
			<div>Recipient</div>
			<div>Date</div>
			<div>Amount</div>
			<div>Reason</div>
		</div>
	);
}

export default PaymentsGridHeader;
