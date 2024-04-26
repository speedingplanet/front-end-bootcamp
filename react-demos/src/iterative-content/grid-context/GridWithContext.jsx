import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { countries } from '../../../data/countries-table.json';
import { GridContext } from './grid-context.js';
import GridHeaderRow from './GridHeaderRowContext';
import GridBody from './GridBodyContext';
import '../GridExample.css';

let initialSortConfig = {
	sortField: '',
	sortDirection: 'asc',
};

let formatter = new Intl.NumberFormat();

let columns = [
	{
		field: 'country',
		label: 'Country',
	},
	{
		field: 'pop2022',
		label: 'Population (2022)',
		formatter: (v) => formatter.format(v),
	},
	{
		field: 'area',
		label: 'Size (km^2)',
		formatter: (v) => formatter.format(v),
	},
];

function GridWithContext() {
	let [sortConfig, setSortConfig] = useState(initialSortConfig);

	function handleHeaderClick(sortField) {
		let sortDirection = 'asc';
		if (
			sortConfig.sortField === sortField &&
			sortConfig.sortDirection === 'asc'
		) {
			sortDirection = 'desc';
		}

		let nextSortConfig = {
			sortField,
			sortDirection,
		};

		setSortConfig(nextSortConfig);
	}

	let sortedCountries = orderBy(
		countries,
		sortConfig.sortField,
		sortConfig.sortDirection,
	);

	return (
		<section style={{ '--columns': columns.length }}>
			<GridContext.Provider value={columns}>
				<h3>Countries Grid with sorting using Context</h3>
				<div className="countries-grid">
					{/* No longer need to provide columns here */}
					<GridHeaderRow
						onHeaderClick={handleHeaderClick}
						sortConfig={sortConfig}
					/>
					{/* No longer need to provide columns here */}
					<GridBody countries={sortedCountries} />
				</div>
			</GridContext.Provider>{' '}
		</section>
	);
}

export default GridWithContext;
