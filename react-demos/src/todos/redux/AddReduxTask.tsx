import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todos-slice';

export default function AddTask() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

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
						dispatch(addTodo(text));
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
