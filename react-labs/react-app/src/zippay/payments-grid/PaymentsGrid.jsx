import React from 'react';
import { payments } from '../../../data/payments.json';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';

/*
How can we say: 
- I want sender, recipient, amount
- I want id, recipient, reason, amount

columns: ['payorId', 'payeeId', 'amount']
columns: [
	{label: 'Payment ID', field: 'id', visible: false},
	{label: 'Sender', field: 'payorId', visible: true},
	{label: 'Recipient', field: 'payeeId', visible: true},
	{label: 'Date', field: 'datePaid', visible: false},
	{label: 'Amount', field: 'amount', visible: true},
	{label: 'Reason', field: 'reason', visible: true},
]
*/

function PaymentsGrid() {
	let columns = [
		{ label: 'Payment ID', field: 'id', visible: false },
		{ label: 'Sender', field: 'payorId', visible: true },
		{ label: 'Recipient', field: 'payeeId', visible: true },
		{ label: 'Date', field: 'datePaid', visible: true },
		{ label: 'Amount', field: 'amount', visible: true },
		{ label: 'Reason', field: 'reason', visible: true },
	];

	// There are about fifty ways to do this.
	let columnCount = 0;
	columns.forEach((column) => {
		if (column.visible) {
			columnCount++;
		}
	});

	return (
		<section
			className="pgContainer"
			style={{ '--columns': columnCount }}
		>
			<PaymentsGridHeader columns={columns} />
			{/* <PaymentsGridBody payments={payments} /> */}
		</section>
	);
}

export default PaymentsGrid;
