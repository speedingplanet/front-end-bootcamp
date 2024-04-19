import React, { useState } from 'react';
import * as _ from 'lodash';
import dao from './v1-dao';

function CancelPromise() {
	const [duration, setDuration] = useState(10000);
	const [cancelToken, setCancelToken] = useState({ cancel: _.noop });

	const makeRequest = () => {
		console.log('Component: fired request');
		dao
			.queryPeople({ _delay: duration }, { cancelToken: setCancelToken })
			.then(() => console.log('Long request returned'))
			.catch((err) => {
				if (err.isCancel) {
					console.log('Component: Request canceled');
				} else {
					console.error('Something went wrong with the request: ', err);
				}
			});
	};

	return (
		<div>
			<p>
				Click the "Start" button below to kick off a slow request. Then click
				the "Cancel" button to cancel the request. Change the duration of the
				request in the duration field.
			</p>
			<form>
				<div className="form-group">
					<label htmlFor="duration">Duration: </label>
					<input
						type="text"
						name="duation"
						id="duration"
						className="form-control"
						value={duration}
						onChange={(e) => setDuration(e.target.value)}
					/>
				</div>
				<div>
					<button
						type="button"
						className="btn btn-primary"
						onClick={makeRequest}
					>
						Start
					</button>
					&nbsp;
					<button
						type="button"
						className="btn btn-warning"
						onClick={() => {
							console.log('Component: Canceling request');
							cancelToken && cancelToken.cancel('User canceled the request');
						}}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default CancelPromise;
