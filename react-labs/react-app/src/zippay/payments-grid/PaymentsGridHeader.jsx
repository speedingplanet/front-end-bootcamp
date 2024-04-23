import React from 'react';

function PaymentsGridHeader({ columns }) {
	return (
		<div className="pgHeader">
			{columns.map((column) => {
				if (column.visible) {
					return <div key={column.field}>{column.label}</div>;
				}
				return null;
			})}
		</div>
	);
}

export default PaymentsGridHeader;
