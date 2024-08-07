import React, { useContext, useState } from 'react';
import { DispatchContext } from './TodosContextContainer';

export default function AddTask() {
	const [text, setText] = useState('');
	const dispatch = useContext(DispatchContext);

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
						dispatch!({ type: 'todos/add', text });
					}}
				>
					Add
				</button>
			</div>
		</div>
	);
}
