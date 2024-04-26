import React, { useEffect, useState } from 'react';

function AsyncAwait() {
	const [countries, setCountries] = useState([]);

	// One-time data request
	useEffect(() => {
		let url = `http://localhost:8000/countries`;
		async function getData() {
			try {
				let response = await fetch(url);
				if (response.ok) {
					let results = await response.json();
					setCountries(results);
				} else {
					throw new Error(`Bad response: ${response.status}`);
				}
			} catch (error) {
				console.error('async-await: Could not fetch data:', error);
			}
		}

		getData();
	}, []);

	return (
		<div className="row">
			<div className="col">
				<h3>Async with async-await</h3>
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

export default AsyncAwait;
