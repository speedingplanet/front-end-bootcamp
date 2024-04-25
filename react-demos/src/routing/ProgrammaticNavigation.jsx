import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProgrammaticNavigation() {
	const navigate = useNavigate();

	function handleBackButton() {
		navigate(-1);
	}

	function handleParamsButton() {
		navigate('../../event-handling');
	}

	return (
		<div>
			<p>
				Click this button to go{' '}
				<button
					className="btn btn-info"
					onClick={handleBackButton}
				>
					Back
				</button>
			</p>
			<p>
				Click this button to go to the event handling demo:{' '}
				<button
					className="btn btn-warning"
					onClick={handleParamsButton}
				>
					Event Handling
				</button>
			</p>
		</div>
	);
}

export default ProgrammaticNavigation;
