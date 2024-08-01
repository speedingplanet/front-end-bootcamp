import React, { useContext } from 'react';
import { PaymentsContext } from './zippay-context';

const PaymentsGrid = () => {
	const payments = useContext(PaymentsContext);

	if (payments === null) throw Error('no payments!');

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Recipient</th>
					<th>Amount</th>
					<th>Reason</th>
				</tr>
			</thead>
			<tbody>
				{payments.map((payment) => (
					<tr key={payment.id}>
						<td>{payment.recipient}</td>
						<td>{payment.amount}</td>
						<td>{payment.reason}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PaymentsGrid;
