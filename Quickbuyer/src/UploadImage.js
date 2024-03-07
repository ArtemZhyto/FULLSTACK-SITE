import React, { useState } from "react"

function UploadImage() {
	function reqListener() {
		console.log(this.responseText)
	}
	let myRequest = new XMLHttpRequest()
	let data = myRequest.responseXML

	// myRequest.addEventListener("load", reqListener)
	// myRequest.open("GET")
	let formData
	let myForm = document.querySelector(".myForm")
	const [selectedFile, setSelectedFile] = useState(null)

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0])
		console.log(event.target.files[0])
	}
	console.log(selectedFile)
	const handleSubmit = (event) => {
		// setSelectedFile(selectedFile)
		event.preventDefault()

		if (!selectedFile) {
			alert("Выберите файл для загрузки")
			return
		}

		formData = new FormData(myForm)
		formData.append("file", selectedFile)
	}
	console.log(formData)
	return (
		<div>
			<h1>Загрузить изображение</h1>
			<form className="myForm" onSubmit={handleSubmit}>
				<input type="file" onChange={handleFileChange} />
				<button type="submit">Загрузить</button>
			</form>
			{/* <div style={{background="url()"}}></div */}
		</div>
	)
}

export default UploadImage
