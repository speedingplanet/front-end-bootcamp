/* eslint-disable @typescript-eslint/no-unused-vars */
interface Payment {
	id: number;
	sender: string;
	recipient: string;
	datePaid: string;
	amount: number;
	reason: string;
	visibility: 'public' | 'private';
}

// Omit<TargetType, 'list' | 'of' | 'props'>
type InputPayment = Omit<Payment, 'id' | 'sender' | 'datePaid'>;

interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	userId: string;
	city: string;
	province: string;
	country: 'United States' | 'Canada';
	postalCode: string;
}

interface AddPaymentAction {
	type: 'payments/add';
	payment: InputPayment;
}
