import React, { useState } from 'react';
import { centerLine, ancestor, gen } from './AncestorDescendant.module.css';

function AncestorDescendant() {
	return (
		<section>
			<h2>Ancestor-descendant communication</h2>
			<Ancestor />
		</section>
	);
}

function Ancestor() {
	let [descendantMessage, setDescendantMessage] = useState('');

	function handleSendMessage(message) {
		setDescendantMessage(message);
	}

	return (
		<div style={{ border: '2px solid black', padding: '10px' }}>
			<h3>Ancestor component</h3>
			<div style={{ minHeight: '2em' }}>
				{descendantMessage ? (
					<p>Message received: {descendantMessage}</p>
				) : (
					<p>No messages yet.</p>
				)}
			</div>
			<Gen1
				ancestorMessage="Greetings from the ancestor"
				onSendMessage={handleSendMessage}
			/>
		</div>
	);
}

function Gen1(props) {
	return (
		<div style={{ border: '2px green dotted', padding: '10px' }}>
			<p>First Generation</p>
			<Gen2 {...props} />
		</div>
	);
}

function Gen2(props) {
	return (
		<div style={{ border: '2px green dotted', padding: '10px' }}>
			<p>Second Generation</p>
			<Gen3 {...props} />
		</div>
	);
}

function Gen3(props) {
	return (
		<div style={{ border: '2px green dotted', padding: '10px' }}>
			<p>Third Generation</p>
			<Gen4 {...props} />
		</div>
	);
}

function Gen4({ ancestorMessage, onSendMessage }) {
	return (
		<div style={{ border: '2px green dotted', padding: '10px' }}>
			<p>Fourth Generation</p>
			<Descendant
				ancestorMessage={ancestorMessage}
				onSendMessage={onSendMessage}
			/>
		</div>
	);
}

function Descendant({ ancestorMessage, onSendMessage }) {
	let [message, setMessage] = useState('');

	function handleButtonClick() {
		onSendMessage(message);
	}

	return (
		<div style={{ border: '2px dashed red', padding: '10px' }}>
			<h4>Child</h4>
			<p>This is a value prop, ancestorMessage: {ancestorMessage}</p>
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

export default AncestorDescendant;
