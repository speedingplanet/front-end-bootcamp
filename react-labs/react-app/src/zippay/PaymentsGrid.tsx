import React from 'react'

interface PaymentsGridProps {
	payments: Array<Payment>;
}

const PaymentsGrid = ({payments}: PaymentsGridProps) => {
	return (
		<ul>
			{
				payments.map(payment => (
					<li key={payment.id}>You paid {payment.recipient} {payment.amount} for {payment.reason}</li>
				))
			}
		</ul>
	)
}

export default PaymentsGrid