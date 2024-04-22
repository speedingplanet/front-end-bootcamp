import React, { useState } from 'react';

function BasicComponent() {
	const [favorite, setFavorite] = useState('');

	function handleFavorite(event) {
		setFavorite(event.currentTarget.value);
	}

	return (
		<div>
			<div>
				<label htmlFor="favorite-fruit">Add your favorite fruit:</label>
				<input
					type="text"
					name="favFruit"
					id="favorite-fruit"
					onChange={handleFavorite}
					value={favorite}
				/>
			</div>
			<ul>
				<li>Apples</li>
				<li>Bananas</li>
				<li>Peaches</li>
				<li data-testid="oranges">Oranges</li>
				<li>Grapes</li>
				<li>Green Grapes</li>
				<li>Plantains</li>
				<li>
					<span style={{ color: 'green' }}>Green</span> Plantains
				</li>
				<li>{favorite}</li>
			</ul>
		</div>
	);
}

export default BasicComponent;
