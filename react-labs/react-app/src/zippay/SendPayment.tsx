import React, { useState } from 'react';

interface SendPaymentProps {
	onSavePayment: (payment: Payment) => void;
}

const initialFormState: Payment = {
	recipient: '',
	amount: 0,
	reason: '',
};

const SendPayment = ({ onSavePayment }: SendPaymentProps) => {
	const [formState, setFormState] = useState(initialFormState);

	const handleFormUpdates = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	return (
		// form>.row*3>label.col-3+div.col>input:text
		<form>
			<div className="send-payment-form">
				<div className="form-label">
					<label htmlFor="recipient">Recipient: </label>
				</div>
				<div>
					<input
						type="text"
						id="recipient"
						name="recipient"
						onChange={handleFormUpdates}
						value={formState.recipient}
					/>
				</div>
				<div className="form-label">
					<label htmlFor="amount">Amount: </label>
				</div>
				<div>
					<input
						type="number"
						id="amount"
						name="amount"
						onChange={handleFormUpdates}
						value={formState.amount}
					/>
				</div>
				<div className="form-label">
					<label htmlFor="reason">Reason: </label>
				</div>
				<div>
					<input
						type="text"
						id="reason"
						name="reason"
						onChange={handleFormUpdates}
						value={formState.reason}
					/>
				</div>
				<div style={{ gridColumn: '-2 / -1' }}>
					<button
						type="button"
						onClick={() => onSavePayment(formState)}
					>
						Send
					</button>
				</div>
			</div>
		</form>
	);
};

export default SendPayment;
