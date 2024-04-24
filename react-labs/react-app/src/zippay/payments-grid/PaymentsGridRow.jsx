import React from 'react';

function PaymentsGridRow({ payment, columns }) {
	return (
		<div className="pgRow">
			{columns.map((column) => {
				if (column.visible) {
					return <div key={column.field}>{payment[column.field]}</div>;
				}
				return null;
			})}
		</div>
	);
}

export default PaymentsGridRow;
