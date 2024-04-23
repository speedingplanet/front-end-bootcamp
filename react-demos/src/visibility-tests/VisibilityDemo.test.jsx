import React from 'react';
import { expect, describe, beforeEach, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import VisibilityDemo from './VisibilityDemo';

describe('Visibility tests', () => {
	let queryByTestId, getByText;

	beforeEach(() => {
		let queries = render(<VisibilityDemo />);
		queryByTestId = queries.queryByTestId;
		getByText = queries.getByText;
	});

	test('Toggle DOM absence', () => {
		const button = getByText('Toggle DOM');
		const box = queryByTestId('DOM');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();

		fireEvent.click(button);
		expect(box).not.toBeInTheDocument();
	});

	test('Toggle Visibility', () => {
		const button = getByText('Toggle Visibility');
		const box = queryByTestId('visibility');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Display', () => {
		const button = getByText('Toggle Display');
		const box = queryByTestId('display');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Opacity', () => {
		const button = getByText('Toggle Opacity');
		const box = queryByTestId('opacity');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});

	test('Toggle Hidden', () => {
		const button = getByText('Toggle Hidden');
		const box = queryByTestId('hidden');
		// Verify that the box is in the DOM
		expect(box).toBeInTheDocument();
		expect(box).toBeVisible();

		fireEvent.click(button);
		expect(box).toBeInTheDocument();
		expect(box).not.toBeVisible();
	});
});
