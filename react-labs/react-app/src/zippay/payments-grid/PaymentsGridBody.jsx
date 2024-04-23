import React from 'react';
import PaymentsGridRow from './PaymentsGridRow';

function PaymentsGridBody({ payments }) {
	return (
		<div className="pgBody">
			{payments.map((payment) => (
				<PaymentsGridRow
					payment={payment}
					key={payment.id}
				/>
			))}
		</div>
	);
}

export default PaymentsGridBody;
