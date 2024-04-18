import React, { useState } from "react"
import "../textInput.scss"
const TextInput = ({ customInput, text, label }) => {
	const [isChanged, setIsChanged] = useState(false)
	const toggleChange = () => {
		setIsChanged(!isChanged)
	}
	return (
		<>
			{isChanged ? (
				<div className="yourProfile__textInput">
					<label className="yourProfile__label">
						{label}
						<p className="yourProfile__label"></p>
						{customInput}
					</label>
					<button
						type="button"
						className="yourProfile__redactBtn"
						onClick={toggleChange}
					></button>
				</div>
			) : (
				<label className="yourProfile__label">
					{label}
					<p className="yourProfile__text">{text}</p>
					<button
						type="button"
						className="yourProfile__redactBtn"
						onClick={toggleChange}
					></button>
				</label>
			)}
		</>
	)
}

export default TextInput
