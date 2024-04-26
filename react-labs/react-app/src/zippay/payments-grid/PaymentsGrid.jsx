import React from 'react';
import { useSelector } from 'react-redux';
import {
	sortFieldSelector,
	sortDirectionSelector,
} from './payments-grid-slice';
import { payments } from '../../../data/payments.json';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';
import './PaymentsGrid.css';
import { orderBy } from 'lodash';
import { NavLink } from 'react-router-dom';

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
	let reduxSortField = useSelector(sortFieldSelector);
	let reduxSortDirection = useSelector(sortDirectionSelector);

	let sortedPayments =
		reduxSortDirection === ''
			? payments
			: orderBy(payments, reduxSortField, reduxSortDirection);

	return (
		<section
			className="pgContainer"
			style={{ '--columns': columnCount }}
		>
			<PaymentsGridHeader columns={columns} />
			<PaymentsGridBody
				columns={columns}
				payments={sortedPayments}
			/>
		</section>
	);
}

export default PaymentsGrid;
