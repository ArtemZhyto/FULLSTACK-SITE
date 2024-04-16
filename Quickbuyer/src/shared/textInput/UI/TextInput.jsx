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
				<label className="yourProfile__label">
					{label}
					<p className="yourProfile__label"></p>
					{customInput}
					<button
					type="button"
						className="yourProfile__redactBtn"
						onClick={toggleChange}
					></button>
				</label>
			) : (
				<label className="yourProfile__label">
					{console.log("changedtofalse")}
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
