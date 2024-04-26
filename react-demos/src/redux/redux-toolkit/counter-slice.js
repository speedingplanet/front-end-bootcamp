import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 5,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			console.log('Called incrementByAmount');
			state.value += action.payload;
		},
	},
});

export const countSelector = (state) => state.counter.value;

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
