import React from 'react';
import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import Calculator from './Calculator';

it('Smoke test', () => {
	expect(1 + 1).toBe(2);
});

/*
###################################################################
# Part 3
###################################################################

Write a test that loads and displays Calculator

`render` to render Calculator 

You could use `getByLabelText` to see if you could find the label for the drop-down
Don't forget that it takes a TextMatch argument, not just a string
https://testing-library.com/docs/queries/about/#textmatch

Save and make sure it works by having `npm run test` running in a terminal
*/

it('should correctly render Calculator', () => {
	render(<Calculator />);

	expect(screen.getByText('Choose an operator:')).not.toBeNull();

	// Actually gets a different element, which we'll see soon.
	expect(screen.getByLabelText('Choose an operator:')).not.toBeNull();

	expect(screen.getByLabelText(/operator/)).not.toBeNull();
	expect(screen.getByLabelText('operator:', { exact: false })).not.toBeNull();
});

/*
###################################################################
# Part 4
###################################################################

Write a test to make sure that the equation is not displayed initially

You probably want the `toBeVisible` matcher called on your `expect`
*/

it('should not display the equation initially', () => {
	render(<Calculator />);
	let lValueElement = screen.queryByText('5');
	expect(lValueElement).not.toBeNull();
	expect(lValueElement).toBeInTheDocument();
	expect(lValueElement).not.toBeVisible();
});

/*
###################################################################
# Part 5
###################################################################

Write a test to make sure that the equation IS displayed after choosing an 
operator

You will need to use `userEvent` with `selectOptions` to trigger a select event
https://testing-library.com/docs/user-event/v13/#selectoptionselement-values-options

Remember that you are selecting based on the 'value' attribute of the <option>

Also remember that events are ASYNCHRONOUS. So label your function `async`
and be sure to `await` userEvent calls

Several different ways you could find out if the equation is displayed.
*/

it('should display the results after choosing an operator', async () => {
	render(<Calculator />);
	// Verify our assumptions

	// Calculator display is not shown
	let lValueElement = screen.queryByText('5');
	expect(lValueElement).not.toBeNull();
	expect(lValueElement).toBeInTheDocument();
	expect(lValueElement).not.toBeVisible();

	// Get a reference to the operator select list
	let selectList = screen.getByLabelText(/operator/i);

	// Verify that the blank option is selected
	expect(selectList).toHaveValue('');

	// Select an operator
	let user = userEvent.setup();

	// Select by value (text match NOT available, no RegExps, no {exact: false})
	// await user.selectOptions(selectList, '+');
	await user.selectOptions(selectList, '+ Addition');

	// Check to see if CalculatorDisplay is visible
	expect(lValueElement).toBeVisible();

	// Maybe check the results
	expect(screen.queryByText('+')).not.toBeNull();
	expect(screen.queryByText('15')).not.toBeNull();
});
