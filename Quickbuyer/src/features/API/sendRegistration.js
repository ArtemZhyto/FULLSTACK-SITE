import axios from "axios"

export const sendRegistration = async (inputVal) => {
	const { mail, password } = inputVal
	try {
		await axios.post(`https://localhost:34673/registration/${password}/${mail}`)
		const resp = await axios.get(
			`https://localhost:34673/enter/${password}/${mail}`
		)
		localStorage.setItem("currentUser", JSON.stringify(resp.data))
		window.dispatchEvent(new Event("addCurUser"))
	} catch (error) {
		console.log(error)
	}
}
