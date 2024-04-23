import React from 'react';
import { it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicComponent from './BasicComponent';

//  This test does not even involve React
it('First test using it()', () => {
	// expect(actual value).matcher(expected value)
	expect(1 + 1).toBe(2);
});

// Nor does this one
test('First test using test()', () => {
	expect(1 + 1).toBe(2);
});

/*
 * We will prefer using it() for test calls
 *
 * This test succeeds or fails based on:
 * Can BasicComponent render without an error?
 * Can we find the "Apples" bullet point in BasicComponent?
 * Can we find the "Bananas" bullet point in BasicComponent?
 *
 */

it('should render the BasicComponent component', () => {
	render(<BasicComponent />);

	/*
	Find an element by its text, error/failure if not found
	screen.getByText('Apples')
	expect().not -> Negates the next matcher
	toBeNull() -> Checks for nullity
	*/

	expect(screen.getByText('Apples')).not.toBeNull();
	expect(screen.getByText('Bananas')).toBeInTheDocument();
});

it('should use the queryBy* queries', () => {
	render(<BasicComponent />);

	// queryBy* returns null if a value is not found
	expect(screen.queryByText('Apples')).not.toBeNull();
	expect(screen.queryByText('Pears')).toBeNull();
	expect(screen.queryByText('Bananas')).toBeInTheDocument();
});

/*
 * Access the component in several ways
 *
 * Using getByText() exactly at first
 * Then using getByText enabling a partial match
 * Then using getByText with a regular expression
 *
 */
it('should access content in the component in several ways', () => {
	render(<BasicComponent />);

	// Plain text, must be exact, case sensitive
	expect(screen.getByText('Bananas')).not.toBeNull();

	// null because 'apples' starts with a lowercase 'a' and is not found in the document
	expect(screen.queryByText('bananas')).toBeNull();

	// Inexact match, and case-insensitive
	expect(screen.queryByText('Ban', { exact: false })).not.toBeNull();
	expect(screen.queryByText('bananas', { exact: false })).not.toBeNull();

	// Regular expression match (case-insensitive matching the string 'ban')
	expect(screen.queryByText(/ban/i)).not.toBeNull();
});

it('should access text that appears more than once', () => {
	render(<BasicComponent />);

	// Finds "Grapes" but not "Green Grapes"
	expect(screen.queryByText('Grapes')).toBeInTheDocument();

	// Would throw an error, because more than one "Plantains" element exists
	// expect(screen.queryByText('Plantains')).toBeInTheDocument();

	// The solution: use the *allBy* queries,
	// Do NOT use toBeInTheDocument, which expects one element, not multiple elements
	expect(screen.queryAllByText('Plantains')).not.toBeNull();
});

/*
	This may be necessary sometimes, but it goes against the philosophy of
	testing library
*/
it('should allow access to the underlying DOM', () => {
	// The nearest element wrapper around this component
	const { container } = render(<BasicComponent />);

	let secondListItem = container.querySelector('li:nth-child(2)');
	expect(secondListItem).not.toBeNull();
	expect(secondListItem.textContent).toEqual('Bananas');
});

// Look at BasicComponent.jsx and look for the element with the attribute 'data-testid'
it('should allow access via a test id', () => {
	render(<BasicComponent />);
	expect(screen.getByTestId('oranges')).not.toBeNull();
});

it("should access a form field via the field's label", () => {
	render(<BasicComponent />);
	let formField = screen.getByLabelText(/favorite/i);
	expect(formField).toBeInTheDocument();
	expect(formField).toBeVisible();

	// formField is a reference to the referent of the label text
	// NOT the label itself
	expect(formField.nodeName).toEqual('INPUT');
});

/*
 * Event handling!
 * Uses the 'user-event' library from Testing Library to fire an event and test results
 *
 */

it('should respond to content typed into a form field', async () => {
	const { container } = render(<BasicComponent />);
	let formField = screen.getByLabelText(/favorite/i);
	expect(formField).toHaveValue('');

	let lastItem = container.querySelector('li:last-child');
	expect(lastItem).toHaveTextContent('');

	let fruit = 'Lemons';

	// Running an event happens asynchronously
	await userEvent.type(formField, fruit);

	// Three indicators of success, the form field is updated, the list item
	// is updated, and we can target elements by the entered value "Lemons"
	expect(formField).toHaveValue(fruit);
	expect(lastItem).toHaveTextContent(fruit);
	expect(screen.getByText(fruit)).toBeInTheDocument();
});
