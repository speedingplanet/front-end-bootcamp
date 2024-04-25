import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetails from './UserDetails';

function UserDetailsRouter() {
	let params = useParams();
	let navigate = useNavigate();
	return (
		<section>
			<UserDetails userId={params.userId} />
			<button
				className="btn btn-info"
				onClick={() => navigate(-1)}
			>
				Back
			</button>
		</section>
	);
}

export default UserDetailsRouter;
