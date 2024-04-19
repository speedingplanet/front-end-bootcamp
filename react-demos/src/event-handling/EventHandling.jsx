import React, { useState } from 'react';

function EventHandling() {
	/*
	let array = useState(0);

	// The value
	let counter = array[0];

	// The setter/mutator for changing the value
	let setCounter = array[1];
	*/
	let [counter, setCounter] = useState(10);
	let [yesNoValue, setYesNoValue] = useState();

	function handleClick() {
		console.log('You clicked on the button!');
	}

	return (
		<section className="row">
			<div className="col">
				<h2>Event handling demo</h2>

				{/* button.btn.btn-primary */}
				<p>
					Click on the button:&nbsp;
					<button
						className="btn btn-primary"
						onClick={handleClick}
					>
						Click
					</button>
				</p>
				<p>
					In-line handler:{' '}
					<button
						className="btn btn-secondary"
						onClick={() => console.log('In-line button')}
					>
						Click
					</button>
				</p>
				<div>
					<button
						className="btn btn-warning"
						onClick={() => setCounter(counter + 1)}
					>
						Increment
					</button>
					<p>Value: {counter}</p>
				</div>
				<div>
					{/* (input:radio+label)*2 */}
					<input
						type="radio"
						name="flipper"
						id="yes"
						value="yes"
						onChange={(e) => {
							setYesNoValue(e.currentTarget.value);
						}}
						checked={yesNoValue === 'yes'}
					/>
					&nbsp;
					<label htmlFor="yes">Yes</label>
					<br />
					<input
						type="radio"
						name="flipper"
						id="no"
						value="no"
						onChange={(e) => setYesNoValue(e.currentTarget.value)}
						checked={yesNoValue === 'no'}
					/>
					&nbsp;
					<label htmlFor="no">No</label>
					<p>You chose {yesNoValue}</p>
					<p>
						<button
							className="btn btn-danger"
							onClick={() => setYesNoValue('no')}
						>
							Cause Trouble
						</button>
					</p>
				</div>
			</div>
		</section>
	);
}

export default EventHandling;
