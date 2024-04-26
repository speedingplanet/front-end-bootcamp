import React, { useState } from 'react';
import { payments } from '../../../data/payments.json';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';
import { orderBy } from 'lodash';
import { NavLink } from 'react-router-dom';

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

let columns = [
	{ label: 'Payment ID', field: 'id', visible: false },
	{
		label: 'Sender',
		field: 'payorId',
		visible: true,
		renderer: (userId) => <NavLink to={`../user/${userId}`}>{userId}</NavLink>,
	},
	{
		label: 'Recipient',
		field: 'payeeId',
		visible: true,
		renderer: (userId) => <NavLink to={`../user/${userId}`}>{userId}</NavLink>,
	},
	{
		label: 'Date',
		field: 'datePaid',
		visible: true,
	},
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

function PaymentsGrid() {
	const [sortConfig, setSortConfig] = useState({
		sortField: '',
		sortDirection: '',
	});

	function handleSelectHeader(field) {
		console.log(`Sort field should be ${field}`);
		// TODO: figure out what the sortDirection value should be
		// if the current sort field and the last sort field ARE NOT the same: sort ascending
		// if the current sort field and the last sort field ARE the same...
		// if the previous sort direction was 'asc', make it 'desc'
		// if the previous sort direction was 'desc', make it ''
		// if the previous sort direction was '', make it 'asc'

		let nextSortDirection = 'asc';
		if (field === sortConfig.sortField && sortConfig.sortDirection === 'asc') {
			nextSortDirection = 'desc';
		} else if (
			field === sortConfig.sortField &&
			sortConfig.sortDirection === 'desc'
		) {
			nextSortDirection = '';
		}

		setSortConfig({
			sortField: field,
			sortDirection: nextSortDirection,
		});
	}

	let sortedPayments =
		sortConfig.sortDirection === ''
			? payments
			: orderBy(payments, sortConfig.sortField, sortConfig.sortDirection);

	return (
		<section
			className="pgContainer"
			style={{ '--columns': columnCount }}
		>
			<PaymentsGridHeader
				columns={columns}
				selectHeader={handleSelectHeader}
				sortConfig={sortConfig}
			/>
			<PaymentsGridBody
				columns={columns}
				payments={sortedPayments}
			/>
		</section>
	);
}

export default PaymentsGrid;
