import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QueryParams = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [queryParams, setQueryParams] = useSearchParams();

	const paramsAsArray = Array.from(queryParams.entries());
	paramsAsArray.map((entry) => {
		console.log('entry:', entry);
	});

	return (
		<>
			<div className="row">
				<header className="col">
					<h3>Query Parameters</h3>
				</header>
			</div>
			<div className="row">
				<div className="col">
					<p>
						We can access query parameters like{' '}
						<code>
							url?<em>city=Chicago&state=IL</em>
						</code>{' '}
						with the <code>useSearchParams</code> hook.
					</p>
					<p>The parameters passed in were</p>
					<ul>
						{paramsAsArray.map(([key, value], index) => (
							<li key={index}>
								{key}: {value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default QueryParams;
