import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';
import { increment, decrement, countSelector } from './counter-slice';

export default function ReduxCounter() {
	let count = useSelector(countSelector);
	const dispatch = useDispatch();

	return (
		<Counter
			increment={() => dispatch(increment())}
			decrement={() => dispatch(decrement())}
			value={count}
		/>
	);
}
