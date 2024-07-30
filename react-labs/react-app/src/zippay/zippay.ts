// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Payment {
	id: number;
	recipient: string;
	amount: number;
	reason: string;
}

type InputPayment = Omit<Payment, 'id'>;
