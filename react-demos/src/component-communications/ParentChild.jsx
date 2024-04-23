import React, { useState } from 'react';

function ParentChild() {
	return (
		<section>
			<h2>Parent-child communication</h2>
			<Parent />
		</section>
	);
}

function Parent() {
	let [displayMessage, setDisplayMessage] = useState('');

	function handleSendMessage(message) {
		setDisplayMessage(message);
	}

	return (
		<div style={{ border: '2px solid black', padding: '10px' }}>
			<h3>Parent component</h3>
			<div style={{ minHeight: '2em' }}>
				{displayMessage ? (
					<p>Message received: {displayMessage}</p>
				) : (
					<p>No messages yet.</p>
				)}
			</div>
			<Child
				parentMessage="Greetings from the Parent"
				onSendMessage={handleSendMessage}
			/>
		</div>
	);
}

function Child({ parentMessage, onSendMessage }) {
	let [message, setMessage] = useState('');

	function handleButtonClick() {
		onSendMessage(message);
	}

	return (
		<div style={{ border: '2px dashed red', padding: '10px' }}>
			<h4>Child</h4>
			<p>This is a value prop, parentMessage: {parentMessage}</p>
			<p>
				This component can send information to the parent via a callback. It
				feels a bit like a custom event handler.
			</p>
			<div className="mt-3">
				<label
					htmlFor="message-input"
					className="form-label"
				>
					Write a message here
				</label>
				<div className="mb-1">
					<input
						type="text"
						className="form-control"
						id="message-input"
						value={message}
						onChange={(event) => setMessage(event.currentTarget.value)}
					/>
				</div>
				<button
					type="button"
					className="btn btn-primary btn-small"
					onClick={handleButtonClick}
				>
					Send
				</button>
			</div>
		</div>
	);
}

export default ParentChild;
