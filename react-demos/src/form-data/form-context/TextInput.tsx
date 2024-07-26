import React from 'react';
import { nanoid } from 'nanoid';

/**
 *
 * @param {{
 * id?: string,
 * name: string,
 * value: string,
 * updateForm: React.ChangeEventHandler<HTMLInputElement>
 * }} props
 * @returns {JSX.Element}
 */
function TextInput({ id, name, value, updateForm, children, ...props }) {
	let labelText = children || 'Label goes here';
	if (!id) {
		id = nanoid();
	}

	return (
		<>
			<div>
				<label htmlFor={id}>{labelText}</label>
			</div>
			<div>
				<input
					type="text"
					id={id}
					name={name}
					value={value}
					onChange={updateForm}
					{...props}
				/>
			</div>
		</>
	);
}

export default TextInput;
