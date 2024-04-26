import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let url = 'http://localhost:8100/payments';

export const fetchPayments = createAsyncThunk('payments/fetch', async () => {
	const response = await fetch(url);
	if (response.ok) {
		const payments = await response.json();
		return payments;
	} else {
		throw Error(`Bad response: ${response.status}`);
	}
});

const gridSlice = createSlice({
	name: 'paymentsGrid',
	initialState: {
		sortField: '',
		sortDirection: '',
		payments: [],
		fetchStatus: null,
		error: null,
	},
	reducers: {
		// Implement what we do in payments grid here
		updateSortField: (state, action) => {
			let field = action.payload;
			let nextSortDirection = 'asc';
			if (field === state.sortField && state.sortDirection === 'asc') {
				nextSortDirection = 'desc';
			} else if (field === state.sortField && state.sortDirection === 'desc') {
				nextSortDirection = '';
			}

			state.sortField = field;
			state.sortDirection = nextSortDirection;
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchPayments.pending, (state) => {
			state.fetchStatus = 'loading';
		});
		builder.addCase(fetchPayments.fulfilled, (state, action) => {
			state.fetchStatus = 'succes';
			state.payments = action.payload;
		});
		builder.addCase(fetchPayments.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		});
	},
});

export const sortFieldSelector = (state) => state.paymentsGrid.sortField;
export const sortDirectionSelector = (state) =>
	state.paymentsGrid.sortDirection;
export const paymentsSelector = (state) => state.paymentsGrid.payments;

export const { updateSortField } = gridSlice.actions;
export default gridSlice.reducer;
