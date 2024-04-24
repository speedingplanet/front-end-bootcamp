import React from 'react';
import GridBodyRow from './GridBodyRowContext';

function GridBody({ countries }) {
	return (
		<div className="countries-grid-body">
			{countries.map((country) => (
				<GridBodyRow
					key={country.id}
					country={country}
				/>
			))}
		</div>
	);
}

export default GridBody;
