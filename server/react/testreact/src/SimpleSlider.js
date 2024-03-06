import React from 'react';
import axios from 'axios';
import {useState} from "react"

function FileUpload() {
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0])
	}

	const handleFileUpload = () => {
		if (!selectedFile) {
			console.error("Файл не выбран")
			return
		}

		const formData = new FormData()
		formData.append("file", selectedFile)

		axios
			.post(`https://localhost:34675/products/create/Test1&150&Me&USU&Use&Old&Electronic&${formData}`, {
				name: "tim",
				who: "i",
			})
			.then((response) => {
				console.log("Файл успешно загружен:", response)
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleFileUpload}>Загрузить</button>
		</div>
	)
}

export default FileUpload