import React from 'react';

function FormDataDisplay({ firstName, lastName, city, state }) {
	return (
		<div>
			<p>Form data</p>
			<ul>
				<li>First Name: {firstName}</li>
				<li>Last Name: {lastName}</li>
				<li>City: {city}</li>
				<li>State: {state}</li>
			</ul>
		</div>
	);
}

export default FormDataDisplay;
