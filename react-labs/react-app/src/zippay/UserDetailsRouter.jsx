import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserDetails from './UserDetails';
import users from '../../data/users.json';

function UserDetailsRouter() {
	let params = useParams();
	let navigate = useNavigate();

	let user = users.find((u) => u.userId === params.userId);

	if (!user) {
		return <div>User {params.userId} not found</div>;
	}

	return (
		<section>
			<UserDetails user={user} />
			<div style={{ marginTop: '5px' }}>
				<button
					className="btn btn-info"
					onClick={() => navigate(-1)}
				>
					Back
				</button>
			</div>
		</section>
	);
}

export default UserDetailsRouter;
