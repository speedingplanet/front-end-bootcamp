import React from 'react';

function GridHeaderRow({ columns }) {
	return (
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
	);
}

export default GridHeaderRow;
