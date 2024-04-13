import axios from "axios"
import { addCurrentUser } from "../slices/currentUser/currentUser"

export const sendRegistration = async ({ password, email }) => {
	console.log(password, email)
	try {
		axios.post(`https://localhost:34673/registration/${password}/${email}`)
	} catch (error) {
		console.log(error)
	}
}
