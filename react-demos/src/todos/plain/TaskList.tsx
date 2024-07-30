import React from 'react';
import { Task, TaskDisplay, TaskDisplayProps } from './TaskDisplay';

type TaskListProps = Omit<TaskDisplayProps, 'task'> & {
	tasks: Array<Task>;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
	return (
		<>
			<h4>Tasks</h4>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<TaskDisplay
							task={task}
							onChangeTask={onChangeTask}
							onDeleteTask={onDeleteTask}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
