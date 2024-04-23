import React from 'react';
import { expect, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CalculatorDisplay from './CalculatorDisplay';

test('Smoke test', () => {
	expect(1 + 1).toBe(2);
});

/*
###################################################################
# Part 1
###################################################################

Write a test that loads and displays CalculatorDisplay

`render` to render CalculatorDisplay 
Pass whatever values you'd like for attributes, but DO make sure to pass 
some values, or there will be no content to check.

Save and make sure it works by having `npm run test` running in a terminal
*/

it('should render CalculatorDisplay', () => {
	let testLValue = 15;
	let testRValue = 7;
	let testOperator = '+';

	render(
		<CalculatorDisplay
			lValue={testLValue}
			rValue={testRValue}
			operator={testOperator}
		/>,
	);

	expect(screen.getByText(testLValue)).toBeInTheDocument();
	expect(screen.getByText(testOperator)).toBeInTheDocument();
	expect(screen.getByText(testRValue)).toBeInTheDocument();
	expect(screen.getByText('=')).toBeInTheDocument();
});

/*
###################################################################
# Part 2
###################################################################

Add a test to ensure that the display is doing math correctly

What's the best solution for this? Could you use the `screen` object? Or 
would you use the `container` property? Or maybe a test ID? 

Or get to that information a different way, if you're feeling creative.

Go to Calculator.test.jsx for Part 3
*/

it('CalculatorDisplay should do math correctly', () => {
	let testLValue = 15;
	let testRValue = 7;
	let testOperator = '+';
	let testResult = testLValue + testRValue;

	render(
		<CalculatorDisplay
			lValue={testLValue}
			rValue={testRValue}
			operator={testOperator}
		/>,
	);

	expect(screen.getByText(testResult)).toBeInTheDocument();
});
