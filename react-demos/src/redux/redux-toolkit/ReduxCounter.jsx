import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';
import { increment, decrement } from './counter-slice';

export default function ReduxCounter() {
	// Maybe ReduxCounter shouldn't know about state structure...?
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<Counter
			increment={() => dispatch(increment())}
			decrement={() => dispatch(decrement())}
			value={count}
		/>
	);
}
