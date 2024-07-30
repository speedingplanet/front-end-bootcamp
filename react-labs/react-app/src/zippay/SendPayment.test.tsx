import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SendPayment from './SendPayment';

describe('SendPayment', () => {
	test('Smoke test', () => {
		const handler = (p: Payment) => 0;
		render(<SendPayment onSavePayment={handler} />);
	});

	test('Should invoke the event handler', async () => {
		const user = userEvent.setup();
		const handler = vi.fn((p: Payment) => 0);
		render(<SendPayment onSavePayment={handler} />);

		let testPayment: Payment = {
			recipient: 'John',
			amount: 5,
			reason: 'Test reason',
		};

		let recipientField = screen.getByLabelText(/Recipient/);
		let amountField = screen.getByLabelText(/Amount/);
		let reasonField = screen.getByLabelText(/Reason/);
		let saveButton = screen.getByRole('button');

		await user.type(recipientField, testPayment.recipient);
		await user.type(amountField, testPayment.amount + '');
		await user.type(reasonField, testPayment.reason);

		expect(handler).not.toHaveBeenCalled();

		await user.click(saveButton);
		expect(handler).toHaveBeenCalled();

		// lastCall returns an array of arguments, we know there's only one
		let results = handler.mock.lastCall![0];
		expect(results.recipient).toEqual(testPayment.recipient);
	});
});
