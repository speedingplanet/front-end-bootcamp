import React from 'react';
import SortIndicator from './SortIndicator';

function PaymentsGridHeader({ columns, selectHeader, sortConfig }) {
	return (
		<div className="pgHeader">
			{columns.map((column) => {
				if (column.visible) {
					return (
						<div
							onClick={() => selectHeader(column.field)}
							key={column.field}
						>
							{column.label}
							&nbsp;
							<SortIndicator
								sortConfig={sortConfig}
								field={column.field}
							/>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}

export default PaymentsGridHeader;
