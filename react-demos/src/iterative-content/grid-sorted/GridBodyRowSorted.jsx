import React from 'react';

function GridBodyRow({ columns, country }) {
	return (
		<>
			{columns.map((column) => (
				<div key={column.field}>{country[column.field]}</div>
			))}
		</>
	);
}

export default GridBodyRow;
