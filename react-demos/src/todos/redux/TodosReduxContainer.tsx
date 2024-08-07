import React from 'react';
import { Provider } from 'react-redux';
import { store } from './todos-store';
import AddTask from './AddReduxTask';
import TaskList from './TaskReduxList';

const TodosReduxContainer = () => {
	return (
		<Provider store={store}>
			<section>
				<header className="row mb-2">
					<div className="col">
						<h3>Todos (context and reducer version)</h3>
					</div>
				</header>
				<AddTask />
				<TaskList />
			</section>
		</Provider>
	);
};

export default TodosReduxContainer;
