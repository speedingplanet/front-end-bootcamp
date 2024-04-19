import React, { useState } from 'react';
import { orderBy } from 'lodash';
import { countries } from '../../data/countries-table.json';
import '../GridExample.css';
import GridHeaderRow from './GridHeaderRowSorted';
import GridBody from './GridBodySorted';

let columns = [
	{
		field: 'country',
		label: 'Country',
	},
	{
		field: 'pop2022',
		label: 'Population (2022)',
	},
	{
		field: 'area',
		label: 'Size (km^2)',
	},
];

let initialSortConfig = {
	sortField: '',
	sortDirection: 'asc',
};

function GridSorted() {
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
			<h3>Countries Grid with sorting</h3>
			<div className="countries-grid">
				<GridHeaderRow
					columns={columns}
					onHeaderClick={handleHeaderClick}
					sortConfig={sortConfig}
				/>
				<GridBody
					columns={columns}
					countries={sortedCountries}
				/>
			</div>
		</section>
	);
}

export default GridSorted;
