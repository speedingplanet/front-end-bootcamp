import React, { useState } from 'react';
import classes from './EventHandlingComponent.module.css';

let initialState = {
	buttonMessage: '',
	buttonCount: 0,
	textFieldMessage: '',
	mouseOverMessage: '',
};

function EventHandlingComponent() {
	let [state, setState] = useState(initialState);

	function handleButton() {
		console.log('Clicked on the button');
		if (!state.buttonCount || state.buttonCount === 0) {
			setState({
				...state,
				buttonMessage: 'You clicked on the button',
				buttonCount: 1,
			});
		} else {
			setState({
				...state,
				buttonMessage: `You clicked on the button ${state.buttonCount + 1} times`,
				buttonCount: state.buttonCount + 1,
			});
		}
	}

	function handleTextField(event) {
		setState({ ...state, textFieldMessage: event.currentTarget.value });
	}

	function handleMouseEnter() {
		setState({ ...state, mouseOverMessage: 'The mouse is over the div' });
	}

	function handleMouseLeave() {
		setState({ ...state, mouseOverMessage: 'The mouse is NOT over the div' });
	}

	return (
		<section className={classes.ehComponent}>
			<header>
				<h2>Event Handling Component</h2>
				<p>A demonstration of many aspects of event handling</p>
			</header>
			<div>
				<h3>Button</h3>
				<p>
					Click this button:{' '}
					<button
						className="btn btn-primary"
						onClick={handleButton}
					>
						Click me
					</button>
				</p>
			</div>
			<div>
				<p>{state.buttonMessage}</p>
			</div>
			<div>
				<h3>Text field</h3>
				<p>
					<label htmlFor="eh-text-field">
						Type something into this form field
					</label>{' '}
					<input
						type="text"
						name="eh-text-field"
						id="eh-text-field"
						value={state.textFieldMessage}
						onChange={handleTextField}
					/>
				</p>
			</div>
			<div>
				<p>
					{state.textFieldMessage
						? state.textFieldMessage
						: 'No text entered yet'}
				</p>
			</div>
			<div>
				<h3>Mouse over</h3>
				<div
					className={classes.mouseOver}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<p>
						An event should trigger when a mouse enters or leaves this element
					</p>
				</div>
			</div>
			<div>
				<p>{state.mouseOverMessage}</p>
			</div>
		</section>
	);
}

export default EventHandlingComponent;
