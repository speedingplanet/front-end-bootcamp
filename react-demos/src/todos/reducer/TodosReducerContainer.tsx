import React, { Reducer, useReducer } from 'react';
import AddTask from '../plain/AddTask';
import TaskList from '../plain/TaskList';
import { Task } from '../plain/TaskDisplay';

interface AddAction {
	type: 'todos/add';
	text: string;
}

interface EditAction {
	type: 'todos/change';
	task: Task;
}

interface DeleteAction {
	type: 'todos/delete';
	taskId: number;
}

// Discriminated union: https://mkosir.github.io/typescript-style-guide/#discriminated-union
type TodoAction = AddAction | EditAction | DeleteAction;

let nextId = 3;
const initialTasks: Array<Task> = [
	{ id: 1, text: 'Groceries', done: false },
	{ id: 2, text: 'Change oil', done: true },
	{ id: 3, text: 'Clean kitchen table', done: false },
];

const reducer: Reducer<Array<Task>, TodoAction> = (state, action) => {
	switch (action.type) {
		case 'todos/add':
			return [
				...state,
				{
					id: nextId++,
					text: action.text,
					done: false,
				},
			];
		case 'todos/change':
			return state.map((t) => {
				if (t.id === action.task.id) {
					return action.task;
				} else {
					return t;
				}
			});
		case 'todos/delete':
			return state.filter((t) => t.id !== action.taskId);
		default:
			throw Error(`No case found!`);
	}
};

const TodosContainer = () => {
	const [state, dispatch] = useReducer(reducer, initialTasks);

	return (
		<section>
			<header className="row mb-2">
				<div className="col">
					<h3>Todos (reducer version)</h3>
				</div>
			</header>
			<AddTask onAddTask={(text) => dispatch({ type: 'todos/add', text })} />
			<TaskList
				tasks={state}
				onChangeTask={(task) => dispatch({type: 'todos/change', task})}
				onDeleteTask={(taskId) => dispatch({type: 'todos/delete', taskId})}
			/>
		</section>
	);
};

export default TodosContainer;
