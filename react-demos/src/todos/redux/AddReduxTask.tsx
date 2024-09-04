import React, { useState } from 'react';
import { useTodosDispatch } from './todos-hooks';
import { saveTodo } from './todos-slice';

export default function AddTask() {
	const [text, setText] = useState('');
	const dispatch = useTodosDispatch();

	return (
		<div className="row mb-4">
			<div className="col">
				<input
					placeholder="Add task"
					className="form-control"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="col">
				<button
					className="btn btn-primary btn-small"
					onClick={() => {
						setText('');
<<<<<<< HEAD
						dispatch(saveTodo(text));
=======
						dispatch(addTodo(text))
>>>>>>> main
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
