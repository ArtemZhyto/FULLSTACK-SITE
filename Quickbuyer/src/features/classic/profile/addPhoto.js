export const addPhoto = (e, setCurrentUser, currentUser) => {
	const typeOfFile = /image.*/i
	console.log(e.target)
	const file = e.target.files[0]
	if (file.type.match(typeOfFile)) {
		const reader = new FileReader()
		reader.onload = () => {
			setCurrentUser({
				...currentUser,
				img: reader.result,
			})
		}
		reader.readAsDataURL(file)
	}
}
