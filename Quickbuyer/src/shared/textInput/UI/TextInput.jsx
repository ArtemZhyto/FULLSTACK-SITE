import React, { useState } from "react"
import "../textInput.scss"
const TextInput = ({ customInput, text, label }) => {
	const [isChanged, setIsChanged] = useState(false)
	const toggleChange = () => {
		setIsChanged(!isChanged)
	}

	return (
		<div>
			{isChanged ? (
				<label>
                    {label}
					<p className="yourProfile__label"></p>
					{customInput}
					<button
						className="yourProfile__redactBtn"
						onClick={toggleChange}
					></button>
				</label>
			) : (
				<>
					<button
						className="yourProfile__redactBtn"
						onClick={toggleChange}
					></button>
					<p className="yourProfile__text">{text}</p>
				</>
			)}
		</div>
	)
}

export default TextInput
