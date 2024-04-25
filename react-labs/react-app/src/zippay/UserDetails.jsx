import React from 'react';

function UserDetails({ user }) {
	return (
		<div className="user-details">
			<div className="icon">
				<img
					src={`https://robohash.org/${user.userId}`}
					alt="Robot Avatar"
				/>
			</div>
			<div className="fullName">
				{user.firstName} {user.lastName}
			</div>
			<div className="email">{user.email}</div>
			<div className="address">
				{user.city}, {user.province} {user.postalCode}
			</div>
			<div className="userName">{user.userId}</div>
		</div>
	);
}

export default UserDetails;
