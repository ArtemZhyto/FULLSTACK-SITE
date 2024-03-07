import React, { useState } from "react"
import axios from "axios"

function FileUpload() {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0])
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData()
		formData.append("photo", selectedFile)

		try {
			await axios.post("http://localhost:3000/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			alert("File uploaded successfully.")
		} catch (error) {
			console.error("Error uploading file: ", error)
		}
	}

	return (
		<div>
			<h2>Upload a File</h2>
			<form onSubmit={handleSubmit}>
				<input type="file" onChange={handleFileChange} />
				<button type="submit">Upload</button>
			</form>
		</div>
	)
}

export default FileUpload
