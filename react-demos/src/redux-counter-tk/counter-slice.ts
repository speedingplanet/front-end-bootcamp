import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
	},
});

/*
let reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			return state;
	}
};
*/

export const store = configureStore({
	reducer: combineReducers({ 
		counter: counterSlice.reducer,
	}),
});

export type CounterState = ReturnType<typeof store.getState>;
export type ReduxTkDispatch = typeof store.dispatch;

const { actions } = counterSlice;
export const { increment, decrement } = actions;
