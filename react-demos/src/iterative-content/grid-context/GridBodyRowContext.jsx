import React, { useContext } from 'react';
import { GridContext } from './grid-context.js';

function GridBodyRow({ country }) {
	let columns = useContext(GridContext);
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
