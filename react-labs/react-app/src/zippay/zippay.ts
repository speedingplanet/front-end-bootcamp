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

interface EditPaymentAction {
	type: 'payments/edit';
	payment: Payment;
}

interface PopulatePaymentsAction {
	type: 'payments/populate';
	payments: Array<Payment>;
}

interface AddAllPaymentsAction {
	type: 'payments/appendAll';
	payments: Array<Payment>;
}

// Discriminated union: uses the 'type' property to tell the difference between types
// Nothing magical about the word 'type', just the property we happen to be using
type ZipPayAction = AddPaymentAction | AddAllPaymentsAction | PopulatePaymentsAction;