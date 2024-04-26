import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	updateSortField,
	sortFieldSelector,
	sortDirectionSelector,
} from './payments-grid-slice';
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

/*
PaymentsGrid needs from Redux
sortDirection
sortField

PaymentsGrid tells Redux
PaymentsGridHeader.selectHeader sends a change that should be received by Redux

*/
function PaymentsGrid() {
	let dispatch = useDispatch();
	let reduxSortField = useSelector(sortFieldSelector);
	let reduxSortDirection = useSelector(sortDirectionSelector);

	function handleSelectHeader(field) {
		console.log(`Sort field should be ${field}`);
		dispatch(updateSortField(field));
	}

	let sortedPayments =
		reduxSortDirection === ''
			? payments
			: orderBy(payments, reduxSortField, reduxSortDirection);

	return (
		<section
			className="pgContainer"
			style={{ '--columns': columnCount }}
		>
			<PaymentsGridHeader
				columns={columns}
				selectHeader={handleSelectHeader}
				sortConfig={{
					sortField: reduxSortField,
					sortDirection: reduxSortDirection,
				}}
			/>
			<PaymentsGridBody
				columns={columns}
				payments={sortedPayments}
			/>
		</section>
	);
}

export default PaymentsGrid;
