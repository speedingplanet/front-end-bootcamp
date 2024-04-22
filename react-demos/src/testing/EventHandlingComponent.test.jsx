import React from 'react';
import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventHandlingComponent from './EventHandlingComponent';

it('should test whether a button was clicked', async () => {
	render(<EventHandlingComponent />);
	let button = screen.getByText('Click me', { exact: false });

	// Recommended, sets up a stateful userEvent object
	let user = userEvent.setup();

	// Events happen asynchronously
	await user.click(button);

	// Throws an error and fails if the message is not found
	screen.getByText('You clicked on the button');
});

it('should test whether a button was clicked multiple times', async () => {
	render(<EventHandlingComponent />);
	let button = screen.getByText('Click me', { exact: false });

	// Recommended, sets up a stateful userEvent object
	let user = userEvent.setup();

	// Events happen asynchronously
	await user.click(button);
	await user.click(button);

	screen.getByText('You clicked on the button 2 times');
});

it('should test whether text was entered', () => {});
it('should test whether a div was hovered over', () => {});
