import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

export const store = configureStore({
	reducer: counterSlice.reducer,
});

export type ReduxTkState = ReturnType<typeof store.getState>;
export type ReduxTkDispatch = typeof store.dispatch;

const { actions } = counterSlice;
export const { increment, decrement } = actions;
