import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';
import { increment, decrement, saveCounter } from './counter-slice';

export default function ReduxCounter() {
	// Maybe ReduxCounter shouldn't know about state structure...?
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<Counter
				increment={() => dispatch(increment())}
				decrement={() => dispatch(decrement())}
				value={count}
			/>
			<div className="mt-2 text-center">
				<button
					className="btn btn-primary"
					onClick={() => dispatch(saveCounter(count))}
				>
					Save
				</button>
			</div>
		</>
	);
}
