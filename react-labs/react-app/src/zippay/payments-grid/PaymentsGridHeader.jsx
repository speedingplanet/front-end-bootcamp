import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	updateSortField,
	sortDirectionSelector,
	sortFieldSelector,
} from './payments-grid-slice';
import SortIndicator from './SortIndicator';

function PaymentsGridHeader({ columns }) {
	let dispatch = useDispatch();
	let sortField = useSelector(sortFieldSelector);
	let sortDirection = useSelector(sortDirectionSelector);

	return (
		<div className="pgHeader">
			{columns.map((column) => {
				if (column.visible) {
					return (
						<div
							onClick={() => dispatch(updateSortField(column.field))}
							key={column.field}
						>
							{column.label}
							&nbsp;
							<SortIndicator
								sortConfig={{
									sortField,
									sortDirection,
								}}
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
