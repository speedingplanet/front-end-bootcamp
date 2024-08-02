import React from 'react';
import TaskDisplay from './TaskReduxDisplay';
import { useSelector } from 'react-redux';
import { TodosState } from './todos-store';

export default function TaskList() {
	const tasks = useSelector((state: TodosState) => state.todos);

	return (
		<>
			<h4>Tasks</h4>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<TaskDisplay task={task} />
					</li>
				))}
			</ul>
		</>
	);
}
