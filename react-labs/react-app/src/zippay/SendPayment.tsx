import React, { useState } from 'react';

interface SendPaymentProps {
	onSavePayment: (payment: InputPayment) => void;
}

const initialFormState: InputPayment = {
	recipient: '',
	amount: 0,
	reason: '',
	datePaid: '',
	visibility: 'public',
};

const SendPayment = ({ onSavePayment }: SendPaymentProps) => {
	const [formState, setFormState] = useState(initialFormState);

	const handleFormUpdates = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	return (
		<div className="card">
			<div className="card-header text-center">Send a payment</div>
			<div className="card-body">
				{/* form>.row*3>label.col-sm-3+div.col>input:text */}
				<form>
					<div className="row mb-2">
						<label
							className="col-sm-3 col-form-label"
							htmlFor="recipient"
						>
							Recipient:{' '}
						</label>
						<div className="col-sm">
							<input
								type="text"
								id="recipient"
								name="recipient"
								className="form-control"
								onChange={handleFormUpdates}
								value={formState.recipient}
							/>
						</div>
					</div>
					<div className="row mb-2">
						<label
							className="col-sm-3 col-form-label"
							htmlFor="amount"
						>
							Amount:{' '}
						</label>
						<div className="col-sm">
							<input
								type="number"
								id="amount"
								name="amount"
								className="form-control"
								step="0.01"
								min="0.00"
								onChange={handleFormUpdates}
								value={formState.amount}
							/>
						</div>
					</div>
					<div className="row mb-2">
						<label
							className="col-sm-3 col-form-label"
							htmlFor="datePaid"
						>
							Date Paid:{' '}
						</label>
						<div className="col-sm">
							<input
								type="text"
								id="datePaid"
								name="datePaid"
								className="form-control"
								placeholder="YYYY-MM-DD"
								onChange={handleFormUpdates}
								value={formState.datePaid}
							/>
						</div>
					</div>
					<div className="row mb-2">
						<label
							className="col-sm-3 col-form-label"
							htmlFor="reason"
						>
							Reason:{' '}
						</label>
						<div className="col-sm">
							<input
								type="text"
								id="reason"
								name="reason"
								className="form-control"
								onChange={handleFormUpdates}
								value={formState.reason}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3">
						<span>Visibility</span>

						</div>
						<div className="col">
							<div className="form-check form-check-inline">
								<input
									type="radio"
									name="visibility"
									id="visibility-public"
									className="form-check-input"
									checked
								/>
								<label
									className="form-check-label"
									htmlFor="visibility-public"
								>
									Public
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									type="radio"
									name="visibility"
									id="visibility-private"
									className="form-check-input"
								/>
								<label
									className="form-check-label"
									htmlFor="visibility-private"
								>
									Private
								</label>
							</div>
						</div>
					</div>
					<div className="row mb-2">
						<div className="col-sm offset-sm-3 text-end">
							<button
								type="button"
								className="btn btn-small btn-primary"
								onClick={() => onSavePayment(formState)}
							>
								Send
							</button>
						</div>{' '}
					</div>
				</form>
			</div>
		</div>
	);
};

export default SendPayment;
