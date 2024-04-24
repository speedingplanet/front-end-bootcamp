import React from 'react';

function SortIndicator({ sortConfig, field }) {
	if (sortConfig.sortField !== field || sortConfig.sortDirection === '') {
		return '';
	}

	// return <span>{sortConfig.sortDirection === 'asc' ? '⬆️' : '⬇️'}</span>;
	return <span>{sortConfig.sortDirection === 'asc' ? '⏫' : '⏬'}</span>;
}

export default SortIndicator;
