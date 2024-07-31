import React from 'react';

interface PaymentsGridProps {
	payments: Array<Payment>;
}

const PaymentsGrid = ({ payments }: PaymentsGridProps) => {
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
