import React, { useEffect, useState } from 'react';
import { dao } from './countries-dao';

function DataAccessObject() {
	const [countries, setCountries] = useState([]);

	// Re-usable data access library
	useEffect(() => {
		async function fetchData() {
			try {
				let fetchedCountries = await dao.getData();
				setCountries(fetchedCountries);
			} catch (error) {
				console.error('dao: Could not fetch data:', error);
			}
		}

		fetchData();
	}, []);

	return (
		<div className="row">
			<div className="col">
				<h3>Async with a Data Access Object (DAO)</h3>
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

export default DataAccessObject;
