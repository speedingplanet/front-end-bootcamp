import React from 'react';

function SortIndicator({ sortConfig, field }) {
	if (sortConfig.sortField !== field) {
		return '';
	}

	return <span>{sortConfig.sortDirection === 'asc' ? '⬆️' : '⬇️'}</span>;
}

export default SortIndicator;
