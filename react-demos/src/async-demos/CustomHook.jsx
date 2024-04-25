import React, { useEffect, useState } from 'react';
import { useApi } from './custom-hooks';

function CustomHook() {
	const [{ data: countries, isLoading, isError }, changeUrl] = useApi();

	if (isLoading) {
		return <div>Loading....</div>;
	}

	if (isError) {
		return <div>Something went wrong...</div>;
	}

	return (
		<div className="row">
			<div className="col">
				<h3>Async with a custom hook</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Country</th>
							<th>Population</th>
						</tr>
					</thead>
					<tbody>
						{countries.map((country) => (
							<tr key={country.id}>
								<td>{country.country}</td>
								<td>{country.pop2022}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CustomHook;
