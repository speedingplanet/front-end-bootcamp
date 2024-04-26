import React from 'react';
import { useParams } from 'react-router-dom';

function RoutingParamDetails() {
	const params = useParams();
	return (
		<div>
			<p>You clicked on the route with the param id: {params.xyz}</p>
		</div>
	);
}

export default RoutingParamDetails;
