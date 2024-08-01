import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import SendReceive from './SendReceive';

describe('SendReceive', () => {
	test('Smoke test', () => {
		const handler = () => 0;
		render(<SendReceive onSavePayment={handler} />);
	});

	test('whether onSavePayment is invoked correctly', async () => {
		const user = userEvent.setup();

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const handler = vi.fn((p: InputPayment) => void 0);
		render(<SendReceive onSavePayment={handler} />);

		let testPayment: InputPayment = {
			recipient: 'John',
			amount: 5,
			reason: 'Test reason',
			visibility: 'public',
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
