import React from 'react';

function PaymentsGridHeader({ columns, selectHeader }) {
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
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}

export default PaymentsGridHeader;
