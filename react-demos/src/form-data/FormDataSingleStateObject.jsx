import React, { useState } from 'react';
import FormDataDisplay from './FormDataDisplay';

const initialState = {
	firstName: '',
	lastName: '',
	city: '',
	state: '',
};

function FormDataSingleStateObject() {
	const [formState, setFormState] = useState(initialState);

	function handleFormUpdate(event) {
		let field = event.currentTarget.name;
		let value = event.currentTarget.value;

		// Shorter, though not clearer, version of the below
		// setFormState({ ...formState, [field]: value });

		let nextState = { ...formState };
		nextState[field] = value;

		setFormState(nextState);
	}

	return (
		<>
			<h3>Single State Object</h3>
			<div className="row">
				<div className="col">
					<form>
						{/* First Name */}
						<div>
							<label htmlFor="first-name">First Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="firstName"
								id="first-name"
								value={formState.firstName}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* Last Name */}
						<div>
							<label htmlFor="last-name">Last Name: </label>
						</div>
						<div>
							<input
								type="text"
								name="lastName"
								id="last-name"
								value={formState.lastName}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* City */}
						<div>
							<label htmlFor="city">City: </label>
						</div>
						<div>
							<input
								type="text"
								name="city"
								id="city"
								value={formState.city}
								onChange={handleFormUpdate}
							/>
						</div>
						{/* State */}
						<div>
							<label htmlFor="state">State: </label>
						</div>
						<div>
							<input
								type="text"
								name="state"
								id="state"
								value={formState.state}
								onChange={handleFormUpdate}
							/>
						</div>
					</form>
				</div>
				<div className="col">
					<FormDataDisplay
						firstName={formState.firstName}
						lastName={formState.lastName}
						city={formState.city}
						state={formState.state}
					/>
				</div>
			</div>
		</>
	);
}

export default FormDataSingleStateObject;
