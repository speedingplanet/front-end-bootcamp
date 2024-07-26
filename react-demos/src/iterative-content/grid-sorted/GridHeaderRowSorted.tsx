import React from 'react';
import SortIndicator from './SortIndicator';

function GridHeaderRow({ columns, onHeaderClick, sortConfig }) {
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
