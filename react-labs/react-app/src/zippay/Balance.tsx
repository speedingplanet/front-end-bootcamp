import React from 'react';
import PaymentsGrid from './PaymentsGrid';

const Balance = () => {
	return (
		<section>
			<header>
				<h3>Balance</h3>
			</header>
			<div>
				<p>Your current balance is: TBD</p>
			</div>
			<section>
				<h4>Recent transactions:</h4>
				<PaymentsGrid />
			</section>
		</section>
	);
};

export default Balance;
