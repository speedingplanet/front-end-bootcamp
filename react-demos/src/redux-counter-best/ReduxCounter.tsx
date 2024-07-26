import { connect } from 'react-redux';
import Counter from './Counter';
import { addOne, subtractOne } from './actions';

//@ts-ignore
const mapStateToProps = (state) => ({
	value: state.counter,
});

//@ts-ignore
const mapDispatchToProps = (dispatch) => ({
	increment: () => dispatch(addOne()),
	decrement: () => dispatch(subtractOne()),
});

const ReduxCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ReduxCounter;
