import React from 'react';
import GridBodyRow from './GridBodyRow';

function GridBody({ countries, columns }) {
	return (
		<div className="countries-grid-body">
			{countries.map((country) => (
				<GridBodyRow
					key={country.id}
					columns={columns}
					country={country}
				/>
			))}
		</div>
	);
}

export default GridBody;
