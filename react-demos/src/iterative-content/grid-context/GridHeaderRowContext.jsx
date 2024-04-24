import React, { useContext } from 'react';
import { GridContext } from './grid-context.js';
import SortIndicator from './SortIndicator';

function GridHeaderRow({ onHeaderClick, sortConfig }) {
	let columns = useContext(GridContext);
	return (
		<div className="countries-grid-head">
			{columns.map((column) => (
				<div
					className="countries-grid-header"
					key={column.field}
					onClick={() => onHeaderClick(column.field)}
				>
					{column.label}{' '}
					<SortIndicator
						sortConfig={sortConfig}
						field={column.field}
					/>
				</div>
			))}
		</div>
	);
}

export default GridHeaderRow;
