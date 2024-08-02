import { combineReducers, configureStore, createSelector } from "@reduxjs/toolkit";
import { reducer as todosReducer} from "./todos-slice";

export const store = configureStore({
	reducer: combineReducers({ 
		todos: todosReducer,
	}),
});

export type TodosState = ReturnType<typeof store.getState>;
export type TodosDispatch = typeof store.dispatch;
export const createTodosSelector = createSelector.withTypes<TodosState>();