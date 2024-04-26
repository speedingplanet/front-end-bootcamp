import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let url = 'http://localhost:8000/counter';

export const fetchCounter = createAsyncThunk(
	'counter/fetchCounter',
	async () => {
		const response = await fetch(url);
		if (response.ok) {
			const counter = await response.json();
			return counter.value;
		}
	},
);

export const saveCounter = createAsyncThunk(
	'counter/saveCounter',
	async (value) => {
		const response = await fetch(url, {
			method: 'put',
			body: JSON.stringify({ value }),
			headers: {
				'Content-type': 'application/json',
			},
		});
		if (response.ok) {
			const counter = await response.json();
			return counter.value;
		}
	},
);

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		status: null,
		error: null,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCounter.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchCounter.fulfilled, (state, action) => {
				state.status = 'success';
				state.value = action.payload;
			})
			.addCase(fetchCounter.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(saveCounter.pending, (state) => {
				state.status = 'saving';
			})
			.addCase(saveCounter.fulfilled, (state) => {
				state.status = 'success';
			})
			.addCase(saveCounter.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
