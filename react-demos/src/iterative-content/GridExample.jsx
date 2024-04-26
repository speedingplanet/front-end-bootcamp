import React from 'react';
import { countries } from '../../data/countries-table.json';
import './GridExample.css';

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

function GridExample() {
	// Pass `--columns` in the style attribute to dynamically set the number of
	// columns in the grid
	return (
		<section style={{ '--columns': columns.length }}>
			<h3>Countries and their population</h3>
			<div className="countries-grid">
				<div className="countries-grid-head">
					{columns.map((column) => (
						<div
							className="countries-grid-header"
							key={column.field}
						>
							{column.label}
						</div>
					))}
				</div>
				<div className="countries-grid-body">
					{countries.map((country) =>
						columns.map((column) => (
							<div key={country.id}>{country[column.field]}</div>
						)),
					)}
				</div>
			</div>
		</section>
	);
}

export default GridExample;
