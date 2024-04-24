import React from 'react';

function PaymentsGridHeader({ columns }) {
	function handleHeaderClick(field) {
		console.log(`Clicked on the ${field} header`);
	}

	return (
		<div className="pgHeader">
			{columns.map((column) => {
				if (column.visible) {
					return (
						<div
							onClick={() => handleHeaderClick(column.field)}
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
