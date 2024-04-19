import React from 'react';
import { countries } from '../../data/countries-table.json';
import '../GridExample.css';
import GridHeaderRow from './GridHeaderRow';
import GridBody from './GridBody';

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

function GridRefactored() {
	return (
		<section style={{ '--columns': columns.length }}>
			<h3>Countries and their population (refactored)</h3>
			<div className="countries-grid">
				<GridHeaderRow columns={columns} />
				<GridBody
					columns={columns}
					countries={countries}
				/>
			</div>
		</section>
	);
}

export default GridRefactored;
