import React from 'react';
import { SortConfig } from '../../demo-types';

interface SortIndicatorProps {
	sortConfig: SortConfig;
	field: string;
}

function SortIndicator({ sortConfig, field }: SortIndicatorProps) {
	if (sortConfig.sortField !== field) {
		return '';
	}

	return <span>{sortConfig.sortDirection === 'asc' ? '⬆️' : '⬇️'}</span>;
}

export default SortIndicator;
