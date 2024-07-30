interface Task {
	id: number;
	text: string;
	done: boolean;
}

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
