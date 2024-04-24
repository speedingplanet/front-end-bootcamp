import React from 'react';

function GridBodyRow({ columns, country }) {
	return (
		<>
			{columns.map((column) => {
				let value = country[column.field];
				if (column.formatter) {
					value = column.formatter(value);
				}

				return <div key={column.field}>{value}</div>;
			})}
		</>
	);
}

export default GridBodyRow;
