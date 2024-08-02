import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let nextId = 10;
const initialState: Array<Task> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.push({
				id: nextId++,
				text: action.payload,
				done: false,
			});
		},
		changeTodo: (state, action: PayloadAction<Task>) => {
			return state.map((t) => {
				if (t.id === action.payload.id) {
					return action.payload;
				} else {
					return t;
				}
			});
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			return state.filter((t) => t.id !== action.payload);
		},
	},
});

const { actions } = todosSlice;
export const { addTodo, changeTodo, deleteTodo } = actions;
export const reducer = todosSlice.reducer;
