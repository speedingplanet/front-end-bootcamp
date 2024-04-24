import React from 'react';
import PaymentsGridRow from './PaymentsGridRow';

function PaymentsGridBody({ payments, columns }) {
	return (
		<div className="pgBody">
			{payments.map((payment) => (
				<PaymentsGridRow
					columns={columns}
					payment={payment}
					key={payment.id}
				/>
			))}
		</div>
	);
}

export default PaymentsGridBody;
