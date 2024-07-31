/* eslint-disable @typescript-eslint/no-unused-vars */
interface Payment {
	id: number;
	recipient: string;
	amount: number;
	reason: string;
}

// Omit<TargetType, 'list' | 'of' | 'props'>
type InputPayment = Omit<Payment, 'id'>;
