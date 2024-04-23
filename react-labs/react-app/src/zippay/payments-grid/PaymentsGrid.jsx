import React from 'react';
import { payments } from '../../../data/payments.json';
import PaymentsGridHeader from './PaymentsGridHeader';
import PaymentsGridBody from './PaymentsGridBody';

function PaymentsGrid() {
	return (
		<section className="pgContainer">
			<PaymentsGridHeader />
			<PaymentsGridBody payments={payments} />
		</section>
	);
}

export default PaymentsGrid;
